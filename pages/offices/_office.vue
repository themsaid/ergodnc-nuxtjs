<template>
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">Error! :(</p>
    <div v-else class="flex">
        <div class="w-1/2 h-80 relative overflow-hidden rounded-lg">
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
            <Button class="mt-7">Book</Button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        office: {}
    }),

    async fetch() {
        const response = await this.$axios.$get('/offices/' + this.$route.params.office)

        this.office = response.data;
    },

    head() {
        return {
            title: this.office.title + ' — ergodnc',
        }
    },
}
</script>
