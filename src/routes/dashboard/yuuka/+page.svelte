<script>
    import yklogo from '$lib/static/Yuuka_Logo.png';
    import userPic from '$lib/static/avatar.jpeg';
</script>
<div class="flex flex-col w-screen gap-5">
    <div class="ml-10 mt-5">
        <span class="font-bold text-4xl text-ykwhite">YUUKA HELPER</span>    
    </div>
    <div class="bg-ykwhite flex flex-col mx-10 mb-10 p-4 grow overflow-hidden">
        <div class="bg-ykgray p-3 grow overflow-auto rounded-t-md">
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <div class="w-10">
                        <img src="{yklogo}" alt="yklogo">
                    </div>
                </div>
                <div class="chat-bubble bg-yklightpurple">Yuuka's message goes here</div>
            </div>
            <div class="chat chat-end">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-3xl">
                        <img src="{userPic}" alt="yklogo">
                    </div>
                </div>
                <div class="chat-bubble bg-ykpurple"> Your message goes here</div>
            </div>
        </div>
        <div class="bg-ykgray">
            <form method="POST" class="flex flex-row gap-2 p-2 rounded-b-md items-center justify-center">
                <input type="text" placeholder="Type here" class="bg-ykwhite input input-bordered w-5/6" />
                <button type="submit" class="btn bg-ykpurple w-1/6"> Send </button>
            </form>
        </div>
    </div>
</div>