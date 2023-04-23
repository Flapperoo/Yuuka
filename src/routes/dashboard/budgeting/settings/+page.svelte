<script lang="ts">
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
    <div class="flex p-2 gap-3">
        <div class="w-1/2 p-3 bg-ykwhite rounded-lg">
            <div class="flex-1 p-3 justify-start">
                <h1 class="text-3xl font-bold text-ykpurple">Expenses</h1>
            </div>
            <div class="gap-3">
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="E_Name" class="text-xl font-medium text-ykpurple">Expense Name:</label>
                    <input type="text" id="E_Name" class="border border-ykpurple p-2 rounded-lg text-ykpurple">
                </div>
                <div class="grid grid-cols-1 pl-10 py-3 mr-10">
                    <label for="M_amount" class="text-xl font-medium text-ykpurple">Maximum Amount:</label>
                    <input type="text" id="M_amount" class="border border-ykpurple p-2 rounded-lg text-ykpurple">
                </div>
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="M_amount" class="text-xl font-medium text-ykpurple">Category:</label>
                    <select id="RemindMe" class="border-ykpurple p-2 rounded-lg">
                        <option value="" disabled selected>Choose a category:</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div class="flex justify-center p-5">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Add</button>
                </div>
            </div>
        </div>
        <div class="w-1/2 p-3 bg-ykwhite rounded-lg">
            <div class="flex-1 p-3 justify-start">
                <h1 class="text-3xl font-bold text-ykpurple">Funding Goals</h1>
            </div>
            <div class="gap-3">
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="E_Name" class="text-xl font-medium text-ykpurple">Funding Goal Name:</label>
                    <input type="text" id="E_Name" class="border border-ykpurple p-2 rounded-lg text-ykpurple">
                </div>
                <div class="grid grid-cols-1 pl-10 py-3 mr-10">
                    <label for="M_amount" class="text-xl font-medium text-ykpurple">Goal Amount:</label>
                    <input type="text" id="M_amount" class="border border-ykpurple p-2 rounded-lg text-ykpurple">
                </div>
                <div class="grid grid-cols-1 pl-10 py-1 mr-10">
                    <label for="M_amount" class="text-xl font-medium text-ykpurple">Category:</label>
                    <select id="RemindMe" class="border-ykpurple p-2 rounded-lg">
                        <option value="" disabled selected>Choose a category:</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div class="flex justify-center p-5">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>