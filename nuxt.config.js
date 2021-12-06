export default {
    head: {
        title: 'ergodnc',
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'bg-gray-100'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap'
            }
        ]
    },

    css: [],

    plugins: [],

    components: true,

    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss'
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    auth: {
        strategies: {
            cookie: {
                endpoints: {
                    csrf: {
                        url: '/sanctum/csrf-cookie'
                    },
                    login: {
                        url: '/login'
                    },
                    logout: {
                        url: '/logout'
                    },
                    user: {
                        url: '/user'
                    }
                },
                user: {
                    property: 'data'
                },
            }
        },

        redirect: {
            login: '/login',
            logout: '/login',
            home: '/'
        },

        plugins: ['~/plugins/axios'],
    },

    axios: {
        baseURL: 'http://api.ergodnc.test',
        credentials: true,
    },

    build: {},
}
