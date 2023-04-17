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
    
    <!--MAIN CONTENT-->
    <div class="flex-1">
        <div class="px-6 py-5">
            <h1 class="text-3xl font-bold text-ykwhite">BILL TRACKER</h1>
        </div>
      
        <div class="flex m-6 gap-6">
            <!--FIRST COLUMN-->
            <div class="flex-1 bg-ykgray p-6 rounded-md max-h-full">
                <h1 class="text-xl font-bold text-ykpurple pb-3">CREATE NEW BILL</h1>
                <!--FIRST INNER COLUMN-->
                <div class="grid grid-cols-1 p-2">
                    <label for="BillName" class="text-xl font-medium text-ykpurple">Bill Name:</label>
                    <input type="text" id="BillName" class="border border-ykpurple p-2 rounded-lg">
                </div>
                <div class="grid grid-cols-1 p-2">
                    <label for="Amount" class="text-xl font-medium text-ykpurple">Amount:</label>
                    <input type="text" id="Amount" class="border border-ykpurple p-2 rounded-lg">
                </div>
                <!--END OF FIRST INNER COLUMN-->
                <!--SECOND INNER COLUMN-->
                <div class="flex px-2 pt-6 gap-3">
                    <div class="flex-1 w-1/2">
                        <h1 class="text-xl font-medium text-ykpurple pb-3">Repeat Pattern:</h1>
                        <div class="grid grid-cols-1 gap-1">
                            <label for="Occurs" class="text-xl font-light text-ykpurple">Occurs:</label>
                            <select id="Occurs" class="border-ykpurple pb-2 rounded-lg">
                                <option value="" disabled selected>Choose a day:</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-1 gap-1 pt-10">
                            <label for="On" class="text-xl font-light text-ykpurple">On:</label>
                            <select id="On" class="border-ykpurple pb-2 rounded-lg">
                                <option value="" disabled selected>Choose a time:</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex-1 w-1/2">
                        <h1 class="text-xl font-medium text-ykpurple pb-3">Remind Me:</h1>
                        <div class="grid grid-cols-1 gap-1">
                            <label for="RemindMe" class="text-xl font-light text-ykpurple">Every:</label>
                            <select id="RemindMe" class="border-ykpurple p-2 rounded-lg">
                                <option value="" disabled selected>Choose a week of the month:</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-1 gap-1 pt-10">
                            <label for="RemindMe" class="text-xl font-light text-ykpurple">Before Due In:</label>
                            <select id="RemindMe" class="border-ykpurple p-2 rounded-lg">
                                <option value="" disabled selected>Choose a week of the month:</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!--END OF SECOND INNER COLUMN-->
                <div class="flex justify-end pt-10">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Save</button>
                    <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">Delete</button>
                </div>
            </div>
            <!--END OF FIRST COLUMN-->
            <!--SECOND COLUMN-->
            <div class="flex-1 bg-ykgray p-6 rounded-md overflow-y-auto">
                <h1 class="text-xl font-bold text-ykpurple pb-3">REMINDERS</h1>
                <div class="px-5 sm:text-right md:text-left overflow-y-auto">
                    <div class="grid grid-cols-1 gap-1 overflow-y-auto">
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #1</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #2</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #3</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #4</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #5</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #6</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #7</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #8</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody class="text-ykpurple">
                                <tr class="w-full">
                                    <td class="px-3 py-2"><span class="text-lg">Bill Sample #9</span></td>
                                    <td class="pl-7 pr-12"><input type="checkbox" id="billcheck1" class="checkbox-input ml-10"></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                
                <div class="relative flex justify-end pt-10">
                    <button class="bg-ykpurple text-ykwhite font-bold py-2 px-4 rounded mr-3">Save</button>
                    <button class="bg-ykred text-ykwhite font-bold py-2 px-4 rounded">Delete</button>
                </div>

            </div>
            <!--END OF SECOND COLUMN-->
        </div>
    </div>
    <!--END OF MAIN CONTENT-->

  </div>
  