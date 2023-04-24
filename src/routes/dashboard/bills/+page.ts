import { reminders } from "$lib/stores/stores";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } =  await parent();
    if (!session) {
        throw redirect(303, '/login');
    };
    const { data: remindersData } = await supabase.from('reminders').select('*');
    reminders.set(remindersData);
};