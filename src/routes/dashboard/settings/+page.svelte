<script>
</script>
<!-- MAIN CONTENT -->
<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">CATEGORIES</span>
    <div class="h-4/5">
        <div class="flex-auto h-full p-5 bg-ykgray rounded-md">
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
                                <form action="/logout" method="POST">
                                    <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded" type="submit">Logout</button>
                                </form>                                
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