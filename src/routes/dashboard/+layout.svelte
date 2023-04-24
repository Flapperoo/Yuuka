<script>
    import logo from '$lib/static/Yuuka_Logo.png';
</script>
<div class="flex h-screen bg-ykdarkgray">
    <!-- SIDE NAV-BAR -->
    <div class="w-64 min-w-[16rem] p-6 bg-ykpurple">
        <img src="{logo}" alt="yuuka logo" class="bg-cover bg-center justify-center drop-shadow-lg p-5 w-230 h-230 object-cover object-center">
        <h1 class="font-bold text-center text-2xl">Welcome Back!</h1><br>
        <hr class="my-2">
        <!--NAV LIST-->
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue "><a href="/dashboard">Dashboard</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/yuuka">Yuuka Helper</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/budgeting">Budgeting</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/bills">Bill Tracker</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/categories">Categories</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/transactions">Transactions</a></span>
        </div>
        <div class="p-1.5 mt-3 flex items-center rounded-md px-4 hover:bg-yklightpurple">
            <span class="text-[20px] ml-4 text-yklightblue"><a href="/dashboard/settings">Settings</a></span>
        </div>
    </div>
    <slot />
</div>