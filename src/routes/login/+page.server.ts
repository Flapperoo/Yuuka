import { AuthApiError } from "@supabase/supabase-js";
import { redirect, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = await request.formData();

        const email = body.get('email') as string;
        const password = body.get('password') as string;

        const { error: err } = await locals.supabase.auth.signInWithPassword({
            email,
            password
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
              return fail(400, {
                error: 'Invalid credentials.',
              });
            }
            return fail(500, {
              err: 'Server error. Try again later.',
            });
        }
        
        throw redirect(303, '/dashboard');
    }
};