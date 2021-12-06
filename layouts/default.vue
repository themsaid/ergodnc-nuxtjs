<template>
    <div>
        <div class="bg-white">
            <main class="shadow">
                <div class="max-w-screen-lg mx-auto flex flex-row justify-between items-center p-4 sm:p-7 relative z-10 space-x-2 sm:space-x-3">
                    <NuxtLink to="/" class="block">
                        <h1 class="text-2xl font-black"><span class="text-purple-700">ergo</span>dnc
                        </h1>
                    </NuxtLink>

                    <div class="flex items-center text-sm font-semibold">
                        <template v-if="$auth.user">
                            <a href="" class="text-gray-700 hover:text-purple-700" @click.prevent="logout">
                                Log Out
                            </a>
                            <NuxtLink to="/profile" class="text-gray-700 ml-7 border border-gray-300 hover:border-purple-400 hover:text-purple-700 rounded px-4 py-2">
                                Profile
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <NuxtLink to="/login" class="text-gray-700 hover:text-purple-700">
                                Sign In
                            </NuxtLink>
                            <NuxtLink to="/register" class="text-gray-700 ml-7 border border-gray-300 hover:border-purple-400 hover:text-purple-700 rounded px-4 py-2">
                                Create Account
                            </NuxtLink>
                        </template>
                    </div>
                </div>
            </main>
        </div>

        <div class="max-w-screen-lg mx-auto p-4 sm:p-7 mt-10">
            <Nuxt/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout();
        }
    }
}
</script>
