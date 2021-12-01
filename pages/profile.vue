<template>
    <div>
        <h1 class="text-3xl font-black mb-10">
            Hello {{ user.name }}!
        </h1>

        <div class="mb-10">
            <span>Here is a list of your previous reservations!</span>
        </div>

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
    </div>
</template>

<script>
export default {
    data: () => ({
        user: {
            name: 'User Name'
        },
        reservations: [
            {
                "office": {
                    "featured_image": {
                        "path": "https://via.placeholder.com/400x400.png?text=PLACEHOLDER",
                    },
                    "id": 1,
                    "title": "Office One",
                    "description": "Architecto assumenda cum eum. Voluptas qui dignissimos qui voluptate. Mollitia necessitatibus ut sit. Et saepe ea quo nulla.",
                },
                "start_date": "2021-10-23T17:03:41",
                "end_date": "2021-11-12T17:03:41",
                "price": 12000,
            },
            {
                "office": {
                    "featured_image": {
                        "path": "https://via.placeholder.com/400x400.png?text=PLACEHOLDER",
                    },
                    "id": 2,
                    "title": "Office Two",
                    "description": "Quia voluptatem amet quo minus. Repudiandae sed beatae veritatis. Error quos quia qui pariatur perferendis beatae occaecati.",
                },
                "start_date": "2021-08-23T17:03:41",
                "end_date": "2021-09-30T17:03:41",
                "price": 19000,
            }
        ]
    }),

    head() {
        return {
            title: 'Profile — ergodnc',
        }
    },
}
</script>
