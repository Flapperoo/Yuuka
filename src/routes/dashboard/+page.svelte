<script lang="ts">
    import { category, expenses, funding, reminders, transactions } from "$lib/stores/stores";
	import { xlink_attr } from "svelte/internal";

    let availableBalance: number;
    let outgoingAmount: number = 0;
    let incomingAmount: number = 0;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()+1;

    const remindersToday = $reminders.filter(x => x.remind_Day === new Date().getDate());
    console.log(remindersToday);
    const incomingCat = $category.filter(x => x.direction === 'Incoming');
    const outgoingCat = $category.filter(x => x.direction === 'Outgoing');
    outgoingCat.forEach(cat => {
        const outgoingTransactions = $transactions.filter(x => x.category_id === cat.id && new Date(x.created_at).getMonth()+1 === currentMonth && new Date(x.created_at).getFullYear() == currentYear);
        const holdingAmount =  outgoingTransactions.reduce((prev, cur) => prev + cur.amount, 0);
        outgoingAmount = outgoingAmount + holdingAmount;
    });
    incomingCat.forEach(cat => {
        const incomingTransactions = $transactions.filter(x => x.category_id === cat.id && new Date(x.created_at).getMonth()+1 === currentMonth && new Date(x.created_at).getFullYear() == currentYear);
        const holdingAmount =  incomingTransactions.reduce((prev, cur) => prev + cur.amount, 0);
        incomingAmount = incomingAmount + holdingAmount;
    });

    availableBalance = incomingAmount - outgoingAmount;

    let highestFunding: number = 0;
    let highestFundId: number;
    let lowestFunding: number = 0;
    let lowestFundId: number;
    let highestFundingObject;
    let highestFundingCurrent;
    let lowestFundingObject;
    let lowestFundingCurrent;

    $funding.forEach(fund => {
        const fundTransactions = $transactions.filter(x => x.category_id === fund.category_id);
        const holdingAmount = fundTransactions.reduce((prev, cur) => prev + cur.amount, 0);
        const currentPercentage = (holdingAmount / fund.goal_amount) * 100;
        if (highestFunding < currentPercentage) {
            highestFunding = currentPercentage;
            highestFundId = fund.id;
        }
        if (lowestFunding > currentPercentage) {
            lowestFunding = currentPercentage;
            lowestFundId = fund.id;
        }
    });
    if (highestFundId) {
        highestFundingObject = $funding.filter( x => x.id === highestFundId);
        highestFundingCurrent = ($transactions.filter( x => x.category_id === highestFundingObject[0].category_id)).reduce((prev, cur) => prev + cur.amount, 0); 
    };
    if (lowestFundId) {
        lowestFundingObject = $funding.filter( x => x.id === lowestFundId);
        lowestFundingCurrent = ($transactions.filter( x => x.category_id === lowestFundingObject[0].category_id)).reduce((prev, cur) => prev + cur.amount, 0);  
    }
</script>

<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">DASHBOARD</span>
    <div class="flex flex-row h-1/4 gap-2">
        <div class="flex flex-col w-4/12 bg-ykgray p-3 gap-2 rounded-lg">
            <span class="text-2xl font-bold text-yklightpurple">Budgeting</span>
            <div class="stats bg-ykpurple grow rounded-lg">
                <div class="stat">
                    <div class="stat-title">Available Balance</div>
                    <div class="stat-value">P{availableBalance}</div>
                    <div class="stat-desc"> for this month</div>
                </div>
            </div>
            <span class="text-end text-xl font-bold text-yklightpurple"><a href="/dashboard/budgeting"> Go to Budgeting </a></span>
        </div>

        <div class="flex flex-col w-5/12 bg-ykgray p-3 gap-2 rounded-lg">
            <span class="text-2xl font-bold text-yklightpurple">Funding Goals</span>
            <div class="stats rounded-lg grow">
                <div class="stat bg-yklime">
                    {#if highestFundId}
                        <div class="stat-title text-ykpurple">{highestFundingObject[0].name}</div>
                        <div class="stat-value text-ykpurple">P{highestFundingCurrent}</div>
                        <div class="stat-desc text-ykpurple">out of P{highestFundingObject[0].goal_amount}</div>
                    {:else}
                        <div class="stat-title text-ykpurple text-xl font-bold">No Funding Goal</div>
                    {/if}
                </div>
                <div class="stat bg-ykred">
                    {#if lowestFundId}
                        <div class="stat-title text-ykpurple">{lowestFundingObject[0].name}</div>
                        <div class="stat-value text-ykpurple">P{highestFundingCurrent}</div>
                        <div class="stat-desc text-ykpurple">out of P{highestFundingObject[0].goal_amount}</div>
                    {:else}
                        <div class="stat-title text-ykpurple text-xl font-bold">No Funding Goal</div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="flex flex-col w-3/12 bg-ykgray rounded-lg p-3 gap-2 overflow-hidden">
            <span class="text-2xl font-bold text-yklightpurple">Reminders</span>
            <div class="grow overflow-y-auto">
                <table class="table table-compact table-zebra w-full rounded-lg">
                    <tbody>
                        {#each remindersToday as item, i}
                            <tr>
                                <th>{i+1}</th>
                                <td>{item.name} due today</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <span class="text-end text-xl font-bold text-yklightpurple"><a href="/dashboard/bills"> Go to Bill Tracking </a></span>
        </div>
    </div>
    <div class="flex flex-col h-3/4 bg-ykgray rounded-lg p-3 gap-2 overflow-hidden">
        <span class="text-2xl font-bold text-yklightpurple">Your Recent Transactions</span>
        <div class="grow overflow-y-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $transactions as item}
                        {@const categoryHolder = $category.filter(x => x.id === item.category_id)}
                        <tr>
                            <td>{item.created_at}</td>
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
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        <span class="text-end text-xl font-bold text-yklightpurple"><a href="/dashboard/transactions">Go to Transactions</a> </span>
    </div>
</div>