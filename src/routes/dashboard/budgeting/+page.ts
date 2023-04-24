import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { category, expenses, funding, transactions } from "$lib/stores/stores";

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } =  await parent();
    if (!session) {
        throw redirect(303, '/login');
    };
    const { data: expensesData } = await supabase.from('expenses').select('*');
    expenses.set(expensesData);
    const { data: fundingData } = await supabase.from('funding').select('*');
    funding.set(fundingData);
    const { data: transactionsData } = await supabase.from('transactions').select('*');
    transactions.set(transactionsData);
    const { data: categoryData } = await supabase.from('category').select('*');
    category.set(categoryData);
};