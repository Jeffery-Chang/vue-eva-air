module.exports = {
    dev: (process.env.NODE_ENV !== 'production'),
    head: {
        title: 'eva-air',
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': 'Content-Type',
                content: 'text/html; charset=utf-8'
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge,chrome=1'
            },
            /*{
                'property': 'og:type',
                content: 'website'
            },
            {
                'property': 'og:title',
                content: '長榮航空｜那些年，我們一起搭的747-400'
            },
            {
                'property': 'og:url',
                content: ''
            },
            {
                'property': 'og:description',
                content: '也許你曾在 747-400 上，看著窗外的異國風景，或是曾抬頭仰望，意外發現她的蹤跡，因為你的參與，才能讓 747-400 創造出這麼多美好回憶。'
            },
            {
                'property': 'og:image',
                content: './600x315.png'
            },
            {
                'property': 'fb:app_id',
                content: '355985614832912'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }*/
        ],
        /*link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: './favicon.ico'
            }
        ],*/
        // script: []
    },
    loading: {
        color: '#3B8070'
    },
    build: {
        vendor: ['vue-i18n', 'gsap', 'wow.js', 'slick-carousel', 'vue-scrollto', 'vue-parallax-js', 'v-show-slide'],
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            // generate靜態檔的路徑設置
            if (!isDev) {
                // relative links, please.
                // config.output.publicPath = './_nuxt/'
            }
            return config;
        }
    },
    css: [
        {
            src: '@/assets/css/style.css',
            lang: 'css'
        },
        {
            src: '@/assets/css/self.css',
            lang: 'css'
        }
    ],
    router: {
        // 如果要用process.env.NODE_ENV, 要先[npm install cross-env --s-d]安裝
        // 然後到package.json加上[NODE_ENV=字串],mac不用寫cross-env
        base: (process.env.NODE_ENV !== 'P') ? '/' : '/technic/Jeffery/vue/eva/',
        middleware: 'i18n'
    },
    plugins: ['~/plugins/i18n.js', {
        src: '~/plugins/vue-parallax.js',
        ssr: false
    }, {
        src: '~/plugins/vue-scrollto.js',
        ssr: false
    }, {
        src: '~/plugins/vue-show-slide.js',
        ssr: false
    }],
    generate: {
        routes: ['/', '/zh', '/en', '/jp']
    }
}
