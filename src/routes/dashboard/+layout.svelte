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
    <slot />
</div>