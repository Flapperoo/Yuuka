<script>
</script>
<div class="flex bg-ykdarkgray overflow-auto">
    <!--SIDE NAV BAR-->
    <div class="bg-ykpurple h-screen px-6 py-10 w-72 overflow-auto">
        <img src="/src/lib/static/Yuuka_Logo.png" alt="yuuka logo" class="bg-cover bg-center justify-center drop-shadow-lg p-5 w-230 h-230 object-cover object-center"> <br>
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
                <div class= "btn btn-active rounded-l-full bg-ykdarkgray text-center mt-10 box-content h-20 ">  
                    <button class ="text-ykwhite p-2 text-3xl font-bold"> INCOMING </button>
                </div>
                <div class= "btn btn-active rounded-r-full bg-ykdarkgray text-center mt-10 box-content h-20">  
                    <button class ="text-ykwhite p-2 text-3xl font-bold"> OUTGOING </button>
                </div>
            </div>

            <div class="content-between grid grid-cols-6 bg-ykgray rounded-md pb-5 px-5">
                <div class="p-2 mx-auto">
                    <span class = "text-3xl block text-ykpurple font-bold mb-2 md:mb-0 pr-4 pb-6">Add Category</span>
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2 mt-9" for="text">New Category</label>
                    <input id="New_Category_Name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-ykpurple px-3 py-2 text-ykpurple placeholder-gray-500" placeholder="Input new category . . .">
                </div>
                <div class="p-2 mx-auto">
                    <label for="class" class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2 mt-24">Select Class:</label>
                    <select id="class" class="border-ykpurple p-2 rounded-lg w-52"placeholder="Incoming/Outgoing">
                        <option value="" disabled selected>Incoming/Outgoing</option>
                        <option value="option1">Incoming</option>
                        <option value="option2">Outgoing</option>
                    </select>
                </div>


                <div class="mx-auto"> 
                    <button class="btn btn-primary rounded-full w-24 bg-ykpurple text-ykwhite p-2 pr-4 pl-4 mt-36 ">Save</button>
                </div>

                <div class="mx-auto"> 
                    <button class="btn btn-primary rounded-full w-24 bg-ykpurple text-ykwhite p-2 pr-4 pl-4 mt-36">Delete</button>
                </div>

                <!--<div class="p-2 mx-auto">
                    <label class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2 mt-24" for="class">Select Class:</label>
                    <input id="Class" name="class" type="text" required class=" w-40 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-ykpurple placeholder-gray-500 sm:text-sm" placeholder="Incoming/Outgoing">
                    <div class="bg-ykwhite rounded-md p-3">
                        <ul>
                            <li class="p-2">Incoming</li>
                            <li class="p-2">Outgoing</li>
                        </ul>
                    </div>
                </div>-->
                <div class="p-2 mx-auto">
                    <label for="class" class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2 mt-24">Select Class:</label>
                    <select id="class" class="border-ykpurple p-2 rounded-lg w-52"placeholder="Incoming/Outgoing">
                        <option value="" disabled selected>Incoming/Outgoing</option>
                        <option value="option1">Incoming</option>
                        <option value="option2">Outgoing</option>
                    </select>
                </div>

                <div class="p-2">
                    <span class = "text-3xl block text-ykpurple font-bold mb-2 md:mb-0 pr-4 pb-6 ">Delete Category</span>
                    <label for="class" class="text-2xl block text-ykpurple font-medium mb-2 md:mb-0 pr-4 pb-2 ">Existing Category:</label>
                    <select id="class" class="border-ykpurple p-2 rounded-lg w-52"placeholder="Incoming/Outgoing">
                        <option value="" disabled selected>Existing Category</option>
                        <option value="option1">-</option>
                        <option value="option2">-</option>
                    </select>
                </div>
            </div>

            <div class = border-t-2> 
        
            </div>
            <div class = "mt-9 text-center ">
                <span class = "text-4xl font-bold">INCOMING</span>
            </div>

            <div class = " grid grid-cols-4 gap-4 place-content-center bg-ykgray rounded-md ml-16 mb-10">
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp">| edit PH</ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
                <div class= "rounded-lg bg-yklightpurple text-center mt-10 box-content h-16 w-64">  
                    <button class ="text-ykwhite p-2 mt-2 text-2xl font-bold"> CATEGORY </button>
                    <ion-icon name="pencil-sharp"></ion-icon>
                </div>
            </div>
        </div>
    </div>
    <!--END OF MAIN CONTENT-->
</div>
