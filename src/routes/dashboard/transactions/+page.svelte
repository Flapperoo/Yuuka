<script lang="ts">
    import { category, transactions } from "$lib/stores/stores";
	import { fail } from "@sveltejs/kit";
	import type { PageData } from "./$types";
    import Icon from '@iconify/svelte';

    export let data: PageData
    let transactionName: string;
    let transactionAmount: number;
    let transactionCategory: number;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    async function addTransaction() {
        const { error: err } = await data.supabase.from('transactions').insert({ name: transactionName, amount: transactionAmount, category_id: transactionCategory, user_id: data.session?.user.id });

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

        const { data: transactionData } = await data.supabase.from('transactions').select('*');
        transactions.set(transactionData);

        transactionName = '';
        transactionAmount = 0.00;
    }

    async function deleteTransaction(item_id: number) {
        const { error: err } = await data.supabase.from('transactions').delete().eq('id', item_id);

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

        const { data: transactionData } = await data.supabase.from('transactions').select('*');
        transactions.set(transactionData);
    }

</script>    
<!--MAIN CONTENT-->
<div class="w-screen">
    <div class="pl-6 py-6"> <!--WEBPAGE TITLE-->
        <h1 class="text-3xl font-bold text-ykwhite">TRANSACTIONS </h1>
    </div>
    <div class="h-4/5">
        <!--Transaction Content-->
        
        <div class="flex flex-row gap-4 px-6 h-full">
            <div class="w-4/5 h-full bg-ykgray overflow-y-auto rounded-xl pb-6">
                <div class="pl-4 py-2 flex items-center justify-center">
                    <h1 class="text-3xl font-bold text-ykpurple">Your Transaction History</h1>
                </div>
                <!--Column 1-->
                <div class="px-5 overflow-y-auto">
                    {#if $transactions.length > 0}
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Transaction Name</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each $transactions as item}
                                    {@const categoryHolder = $category.filter(x => x.id === item.category_id)}
                                    {@const dateHolder =  new Date(item.created_at)}
                                    <tr>
                                        <td>{months[dateHolder.getMonth()]} {dateHolder.getDate()}, {dateHolder.getFullYear()}</td>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td>{categoryHolder[0].name}
                                            <br/>
                                            {#if categoryHolder[0].direction === 'Incoming'}
                                                <span class="badge badge-ghost badge-md bg-yklime text-ykpurple">Incoming</span>
                                            {:else}
                                                <span class="badge badge-ghost badge-md bg-ykred text-ykpurple">Outgoing</span>
                                            {/if}
                                        </td>
                                        <td>
                                            <button on:click={deleteTransaction(item.id)}><Icon icon="ion:trash-outline" width="25" color="red" /></button>
                                        </td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    {/if}                        
                </div>
            </div>
        <!--COLUMN 2-->
            <div class="w-1/5 bg-ykgray rounded-xl py-6">
                <div class="flex-3 pl-4 py-2 justify-start">
                    <h1 class="text-3xl font-bold text-ykpurple">New Transaction</h1>
                </div>
                <div class="gap-2">
                    <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                        <label for="transactionName" class="text-xl font-medium text-ykpurple">Transaction Name:</label>
                        <input type="text" id="transactionName" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={transactionName}>
                    </div>
                    <div class="grid grid-cols-1 pl-10 py-3 mr-10">
                        <label for="transactionAmount" class="text-xl font-medium text-ykpurple">Amount:</label>
                        <input type="text" id="transactionAmount" class="border border-ykpurple p-2 rounded-lg text-ykpurple" bind:value={transactionAmount}>
                    </div>
                    <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                        <label for="transactionCategory" class="text-xl font-medium text-ykpurple">Category:</label>
                        <select id="transactionCategory" class="border-ykpurple p-2 rounded-lg" bind:value={transactionCategory}>
                            <option disabled selected>Choose a category:</option>
                            <option disabled>------</option>
                            <option disabled>| Incoming |</option>
                            {#each $category as item}
                                {#if item.direction === 'Incoming'}
                                    <option value={item.id}>{item.name}</option>
                                {/if}
                            {/each}
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
                        <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3" on:click={addTransaction}>Add</button>
                    </div>
                    
                </div>
            </div>
        
        </div>
        <!--End of Transaction Content-->
    </div>
</div>