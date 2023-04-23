<script lang="ts">
</script>

<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">Budgeting</span>
    <div class="flex flex-col">
        <div class="flex flex-row gap-1">
            <a href="/dashboard/budgeting" class="p-3 bg-ykpurple text-ykwhite text-3xl rounded-t-lg">Budgeting</a>
            <a href="/dashboard/budgeting/settings" class="p-3 bg-ykpurple text-ykwhite text-3xl rounded-t-lg">Settings</a>
        </div>
        <div class="bg-ykgray flex flex-col rounded-b-md rounded-tr-md gap-2 p-2">
            <div class="flex flex-row gap-2">
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-yklightblue">P260,000.00</div>
                        <div class="stat-title text-ykgray">Available Balance</div>
                    </div>
                </div>
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-yklightblue">P30,000.00</div>
                        <div class="stat-title text-ykgray">For Funding Goals</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-ykred">P60,000.00</div>
                        <div class="stat-title text-ykgray">Total Expenses</div>
                    </div>
                </div>
                <div class="stats rounded-md shadow w-1/2">
                    <div class="stat bg-ykpurple place-items-center">
                        <div class="stat-value text-yklime">P360,000.00</div>
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
                <div class="card bg-ykgray rounded-md">
                    <div class="card-body">
                        <span class="card-title font-bold text-ykpurple">Grocery</span>
                        <span class="text-md text-ykpurple">P30,000 out of P100,000</span>
                        <progress class="progress" value="30" max="100"></progress>
                    </div>
                </div>              
            </div>                    
        </div>
        <div class="flex flex-col bg-ykwhite w-1/2 rounded-md p-3 gap-2">
            <span class="text-2xl font-bold text-ykpurple">Funding Goals</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                <div class="card bg-ykgray rounded-md">
                    <div class="card-body">
                        <span class="card-title font-bold text-ykpurple">Mirage</span>
                        <span class="text-md text-ykpurple">P10,000 out of P350,000</span>
                        <progress class="progress" value="30" max="100"></progress>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</div>
