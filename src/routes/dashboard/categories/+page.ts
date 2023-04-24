import { category } from '$lib/stores/stores';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } = await parent();
    if (!session) {
        throw redirect(303, '/login');
    }
    const { data: tableData } = await supabase.from('category').select('*');
    category.set(tableData);
};