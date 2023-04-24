<script lang="ts">
	import { category, transactions } from "$lib/stores/stores";
	import { fail } from "@sveltejs/kit";
	import type { PageData } from "./$types";

    export let data: PageData;
    let expenseName: string; 
    let expenseCategory: number; 
    let fundingName: string;
    let fundingCategory: number;
    let expenseAmount: number;
    let fundingAmount: number;
    let availableBalance: number;
    let outgoingAmount: number = 0;
    let incomingAmount: number = 0;

    async function addExpense() {
        const { error: err } = await data.supabase.from('expenses').insert({ name: expenseName, max_amount: expenseAmount, category_id: expenseCategory, user_id: data.session?.user.id });

        if (err) {
            if (err.status === 400) {
                return fail(400, {
                error: 'Something went wrong.',
                });
            }
            return fail(500, {
                err: 'Server error. Try again later.',
            });
        }

        expenseName = '';
        expenseAmount = 0.00;
    }

    async function addFunding() {
        const { error: err } = await data.supabase.from('funding').insert({ name: fundingName, goal_amount: fundingAmount, category_id: fundingCategory, user_id: data.session?.user.id })

        if (err) {
            if (err.status === 400) {
                return fail(400, {
                error: 'Something went wrong.',
                });
            }
            if (err.status === 403) {
                return fail(403, {
                error: 'Something went wrong.',
                });
            }
            return fail(500, {
                err: 'Server error. Try again later.',
            });
        }

        fundingName = '';
        fundingAmount = 0.00;
    }

    const incomingCat = $category.filter(x => x.direction === 'Incoming');
    const outgoingCat = $category.filter(x => x.direction === 'Outgoing');
    outgoingCat.forEach(cat => {
        const outgoingTransactions = $transactions.filter(x => x.category_id === cat.id);
        const holdingAmount =  outgoingTransactions.reduce((prev, cur) => prev + cur.amount, 0);
        outgoingAmount = outgoingAmount + holdingAmount;
    });
    incomingCat.forEach(cat => {
        const incomingTransactions = $transactions.filter(x => x.category_id === cat.id);
        const holdingAmount =  incomingTransactions.reduce((prev, cur) => prev + cur.amount, 0);
        incomingAmount = incomingAmount + holdingAmount;
    });

    availableBalance = incomingAmount - outgoingAmount;
</script>

<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">BUDGETING</span>
    <div class="flex flex-col">
        <div class="tabs">
            <a href="/dashboard/budgeting" class="tab tab-lifted tab-lg text-ykwhite ">Budgeting</a>
            <a href="/dashboard/budgeting/settings" class="tab tab-active tab-lifted tab-lg text-ykwhite ">Settings</a>
        </div>
        <div class="bg-ykgray flex flex-col rounded-md gap-2 p-2">
            <div class="flex flex-row gap-2">
                <div class="stats rounded-md shadow w-full">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-yklightblue">P{availableBalance}</div>
                        <div class="stat-title text-ykgray">Available Balance</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-ykred">P{outgoingAmount}</div>
                        <div class="stat-title text-ykgray">Total Expenses</div>
                    </div>
                </div>
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-yklime">P{incomingAmount}</div>
                        <div class="stat-title text-ykgray">Total Incoming</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex p-2 gap-3">
        <div class="w-1/2 p-3 bg-ykwhite rounded-lg">
            <div class="flex-1 p-3 justify-start">
                <h1 class="text-3xl font-bold text-ykpurple">Expenses</h1>
            </div>
            <div class="gap-3">
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="expenseName" class="text-xl font-medium text-ykpurple">Expense Name:</label>
                    <input type="text" id="expenseName" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={expenseName}>
                </div>
                <div class="grid grid-cols-1 pl-10 py-3 mr-10">
                    <label for="expenseAmount" class="text-xl font-medium text-ykpurple">Maximum Amount:</label>
                    <input type="number" min="0" id="expenseAmount" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={expenseAmount}>
                </div>
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="expenseCategory" class="text-xl font-medium text-ykpurple">Category:</label>
                    <select id="expenseCategory" class="border-ykpurple p-2 rounded-lg" bind:value={expenseCategory}>
                        <option disabled selected>Choose a category:</option>
                        <option disabled>------</option>
                        <option disabled>| Outgoing |</option>
                        {#each $category as item}
                            {#if item.direction === 'Outgoing'}
                                <option value={item.id}>{item.name}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
                <div class="flex justify-center p-5">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3" on:click={addExpense}>Add</button>
                </div>
            </div>
        </div>
        <div class="w-1/2 p-3 bg-ykwhite rounded-lg">
            <div class="flex-1 p-3 justify-start">
                <h1 class="text-3xl font-bold text-ykpurple">Funding Goals</h1>
            </div>
            <div class="gap-3">
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="fundingName" class="text-xl font-medium text-ykpurple">Funding Goal Name:</label>
                    <input type="text" id="fundingName" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={fundingName}>
                </div>
                <div class="grid grid-cols-1 pl-10 py-3 mr-10">
                    <label for="fundingAmount" class="text-xl font-medium text-ykpurple">Goal Amount:</label>
                    <input type="number" min="0" id="fundingAmount" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={fundingAmount}>
                </div>
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="fundingCategory" class="text-xl font-medium text-ykpurple">Category:</label>
                    <select id="fundingCategory" class="border-ykpurple p-2 rounded-lg" bind:value={fundingCategory}>
                        <option disabled selected>Choose a category:</option>
                        <option disabled>------</option>
                        <option disabled>| Outgoing |</option>
                        {#each $category as item}
                            {#if item.direction === 'Outgoing'}
                                <option value={item.id}>{item.name}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
                <div class="flex justify-center p-5">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3" on:click={addFunding}>Add</button>
                </div>
            </div>
        </div>
    </div>
</div>