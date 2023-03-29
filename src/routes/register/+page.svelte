<script>
</script>

<div class="flex flex-row h-screen items-center justify-center subpixel-antialiased">
    <div class="bg-ykpurple flex flex-row rounded-xl">
        <div class="flex flex-col p-10 mx-4">
            <span class="font-bold mb-5 text-4xl text-white -ml-4">REGISTER</span>
            <form>
                <div class="gap-3 grid grid-cols-2">
                    <div class="form-control">
                        <label class="label" for="firstname">
                            <span class="label-text text-lg text-white">First Name</span>
                        </label>
                        <input type="text" name="firstname" placeholder="First Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label" for="lastname">
                            <span class="label-text text-lg text-white">Last Name</span>
                        </label>
                        <input type="text" name="lastname" placeholder="Last Name" class="input input-bordered" />
                    </div>
                    <div class="form-control col-span-2">
                        <label class="label" for="email">
                            <span class="label-text text-lg text-white">E-mail Address</span>
                        </label>
                        <input type="email" name="email" placeholder="E-mail Address" class="input input-bordered" />
                    </div>
                    <div class="form-control col-span-2">
                        <label class="label" for="password">
                            <span class="label-text text-lg text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" class="input input-bordered" />
                    </div>
                    <button class="btn col-start-2 ml-auto mt-3 bg-yklightpurple text-white" type="submit">Submit</button>
                </div>
            </form>
            <div class="divider"></div>
            <div class="flex justify-center">
                <span>Already have an account? <a href="placeholder" class="link text-yklightblue font-bold">SIGN IN</a></span>
            </div>            
        </div>
        <div class="bg-cover bg-center flex flex-col gap-2 justify-center rounded-r-lg p-5 text-ykpurple" style="background-image: url('rg-modified.png')">
            <span class="font-bold text-4xl">YUUKA</span>
            <span class="font-semibold text-xl">Your Personal Financial Assistant</span>
        </div>
    </div>
</div>