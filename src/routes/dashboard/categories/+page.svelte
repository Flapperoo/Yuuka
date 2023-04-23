<script lang="ts">
    import Icon from '@iconify/svelte';
</script>
<div class="flex flex-col gap-5 w-screen m-6">
    <span class="text-3xl font-bold text-ykwhite">CATEGORIES</span>
    <div class="flex flex-row gap-2 grow overflow-hidden bg-ykgray p-2 rounded-md">        
        <div class="flex flex-col w-1/3 bg-ykwhite p-2 rounded-md gap-2 shadow-lg">
            <span class="text-ykpurple font-bold text-3xl">Incoming</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                <div class="card card-compact bg-ykpurple">
                    <div class="card-body">
                        <span class="text-ykgray text-2xl font-bold text-ykwhite">Income</span>
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-outline">
                                <Icon icon="ion:trash-outline" width="20" color="red" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-1/3 bg-ykwhite p-2 rounded-md gap-2 shadow-lg">
            <span class="text-ykpurple font-bold text-3xl">Outgoing</span>
            <div class="flex flex-col gap-2 overflow-y-auto">
                <div class="card card-compact bg-ykpurple">
                    <div class="card-body">
                        <span class="text-ykgray text-2xl font-bold text-ykwhite">Grocery</span>
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-outline">
                                <Icon icon="ion:trash-outline" width="20" color="red" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-1/3 h-fit bg-ykwhite p-2 rounded-md gap-2 justify-center shadow-lg">
            <span class="text-ykpurple font-bold text-3xl">Add Category</span>
            <form class="bg-ykgray flex flex-col rounded-md p-2">
                <div class="form-control">
                    <label class="label" for="selectCategory">
                        <span class="label-text text-ykpurple">Which category?</span>
                    </label>
                    <select class="select select-bordered bg-ykpurple text-ykwhite" id="selectCategory">
                        <option disabled selected>Choose Category</option>
                        <option>Incoming</option>
                        <option>Outgoing</option>
                    </select>
                </div>
                <div class="form-control">
                    <label class="label" for="textCategory">
                        <span class="label-text text-ykpurple">Category Name</span>
                    </label>
                    <input type="text" placeholder="Category Name" class="input input-bordered bg-ykpurple text-ykwhite" id="textCategory" />
                </div>
                <button class="btn mt-2 w-1/4 self-end text-ykwhite bg-ykpurple">Add</button>
            </form>
        </div>
    </div>
</div>
