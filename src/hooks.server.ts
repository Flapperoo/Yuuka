import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { redirect, type Handle, error } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    });

    event.locals.getSession = async () => {
        const { data: { session } } = await event.locals.supabase.auth.getSession();
        return session;
    };

    if (event.url.pathname.startsWith('/dashboard')) {
        const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, '/login');
        }
    }

    if (event.url.pathname.startsWith('/dashboard') && event.request.method === 'POST') {
        const session = await event.locals.getSession();
        if (!session) {
          throw error(303, '/login');
        }
      }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        }
    });
};