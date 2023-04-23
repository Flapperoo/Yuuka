<script lang="ts">
</script>

<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">YUUKA DASHBOARD</span>
    <div class="flex flex-row h-1/4 gap-2">
        <div class="flex flex-col w-4/12 bg-ykgray p-3 gap-2 rounded-lg">
            <span class="text-2xl font-bold text-yklightpurple">Budgeting</span>
            <div class="stats bg-ykpurple grow rounded-lg">
                <div class="stat">
                    <div class="stat-title">Available Balance</div>
                    <div class="stat-value">P130,000.00</div>
                    <div class="stat-desc"> for this month</div>
                </div>
            </div>
            <span class="text-end text-xl font-bold text-yklightpurple"><a href="/dashboard/budgeting"> Go to Budgeting </a></span>
        </div>

        <div class="flex flex-col w-5/12 bg-ykgray p-3 gap-2 rounded-lg">
            <span class="text-2xl font-bold text-yklightpurple">Funding Goals</span>
            <div class="stats rounded-lg grow">
                <div class="stat bg-yklime">
                    <div class="stat-title text-ykpurple">Ipad Mini</div>
                    <div class="stat-value text-ykpurple">P30,000</div>
                    <div class="stat-desc text-ykpurple">out of P40,000</div>
                </div>
                <div class="stat bg-ykred">
                    <div class="stat-title text-ykpurple">Mirage</div>
                    <div class="stat-value text-ykpurple">P10,000</div>
                    <div class="stat-desc text-ykpurple">out of P350,000</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col w-3/12 bg-ykgray rounded-lg p-3 gap-2 overflow-hidden">
            <span class="text-2xl font-bold text-yklightpurple">Reminders</span>
            <div class="grow overflow-y-auto">
                <table class="table table-compact table-zebra w-full rounded-lg">
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Meralco Bill in 3 days</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Maynilad Bill in 2 days</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>PLDT Bill in 23 days</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Utang in 3 days</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Beer Utang in 3 days</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="text-end text-xl font-bold text-yklightpurple"><a href="#"> Go to Bill Tracking </a></span>
        </div>
    </div>
    <div class="flex flex-col h-3/4 bg-ykgray rounded-lg p-3 gap-2 overflow-hidden">
        <span class="text-2xl font-bold text-yklightpurple">Your Recent Transactions</span>
        <div class="grow overflow-y-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Job Income
                            <br/>
                            <span class="badge badge-ghost badge-md bg-yklime text-ykpurple">Incoming</span>
                        </td>
                        <td>50,000</td>
                        <td>09/03/2022</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Grocery
                            <br/>
                            <span class="badge badge-ghost badge-md bg-ykred text-ykpurple">Outgoing</span>
                        </td>
                        <td>10,000</td>
                        <td>09/02/2022</td>
                    </tr>
                </tbody>                
            </table>
        </div>
        <span class="text-end text-xl font-bold text-yklightpurple"><a href="/dashboard/transactions">Go to Transactions</a> </span>
    </div>
</div>