<script>
</script>

<div class="flex h-screen bg-ykdarkgray">
    <!-- SIDE NAV-BAR -->
    <div class="w-72 px-6 py-10 bg-ykpurple">
        <img src="Yuuka_Logo.png" alt="yuuka logo" class="bg-cover bg-center justify-center drop-shadow-lg p-5 w-230 h-230 object-cover object-center"> <br>
            <h1 class="font-bold text-center text-2xl">Welcome Back!</h1><br>
            <h1 class="font-bold text-center text-xl">Sensei Master</h1><br>
            <hr class="my-2">
            <!--NAV LIST-->
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue "><a href="#">Dashboard</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Yuuka Helper</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Budgeting</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Bill Tracker</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Categories</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Transactions</a></span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue"><a href="#">Settings</a></span>
            </div>
    </div>
    <!--END OF SIDEBAR-->
    
    <!--Main Div-->
    <div class="flex-1 max-h-full">
        <div class="p-6">
            <h1 class="text-3xl font-bold">Budgeting</h1>
        </div>

        <div class="flex w-1/8 px-6"> <!--TAB TITLE-->
            <div class="w-1/8 p-2 bg-yklightpurple rounded-t-lg border">
                <h1 class="text-3xl font-bold text-ykwhite justify-center items-center flex"><a href="/dashboard/budgeting">Dash...</a></h1>
            </div>
            <div class="w-1/5 p-3 bg-yklightpurple rounded-t-lg border">
                <h1 class="text-3xl font-bold text-ykwhite justify-center items-center flex"><a href="/dashboard/budgeting/settings">Settings</a></h1>
            </div>
        </div>
        <div class="px-6 overflow-hidden">
            <!--Main Div-->
            <div class="flex-1 p-5 bg-ykgray rounded-md ">
                <!--Balance and Incoming-->
                <div class="grid grid-cols-2 gap-3 p-2">
                    <div class="grid p-3 bg-ykpurple rounded-lg">
                        <div class="items-center justify-center">
                            <div class="text-center">
                                <span class="font-bold text-ykwhite text-5xl">Php 260,000.00</span><br>
                                <span class="font-bold text-xl text-yklightblue">Available Balance</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid p-3 bg-ykpurple rounded-lg">
                        <div class="items-center justify-center">
                            <div class="text-center">
                                <span class="font-bold text-ykwhite text-5xl">Php 360,000.00</span><br>
                                <span class="font-bold text-xl text-yklightblue">Total Incoming</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End of Balance and Incoming-->
                <!--Balance-->
                <div class="flex p-2 gap-3">
                    <div class="flex-1 p-3 bg-ykpurple rounded-lg">
                        <div class="items-center justify-center">
                            <div class="text-center">
                                <span class="font-bold text-ykwhite text-5xl">Php 60,000.00</span><br>
                                <span class="font-bold text-xl text-yklightblue">Total Expenses</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 p-3 bg-ykpurple rounded-lg">
                        <div class="items-center justify-center">
                            <div class="text-center">
                                <span class="font-bold text-ykwhite text-5xl">Php 30,000.00</span><br>
                                <span class="font-bold text-xl text-yklightblue">Funding Goal Expenses</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End of Balance-->
                <!--Cards-->
                <div class="">
                    <div class="flex p-2 gap-3">
                        <!--Column 1-->
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
                        <!--End of Column 1-->

                        <!--Column 2-->
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
                        <!--End of Column 2-->
                    </div>
                </div>

                <!--End of Cards-->
            </div>
        </div>
    </div>
    <!--End of Main Div-->
        
    
    </div>