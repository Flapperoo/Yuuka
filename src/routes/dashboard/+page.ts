import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { category, expenses, funding, reminders, transactions } from "$lib/stores/stores";

export const load: PageLoad = async ({ parent }) => {
    const { supabase, session } =  await parent();
    if (!session) {
        throw redirect(303, '/login');
    };
    const loadExpenses = async () => {
        const { data: expensesData } =  await supabase.from('expenses').select('*');
        expenses.set(expensesData);
    }
    const loadFunding = async () => {
        const { data: fundingData } = await supabase.from('funding').select('*');
        funding.set(fundingData);
    }
    const loadTransactions = async () => {
        const { data: transactionsData } = await supabase.from('transactions').select('*');
        transactions.set(transactionsData);
    }
    const loadCategory = async () => {
        const { data: categoryData } = await supabase.from('category').select('*');
        category.set(categoryData);
    }
    const loadReminders = async () => {
        const { data: remindersData } = await supabase.from('reminders').select('*');
        reminders.set(remindersData);
    }

    return {
        a: loadExpenses(),
        b: loadFunding(),
        c: loadTransactions(),
        d: loadCategory(),
        e: loadReminders()
    }
    
    
    
    
};