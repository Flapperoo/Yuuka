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
                <span class="text-[20px] ml-4 text-yklightblue"><a class="active-link" href="">Settings</a></span>
            </div>
  </div>
  <!--END OF SIDEBAR-->

    <!-- MAIN CONTENT -->
    <div class="flex-auto max-h-full">
        <div class="pl-6 py-6"> <!--WEBPAGE TITLE-->
            <h1 class="text-3xl font-bold">Settings</h1>
        </div>
        <div class="px-6"> <!--TAB TITLE-->
            <div class="flex-1 w-1/5 p-2 bg-yklightpurple flex items-center rounded-t-lg">
                <img src="account-icon.png" alt="account-icon" class="pl-2 mr-2">
                <h1 class="text-3xl font-medium text-ykwhite justify-center items-center flex">Account Settings</h1>
            </div>
        </div>
        <!--SETTINGS CONTENT-->
        <div class="px-6 h-4/5">
            <div class="flex-auto h-full p-5 bg-ykgray rounded-r-md rounded-b-md">
                <div class="flex">
                    <div class="flex-1 pt-10">
                        <div class="grid grid-cols-1 pl-10 py-5 mr-10">
                            <label for="FirstName" class="text-xl font-medium text-ykpurple">First Name:</label>
                            <input type="text" id="FirstName" class="border border-ykpurple p-2 rounded-lg">
                            <p class="text-end text-yklightpurple italic underline"><a href="#">Change Name</a></p>
                        </div>
                        <div class="grid grid-cols-1 pl-10 py-5 mr-10">
                            <label for="LastName" class="text-xl font-medium text-ykpurple">Last Name:</label>
                            <input type="text" id="LastName" class="border border-ykpurple p-2 rounded-lg">
                            <p class="text-end text-yklightpurple italic underline"><a href="#">Change Last Name</a></p>
                        </div>
                        <div class="grid grid-cols-1 pl-10 py-5 mr-10">
                            <label for="EmailAdd" class="text-xl font-medium text-ykpurple">Email Address:</label>
                            <input type="email" id="EmailAdd" class="border border-ykpurple p-2 rounded-lg">
                            <p class="text-end text-yklightpurple italic underline"><a href="#">Change Email Address</a></p>
                        </div>
                        <div class="grid grid-cols-1 pl-10 py-5 mr-10">
                            <label for="Password" class="text-xl font-medium text-ykpurple">Password:</label>
                            <input type="password" id="Password" class="border border-ykpurple p-2 rounded-lg">
                            <p class="text-end text-yklightpurple italic underline"><a href="#">Forgot Password</a></p>
                        </div>
                    </div>
                    
                    <div class="flex-1 pt-10">
                        <div class="h-full m-5 p-5 flex items-center justify-center">
                            <div class="grid grid-cols-1">
                                <label for="Username" class="text-xl font-medium text-ykpurple">Username:</label>
                                <input type="text" id="Username" class="border border-ykpurple p-2 rounded-lg">
                                <p class="text-end text-yklightpurple italic underline"><a href="#">Change Username</a></p>
                                <div class="flex justify-end pt-10">
                                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Save</button>
                                    <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">Delete</button>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="grid grid-cols-1 pl-10 py-5 mx-12">
                            <label for="Username" class="text-xl font-medium text-ykpurple">Username:</label>
                            <input type="text" id="Username" class="border border-ykpurple p-2 rounded-lg">
                            <p class="text-end text-yklightpurple italic underline"><a href="#">Change Username</a></p>
                            <div class="flex justify-end pt-10">
                                <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Save</button>
                                <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">Delete</button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!--END OF SETTINGS CONTENT-->
    </div>
    <!--END OF MAIN CONTENT-->
</div>