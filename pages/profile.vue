<template>
    <div>
        <h1 class="text-3xl font-black mb-10">
            Hello {{ $auth.user.name }}!
        </h1>

        <div class="mb-10">
            <span>Here is a list of your previous reservations!</span>
        </div>

        <p v-if="$fetchState.pending">Loading...</p>
        <p v-else-if="$fetchState.error">Error! :(</p>
        <template v-else>
            <template v-if="reservations.length">
                <div v-for="(reservation, index) in reservations"
                     :key="reservation.office.id"
                     :class="`flex ${index + 1 == reservations.length ? '' : 'pb-10 mb-10 border-b'}`">
                    <div class="w-1/3 h-56 relative overflow-hidden rounded-lg">
                        <img :src="reservation.office.featured_image.path" class="object-cover w-full h-full"></img>
                    </div>


                    <div class="w-full pl-14">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold">{{ reservation.office.title }}</h1>
                            <span class="block font-semibold">Total ${{ reservation.price / 100 }}</span>
                        </div>
                        <p class="mb-5">
            <span class="text-gray-600 text-sm uppercase">
                From <strong>{{ reservation.start_date.split('T')[0] }}</strong> To <strong>{{ reservation.end_date.split('T')[0] }}</strong>
            </span>
                        </p>
                        <p class="leading-loose mb-5">
                            {{ reservation.office.description }}
                        </p>
                        <NuxtLink to="'/offices/' + reservation.office.id"
                                  class="text-purple-600 font-bold">
                            More details...
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data: () => ({
        reservations: []
    }),

    async fetch() {
        const response = await this.$axios.$get('/reservations')

        this.reservations = response.data;
    },

    head() {
        return {
            title: 'Profile — ergodnc',
        }
    },
}
</script>
