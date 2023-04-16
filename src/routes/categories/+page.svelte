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
    <!--END OF SIDE NAV BAR-->
    
   
    <!--MAIN CONTENT-->
    <div class="h-screen w-screen">
        <div class="col-span-6 mt-20 ml-20">
            <span class="text-8xl drop-shadow-lg font-bold text-ykwhite">CATEGORIES</span>
        </div>

        <div class="bg-ykgray rounded-md pb-5 px-5 container mx-auto">
            
            <div class= "grid grid-cols-2 container mx-auto m-20 w-1/2">
                <div class= "rounded-l-lg bg-ykpurple text-center mt-10 box-content h-20 ">  
                    <button class ="text-ykwhite p-2 mt-4 text-3xl font-bold"> INCOMING </button>
                </div>
        
                <div class= "rounded-r-lg bg-ykpurple text-center mt-10 box-content h-20">  
                    <button class ="text-ykwhite p-2 mt-4 text-3xl font-bold"> OUTGOING </button>
                </div>
            </div>

            <div class="content-between grid grid-cols-6 gap-4 bg-ykgray rounded-md pb-5 px-5">
                <div class="p-2 mx-auto">
                    <span class = "text-3xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-6">Add Category</span>
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="text">New Category</label>
                    <input id="New_Category_Name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                    focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Input new category . . .">
                </div>
                <div class="p-2 mx-auto">
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="amount">Select Class:</label>
                    <input id="amount" name="amount" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                    focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Incoming/Outgoing">
                    <div class="bg-ykwhite rounded-md p-3">
                        <ul>
                            <li class="p-2">Incoming</li>
                            <li class="p-2">Outgoing</li>
                        </ul>
                    </div>
                </div>

                <div class="mx-auto"> 
                    <button class="rounded-md bg-ykpurple text-ykwhite p-2 pr-4 pl-4">Save</button>
                </div>

                <div class="mx-auto"> 
                    <button class="rounded-md bg-ykpurple text-ykwhite p-2 pr-4 pl-4">Delete</button>
                </div>

                <div class="p-2 mx-auto">
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="amount">Select Class:</label>
                    <input id="amount" name="amount" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                    focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Incoming/Outgoing">
                    <div class="bg-ykwhite rounded-md p-3">
                        <ul>
                            <li class="p-2">Incoming</li>
                            <li class="p-2">Outgoing</li>
                        </ul>
                    </div>
                </div>
            
                <div class="p-2">
                    <span class = "text-3xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-6">Delete Category</span>
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2" for="text">Existing Category:</label>
                    <input id="Existing_Category_Name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                    focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Select Category">
                    <div class="bg-ykwhite rounded-md p-3">
                        <ul>
                            <li class="p-2">-</li>
                            <li class="p-2">-</li>
                            <li class="p-2">-</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class = "mt-20 text-center ">
                <span class = "text-4xl font-bold">INCOMING</span>
            </div>

            <div class = " grid grid-cols-4 gap-4 place-content-center bg-ykgray rounded-md ">
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
                <div class= "rounded-lg bg-ykpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                </div>
            </div>
        </div>
    </div>
    <!--END OF MAIN CONTENT-->
</div>
