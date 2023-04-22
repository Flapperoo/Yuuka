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
            <div class="w-1/5 p-2 bg-yklightpurple rounded-t-lg border">
                <h1 class="text-3xl font-bold text-ykwhite justify-center items-center flex"><a href="/dashboard/budgeting">Dashboard</a></h1>
            </div>
            <div class="w-1/8 p-3 bg-yklightpurple rounded-t-lg border">
                <h1 class="text-3xl font-bold text-ykwhite justify-center items-center flex"><a href="/dashboard/budgeting/settings">Sett...</a></h1>
            </div>
        </div>
        <div class="px-6 max-h-full overflow-hidden">
            <!--Main Div-->
            <div class="flex-1 p-5 bg-ykgray rounded-md h-4/5 ">
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
                                <!--Card Containers-->
                                <div class="flex flex-col gap-3 p-2 h-96 overflow-auto">
                                    <!--Card 1-->
                                    <div class="flex bg-ykgray p-3 rounded-lg">
                                        <div class="text-start ml-3">
                                            <div class="flex items-center">
                                                <span class="font-bold text-ykpurple text-4xl mr-2">Groceries</span>
                                                <span class="font-bold text-ykpurple text-4xl mr-2">|</span>
                                                <span class="font-bold text-ykpurple text-4xl mr-2">40%</span>
                                            </div>
                                            <div class="flex items-center pt-4">
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">PHP 30,000.00</span>
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">of</span>
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">PHP 120,000.00</span>
                                            </div>
                                            <div class="flex items-center pt-8 w-full">
                                                <input type="range" min="0" max="100" value="25" class="range range-yklightpurple bg-ykpurple" />
                                            </div>
                                            <div class="justify-end">
                                                <span class="font-bold text-ykpurple text-2xl">25%</span>
                                                <span class="font-bold text-ykpurple text-2xl">Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End of Card 1-->
                                </div>
                                <!--End of Card Containers-->
                            </div>
                        </div>
                        <!--End of Column 1-->

                        <!--Column 2-->
                        <div class="w-1/2 p-3 bg-ykwhite rounded-lg">
                            <div class="flex-1 p-3 justify-start">
                                <h1 class="text-3xl font-bold text-ykpurple">Funding Goals</h1>
                            </div>
                            <div class="gap-3">
                                <!--Card Containers-->
                                <div class="flex flex-col gap-3 p-2 h-96 overflow-auto">
                                    <!--Card 1-->
                                    <div class="flex bg-ykgray p-3 rounded-lg">
                                        <div class="text-start ml-3">
                                            <div class="flex items-center">
                                                <span class="font-bold text-ykpurple text-4xl mr-2">Toyota Vios GRS CVT</span>
                                                <span class="font-bold text-ykpurple text-4xl mr-2">|</span>
                                                <span class="font-bold text-ykpurple text-4xl mr-2">40%</span>
                                            </div>
                                            <div class="flex items-center pt-4">
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">PHP 100,000.00</span>
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">of</span>
                                                <span class="font-bold text-ykdarkgray text-3xl mr-2">PHP 1,000,000.00</span>
                                            </div>
                                            <div class="flex items-center pt-8 w-full">
                                                <input type="range" min="0" max="100" value="10" class="range range-yklightpurple bg-ykpurple" />
                                            </div>
                                            <div class="justify-end">
                                                <span class="font-bold text-ykpurple text-2xl">10%</span>
                                                <span class="font-bold text-ykpurple text-2xl">Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End of Card 1-->
                                </div>
                                <!--End of Card Containers-->
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
