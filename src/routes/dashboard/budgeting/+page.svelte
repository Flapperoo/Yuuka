<script lang="ts">
	import { category, expenses, funding, transactions } from "$lib/stores/stores";

    let availableBalance: number;
    let outgoingAmount: number = 0;
    let incomingAmount: number = 0;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()+1;

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

</script>

<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">BUDGETING</span>
    <div class="flex flex-col">
        <div class="tabs">
            <a href="/dashboard/budgeting" class="tab tab-active tab-lifted tab-lg text-ykwhite ">Budgeting</a>
            <a href="/dashboard/budgeting/settings" class="tab tab-lifted tab-lg text-ykwhite ">Settings</a>
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
    <div class="flex flex-row gap-2 p-3 bg-ykgray grow rounded-md overflow-hidden">
        <div class="flex flex-col bg-ykwhite w-1/2 rounded-md p-3 gap-2">
            <span class="text-2xl font-bold text-ykpurple">Expenses</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                {#each $expenses as item}
                    {@const filteredTransactions = $transactions.filter(x => x.category_id === item.category_id && new Date(x.created_at).getMonth()+1 === currentMonth && new Date(x.created_at).getFullYear() == currentYear)}
                    {@const currentAmount = filteredTransactions.reduce((prev, cur) => prev + cur.amount, 0)}
                    {@const progress = (currentAmount / item.max_amount) * 100}
                    <div class="card bg-ykgray rounded-md">
                        <div class="card-body">
                            <span class="card-title font-bold text-ykpurple">{item.name}</span>
                            <span class="text-md text-ykpurple">P{currentAmount} out of P{item.max_amount}</span>
                            <progress class="progress" value="{progress}" max="100"></progress>
                        </div>
                    </div> 
                {/each}             
            </div>                    
        </div>
        <div class="flex flex-col bg-ykwhite w-1/2 rounded-md p-3 gap-2">
            <span class="text-2xl font-bold text-ykpurple">Funding Goals</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                {#each $funding as item}
                    {@const filteredFunding = $transactions.filter(x => x.category_id === item.category_id && new Date(x.created_at).getMonth()+1 === currentMonth && new Date(x.created_at).getFullYear() == currentYear)}
                    {@const currentAmount = filteredFunding.reduce((prev, cur) => prev + cur.amount, 0)}
                    {@const progress = (currentAmount / item.goal_amount) * 100}
                    <div class="card bg-ykgray rounded-md">
                        <div class="card-body">
                            <span class="card-title font-bold text-ykpurple">{item.name}</span>
                            <span class="text-md text-ykpurple">P{currentAmount} out of P{item.goal_amount}</span>
                            <progress class="progress" value="{progress}" max="100"></progress>
                        </div>
                    </div> 
                {/each}   
            </div>         
        </div>
    </div>
</div>
