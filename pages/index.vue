<template>
    <div>
        <p v-if="$fetchState.pending">Loading...</p>
        <p v-else-if="$fetchState.error">Error! :(</p>
        <template v-else>
            <div v-for="(office, index) in offices" :key="office.id"
                 :class="`flex ${index + 1 == offices.length ? '' : 'pb-10 mb-10 border-b'}`">
                <div class="w-1/3 h-56 relative overflow-hidden rounded-lg">
                    <img :src="office.images[0].path" class="object-cover w-full h-full"></img>
                </div>

                <div class="w-full pl-14">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold">{{ office.title }}</h1>
                        <span class="block font-semibold">${{ office.price_per_day / 100 }} per day</span>
                    </div>
                    <p class="leading-loose mb-5">
                        {{ office.description }}
                    </p>
                    <NuxtLink class="text-purple-600 font-bold" :to="'/offices/' + office.id">
                        More details...
                    </NuxtLink>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: () => ({
        offices: []
    }),

    async fetch() {
        const response = await this.$axios.$get('/offices')

        this.offices = response.data;
    },
}
</script>
