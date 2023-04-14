<script>
</script>

<div class="flex bg-ykdarkgray overflow-auto">
    <!--SIDE NAV BAR-->
    <div class="bg-ykpurple h-screen px-6 py-10 w-72 overflow-auto">
        <img src="Yuuka_Logo.png" alt="yuuka logo" class="bg-cover bg-center justify-center drop-shadow-lg p-5 w-230 h-230 object-cover object-center"> <br>
            <h1 class="font-bold text-center text-2xl">Welcome Back!</h1><br>
            <h1 class="font-bold text-center text-xl">Sensei Master</h1><br>
            <hr class="my-2">
            <!--Nav list-->
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Dashboard</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Yuuka Helper</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Budgeting</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Bill Tracker</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Categories</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Transactions</span>
            </div>
            <div class="p-1.5 mt-3 flex items-center rounded-md px-4">
                <ion-icon name="speedometer-sharp"></ion-icon>
                <span class="text-[20px] ml-4 text-yklightblue">Settings</span>
            </div>
    </div>
    <span class="p-5 text-4xl drop-shadow-lg font-bold text-ykwhite">Bill Tracker</span>
    
    <!--END OF SIDE NAV BAR-->
    <!--MAIN CONTENT-->
    <div class="grid grid-cols-5 h-screen w-screen gap-10 py-10 pl-10 pr-10">
        <div class="col-span-3 row-span-1 bg-ykgray rounded-md p-5">
            <div class="p-2">
                <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="text">Bill Name</label>
                <input id="bill_name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="">
            </div>
            <div class="p-2">
                <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="amount">Amount</label>
                <input id="amount" name="amount" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="₱">
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="p-2"> <!--1st Column-->
                    <h1 class="text-2xl font-medium text-ykpurple mb-2 md:mb-0 pr-4 pb-2">Repeat Pattern</h1>
                    <div id="dropdown_1">
                        <button class="">
                            <label class="text-xl block text-ykpurple font-light mb-2 md:mb-0 text-left" for="text">Occurs</label>
                            <input type="text" class="relative block w-full ppearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                            focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        </button>
                        <div class="bg-ykwhite rounded-md p-3">
                            <ul>
                                <li class="p-2">Everyday</li>
                                <li class="p-2">Weekly</li>
                                <li class="p-2">Bi-Weekly</li>
                            </ul>
                        </div>
                    </div>
                    <div id="dropdown_2">
                        <button class="">
                            <label class="text-xl block text-ykpurple font-light mb-2 md:mb-0 text-left" for="text">On</label>
                            <input type="text" class="relative block w-full ppearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                            focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        </button>
                        <div class="bg-ykwhite rounded-md p-3">
                            <ul>
                                <li class="p-2">Jan</li>
                                <li class="p-2">Feb</li>
                                <li class="p-2">March</li>
                            </ul>
                        </div>
                    </div>
                </div><!--END OF 1st Column-->

                <div class="p-2"> <!--2md Column-->
                    <h1 class="text-2xl font-medium text-ykpurple mb-2 md:mb-0 pr-4 pb-2">Remind Me</h1>
                            <div id="dropdown_1">
                                <button class="">
                                    <label class="text-xl block text-ykpurple font-light mb-2 md:mb-0 text-left" for="text">Every</label>
                                    <input type="text" class="relative block w-full ppearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                </button>
                                <div class="bg-ykwhite rounded-md p-3">
                                    <ul>
                                        <li class="p-2">1st Week of the Month</li>
                                        <li class="p-2">2nd Week of the Month</li>
                                        <li class="p-2">3rd Week of the Month</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="dropdown_2">
                                <button class="">
                                    <label class="text-xl block text-ykpurple font-light mb-2 md:mb-0 text-left" for="text">Before Due In:</label>
                                    <input type="text" class="relative block w-full ppearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                </button>
                                <div class="bg-ykwhite rounded-md p-3">
                                    <ul>
                                        <li class="p-2">1 day</li>
                                        <li class="p-2">2 days</li>
                                        <li class="p-2">3 days</li>
                                    </ul>
                                </div>
                            </div>
                </div><!--END OF 2nd Column-->
            </div>
            <div class="flex justify-end p-5 pt-10 mt-5">
                <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">
                  Save
                </button>
                
                <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        </div>
        <!--2nd Column MAIN-->
        <div class="col-span-2 row-span-1 bg-ykgray rounded-md p-5">
            <p class="text-2xl font-bold text-ykpurple">Existing Reminders</p>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
                <div class="text-ykpurple">
                    Bill Name 1
                </div>
                <div class="text-ykpurple place-content-end">
                    <input type="checkbox" id="myCheckbox" class="checkbox-input">
                </div>
                <div class="text-ykpurple">
                    Bill Name 2
                </div>
                <div class="text-ykpurple place-content-end">
                    <input type="checkbox" id="myCheckbox" class="checkbox-input">
                </div>
                <div class="text-ykpurple">
                    Bill Name 1
                </div>
                <div class="text-ykpurple place-content-end">
                    <input type="checkbox" id="myCheckbox" class="checkbox-input">
                </div>
                <div class="text-ykpurple">
                    Bill Name 2
                </div>
                <div class="text-ykpurple place-content-end">
                    <input type="checkbox" id="myCheckbox" class="checkbox-input">
                </div>
              </div>
              <div class="flex justify-end p-5 pt-10 mt-5">
                <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">
                  Save
                </button>
                
                <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        </div>
    </div>
    <!--END OF MAIN CONTENT-->
</div>

