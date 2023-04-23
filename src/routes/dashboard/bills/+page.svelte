<script lang="ts">
    import Icon from '@iconify/svelte';
</script>
<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">BILL TRACKER</span>
    <div class="flex flex-row grow bg-ykgray rounded-md p-2 gap-2 overflow-hidden">
        <div class="flex flex-col bg-ykwhite rounded-md gap-2 p-2 w-1/3 shadow-lg">
            <span class="text-3xl text-ykpurple font-bold">Reminders</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                <div class="p-2 flex flex-row bg-ykpurple rounded-md">
                    <span class="text-ykwhite w-3/5">Meralco Bill</span>
                    <div class="w-2/5 flex flex-row justify-end items-center gap-2">
                        <button><Icon icon="ion:trash-outline" width="25" color="red" /></button>                        
                        <input type="checkbox" class="toggle bg-ykgray" />
                    </div>                    
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 w-2/3 h-fit">
            <div class="h-1/2 bg-ykwhite rounded-md shadow-lg p-2">
                <span class="text-3xl text-ykpurple font-bold">Add a Bill Reminder</span>
                <form class="flex flex-col gap-2">
                    <div class="form-control w-1/2">
                        <label for="reminderName" class="label">
                            <span class="label-text text-ykpurple">Reminder Name</span>
                        </label>
                        <input type="text" placeholder="Reminder Name" class="input input-bordered bg-ykpurple text-ykwhite" id="reminderName"/>
                    </div>
                    <div class="form-control">
                        <label for="dateDeadline" class="label">
                            <span class="label-text text-ykpurple">Remind me every</span>
                        </label>
                        <label for="dateDeadline" class="input-group">
                            <span class="bg-ykpurple text-ykwhite">Day</span>
                            <input type="text" class="input input-bordered bg-ykdarkgray text-ykwhite" id="dateDeadline"/>
                            <span class="bg-ykpurple text-ykwhite">of the month</span>
                        </label>
                    </div>
                    <button class="btn self-end bg-ykpurple text-ykwhite m-2" type="submit">Add Reminder</button>
                </form>
            </div>
            <div class="h-1/2 bg-ykwhite rounded-md shadow-lg p-2">
                <span class="text-3xl text-ykpurple font-bold">Edit Bill Reminder</span>
                <form class="flex flex-col gap-2">
                    <div class="form-control w-1/2">
                        <label for="reminderName" class="label">
                            <span class="label-text text-ykpurple">Reminder Name</span>
                        </label>
                        <input type="text" placeholder="Reminder Name" class="input input-bordered bg-ykpurple text-ykwhite" id="reminderName"/>
                    </div>
                    <div class="form-control">
                        <label for="dateDeadline" class="label">
                            <span class="label-text text-ykpurple">Remind me every</span>
                        </label>
                        <label for="dateDeadline" class="input-group">
                            <span class="bg-ykpurple text-ykwhite">Day</span>
                            <input type="text" class="input input-bordered bg-ykdarkgray text-ykwhite" id="dateDeadline"/>
                            <span class="bg-ykpurple text-ykwhite">of the month</span>
                        </label>
                    </div>
                    <button class="btn self-end bg-ykpurple text-ykwhite m-2" type="submit">Edit Reminder</button>
                </form>
            </div>            
        </div>
    </div>
</div>