<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data: () => ({
        offices: [
            {
                "images": [
                    {
                        "path": "https://via.placeholder.com/400x400.png?text=PLACEHOLDER",
                    }
                ],
                "id": 1,
                "title": "Office One",
                "description": "Architecto assumenda cum eum. Voluptas qui dignissimos qui voluptate. Mollitia necessitatibus ut sit. Et saepe ea quo nulla.",
                "price_per_day": 1000,
            },
            {
                "images": [
                    {
                        "path": "https://via.placeholder.com/400x400.png?text=PLACEHOLDER",
                    }
                ],
                "id": 2,
                "title": "Dickenston",
                "description": "Sit nesciunt sit a perspiciatis quas eligendi. Maxime ipsum aut nihil. Totam omnis et laudantium ut dolorum soluta.",
                "price_per_day": 1300,
            },
            {
                "images": [
                    {
                        "path": "https://via.placeholder.com/400x400.png?text=PLACEHOLDER",
                    }
                ],
                "id": 3,
                "title": "East Katlynnton",
                "description": "Quia voluptatem amet quo minus. Repudiandae sed beatae veritatis. Error quos quia qui pariatur perferendis beatae occaecati.",
                "price_per_day": 2100,
            }
        ]
    }),
}
</script>
