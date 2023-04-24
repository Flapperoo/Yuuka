<script lang="ts">
    import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { reminders } from '$lib/stores/stores';
	import { fail } from '@sveltejs/kit';

    export let data: PageData;
    let reminderName: string;
    let dateDeadline: number;
    let editNameValue: string;
    let editDateValue: number;
    let editIdValue: number;

    async function deleteReminders(id: number) {
        const { error: err } = await data.supabase.from('reminders').delete().eq('id', id);

        if (err) {
            if (err.status === 400) {
              return fail(400, {
                error: 'Something went wrong.',
              });
            }
            return fail(500, {
              err: 'Server error. Try again later.',
            });
        };

        const { data: remindersData } = await data.supabase.from('reminders').select('*');
        reminders.set(remindersData);
    }

    async function toggleReminder(id: number, toggleState: boolean) {
        const { error: err } = await data.supabase.from('reminders').update({ to_remind: !toggleState }).eq('id', id);

        if (err) {
            if (err.status === 400) {
              return fail(400, {
                error: 'Something went wrong.',
              });
            }
            return fail(500, {
              err: 'Server error. Try again later.',
            });
        };

        const { data: remindersData } = await data.supabase.from('reminders').select('*');
        reminders.set(remindersData);
    }

    async function addReminder() {
        const { error: err } = await data.supabase.from('reminders').insert({ name: reminderName, remind_Day: dateDeadline, user_id: data.session?.user.id });
        if (err) {
            if (err.status === 400) {
              return fail(400, {
                error: 'Something went wrong.',
              });
            }
            return fail(500, {
              err: 'Server error. Try again later.',
            });
        };
        const { data: remindersData } = await data.supabase.from('reminders').select('*');
        reminders.set(remindersData);
    }

    async function updateReminder() {
        const { error: err } = await data.supabase.from('reminders').update({name: editNameValue, remind_Day: editDateValue}).eq('id', editIdValue);
        if (err) {
            if (err.status === 400) {
              return fail(400, {
                error: 'Something went wrong.',
              });
            }
            return fail(500, {
              err: 'Server error. Try again later.',
            });
        };
        const { data: remindersData } = await data.supabase.from('reminders').select('*');
        reminders.set(remindersData);
    }

    async function editModalHandler(name: string, day: number, id: number) {
        editNameValue = name;
        editDateValue = day;
        editIdValue = id;
    }

    async function testFunction() {
        
    }

</script>
<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">BILL TRACKER</span>
    <div class="flex flex-row grow bg-ykgray rounded-md p-2 gap-2 overflow-hidden">
        <div class="flex flex-col bg-ykwhite rounded-md gap-2 p-2 w-1/3 shadow-lg">
            <span class="text-3xl text-ykpurple font-bold">Reminders</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                {#each $reminders as item, i}
                    <div class="p-2 flex flex-row bg-ykpurple rounded-md items-center">
                        <span class="text-ykwhite w-3/5">{item.name}</span>
                        <div class="w-2/5 flex flex-row justify-end items-center gap-2">
                            <label for="editModal" class="btn bg-ykpurple" on:click={editModalHandler(item.name, item.remind_Day, item.id)}><Icon icon="ion:cog-outline" width="25" /></label>
                            <button on:click={deleteReminders(item.id)} class="btn bg-ykpurple"><Icon icon="ion:trash-outline" width="25" color="red" /></button>                        
                            <input type="checkbox" on:change={toggleReminder(item.id, item.to_remind)} checked='{item.to_remind}' class="toggle bg-ykgray" />
                        </div>                    
                    </div>
                {/each}
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
                        <input type="text" placeholder="Reminder Name" class="input input-bordered bg-ykpurple text-ykwhite" id="reminderName" bind:value={reminderName}/>
                    </div>
                    <div class="form-control">
                        <label for="dateDeadline" class="label">
                            <span class="label-text text-ykpurple">Remind me every</span>
                        </label>
                        <label for="dateDeadline" class="input-group">
                            <span class="bg-ykpurple text-ykwhite">Day</span>
                            <input type="text" class="input input-bordered bg-ykdarkgray text-ykwhite" id="dateDeadline" bind:value={dateDeadline}/>
                            <span class="bg-ykpurple text-ykwhite">of the month</span>
                        </label>
                    </div>
                    <button class="btn self-end bg-ykpurple text-ykwhite m-2" type="submit" on:click={addReminder}>Add Reminder</button>
                </form>
            </div>            
        </div>
    </div>
</div>
<input type="checkbox" id="editModal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box flex flex-col gap-2">
        <span class="text-ykwhite text-xl">Edit Reminder</span>
        <div class="form-control">
            <label for="editName" class="label-text text-ykwhite">Reminder Name</label>
            <input type="text" bind:value={editNameValue} class="input input-bordered bg-ykpurple text-ykwhite" id="editName" placeholder="{editNameValue}" />
        </div>    
        <div class="form-control">
            <label for="editDate" class="label">
                <span class="label-text text-ykwhite">Remind me every</span>
            </label>
            <label for="editDate" class="input-group">
                <span class="bg-ykpurple text-ykwhite">Day</span>
                <input type="text" bind:value={editDateValue} class="input input-bordered bg-ykdarkgray text-ykwhite" id="editDate" placeholder="{editDateValue}"/>
                <span class="bg-ykpurple text-ykwhite">of the month</span>
            </label>
        </div>                                
        <div class="modal-action">
            <label for="editModal" class="btn bg-ykred text-ykwhite">Cancel</label>
            <label for="editModal" class="btn bg-ykpurple" on:click={updateReminder}>Edit</label>
        </div>
    </div>
</div>