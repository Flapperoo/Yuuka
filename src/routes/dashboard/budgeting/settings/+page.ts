import { category, transactions } from "$lib/stores/stores";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } = await parent();
    if (!session) {
        throw redirect(303, '/login');
    };
    const loadTransactions = async () => {
        const { data: transactionsData } = await supabase.from('transactions').select('*');
        transactions.set(transactionsData);
    }
    const loadCategory = async () => {
        const { data: categoryData } = await supabase.from('category').select('*');
        category.set(categoryData);
    }

    return{
        a: loadTransactions(),
        b: loadCategory()
    }
};