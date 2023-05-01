<script lang="ts">
    import yklogo from '$lib/static/Yuuka_Logo.png';
    import userPic from '$lib/static/avatar.jpeg';
    import { Configuration, OpenAIApi } from 'openai';
    import { PUBLIC_OPENAI_API_KEY } from '$env/static/public'
    
    let userMsg: String;
    const configuration = new Configuration({
        apiKey: PUBLIC_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    let conversation = [{
        'role': 'system',
        'content': 'You are Yuuka, their personal budgeting assistant. You are to only provide budgeting and financial advice. Do not go beyond these topics. Stay in character always.'
    }];

    async function messageYuuka() {
        if (!userMsg) return;
        conversation = [...conversation, { 'role': 'user', 'content' : `${userMsg}` }];
        userMsg = '';
        const result = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: conversation,
        });
        conversation = [...conversation, { 'role': 'assistant', 'content' : `${result.data.choices[0].message?.content}` }];
    }

    const scrollToBottom = node => {
		const scroll = () => node.scroll({
			top: node.scrollHeight,
			behavior: 'smooth',
		});
		scroll();

		return { update: scroll }
	};
</script>
<div class="flex flex-col m-6 w-screen gap-5">
    <span class="font-bold text-3xl text-ykwhite">YUUKA HELPER</span>    
    <div class="bg-ykwhite flex flex-col p-4 grow overflow-hidden rounded-md">
        <div class="bg-ykgray p-3 grow overflow-auto rounded-t-md" use:scrollToBottom={conversation}>
            {#each conversation as item}
                {#if item.role === 'user'}
                    <div class="chat chat-end">
                        <div class="chat-image avatar">
                            <div class="w-10 rounded-3xl">
                                <img src="{userPic}" alt="yklogo">
                            </div>
                        </div>
                        <div class="chat-bubble bg-ykpurple text-ykwhite">{item.content}</div>
                    </div>
                {:else if item.role === 'assistant'}
                    <div class="chat chat-start">
                        <div class="chat-image avatar">
                            <div class="w-10">
                                <img src="{yklogo}" alt="yklogo">
                            </div>
                        </div>
                        <div class="chat-bubble bg-yklightpurple text-ykwhite">{item.content}</div>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="bg-ykgray">
            <form class="flex flex-row gap-2 p-2 rounded-b-md items-center justify-center">
                <input type="text" placeholder="Type here" bind:value={userMsg} class="bg-ykwhite input input-bordered w-5/6 text-ykpurple" />
                <button type="submit" class="btn bg-ykpurple w-1/6" on:click={messageYuuka}> Send </button>
            </form>
        </div>
    </div>
</div>