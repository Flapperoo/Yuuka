<!--MAIN DASHBOARD-->
<div class="flex-1 flex-wrap h-full">
    <div class="px-6 py-5">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-ykwhite">YUUKA DASHBOARD</h1>
    </div>
    <!--CONTENT-->
    <div class="flex mx-6 gap-6">
        <!-- First Column -->
        <div class="flex flex-col w-1/2 bg-ykgray rounded-lg">
            <div class="px-5 pt-4 sm:text-right md:text-left">
                <p class="text-2xl font-bold text-yklightpurple">Budgeting</p>
            </div>
            <div class="h-full bg-gradient-to-b from-ykpurple to-ykwhite rounded-md m-5 p-5 flex items-center justify-center">
                <div class="text-center">
                  <span class="font-bold text-xl">Your Available Balance is:</span><br>
                  <span class="font-bold text-ykdarkgray text-2xl">PHP 130,000.00</span>
                </div>
            </div>
            <div class="py-2 p-6 sm:text-right md:text-left">
                <p class="text-end text-xl font-bold text-yklightpurple"><a href="#"> Go to Budgeting </a></p>
            </div>
        </div>
        <!-- Second Column -->
        <div class="flex flex-col w-3/5 bg-ykgray rounded-lg">
            <div class="px-5 pt-4 sm:text-right md:text-left">
                <p class="text-2xl font-bold text-yklightpurple">Funding Goals</p>
            </div>
            <div class="h-full bg-gradient-to-b from-ykpurple to-ykwhite rounded-md m-5 p-5 flex items-center justify-center">
                <div class="text-center">
                  <span class="font-bold text-xl">Funding Goal Name 1:</span><br>
                  <span class="font-bold text-ykdarkgray text-2xl">Php 15,000.00 out of Php80k</span>
                </div>
            </div>
            <div class="h-full bg-gradient-to-b from-ykpurple to-ykwhite rounded-md m-5 p-5 flex items-center justify-center">
                <div class="text-center">
                  <span class="font-bold text-xl">Funding Goal Name 2:</span><br>
                  <span class="font-bold text-ykdarkgray text-2xl">Php 8,000.00 out of Php100k</span>
                </div>
            </div>
        </div>
        <!--Third Column-->
        <div class="flex flex-col w-1/3 max-h-96 bg-ykgray rounded-lg overflow-y-auto">
            <div class="px-5 pt-4 sm:text-right md:text-left">
                <p class="text-2xl font-bold text-yklightpurple">Reminders</p>
            </div>
            <div class="px-5 sm:text-right md:text-left overflow-y-auto">
                <div class="grid grid-cols-1 gap-3 grid-flow-row text-yklightpurple px-2 pt-2 w-auto overflow-auto">
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #1</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #2</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #3</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #4</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #5</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #1</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr class="content-center"> 
                                <td class="px-3 py-2 w-1/2"><span class="text-lg">Bill Sample #1</span></td>
                                <td class="pl-7 pr-12 w-1/2"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="py-2 pr-6 float-right">
                <p class="text-end text-xl font-bold text-yklightpurple"><a href="#"> Go to Bill Tracking </a></p>
            </div>
        </div>
    </div> <!--END OF 1st row -->
    <!--Fourth Column-->
    <div class="flex flex-col w-auto mx-6 mt-6 gap-6 h-96 bg-ykgray rounded-lg">
        <p class="text-2xl mx-6 mt-6 font-bold text-yklightpurple">Your Recent Transactions</p>
        <div class="px-5 sm:text-right md:text-left overflow-y-auto">
            <div class="grid grid-cols-1 gap-3 grid-flow-row text-yklightpurple px-5 pt-2 w-auto overflow-auto">
                <table class="bg-ykwhite rounded-xl">
                        <tbody>
                            <tr class="content-center"> 
                                <td class="w-1/4 p-3">Up-icon</td>
                                <td class="w-1/4">Bill Name1</td>
                                <td class="w-1/4">Amount1</td>
                                <td class="w-1/4">Date1</td>
                            </tr>
                        </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">Down-icon</td>
                            <td class="w-1/4">Bill Name2</td>
                            <td class="w-1/4">Amount2</td>
                            <td class="w-1/4">Date2</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">Up-icon</td>
                            <td class="w-1/4">Bill Name3</td>
                            <td class="w-1/4">Amount3</td>
                            <td class="w-1/4">Date3</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">Down-icon</td>
                            <td class="w-1/4">Bill Name4</td>
                            <td class="w-1/4">Amount4</td>
                            <td class="w-1/4">Date4</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">up-icon</td>
                            <td class="w-1/4">Bill Name5</td>
                            <td class="w-1/4">Amount5</td>
                            <td class="w-1/4">Date5</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">up-icon</td>
                            <td class="w-1/4">Bill Name6</td>
                            <td class="w-1/4">Amount6</td>
                            <td class="w-1/4">Date6</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bg-ykwhite rounded-xl">
                    <tbody>
                        <tr class="content-center"> 
                            <td class="w-1/4 p-3">up-icon</td>
                            <td class="w-1/4">Bill Name6</td>
                            <td class="w-1/4">Amount6</td>
                            <td class="w-1/4">Date6</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
        <p class="text-end text-xl  mx-6 mb-6  font-bold text-yklightpurple py-2"><a href="#"> Go to Transactions </a></p>
    </div>
    <!--END OF 4th Column-->
    
    <!--END OF CONTENT-->
    <p class="text-end p-4 text-yklightgray">Copyright of Group Project Yuuka - 2023</p>
</div>
<!--END OF MAIN DASHBOARD-->