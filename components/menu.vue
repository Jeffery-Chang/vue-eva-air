<template>
    <div class="vue_menu">
        <!-- header -->
        <header :class="{ 'mobile' : isOpen, 'scrolled' : (isScrolled && !isOpen) }"><a class="logo" href="#" v-scroll-to="{ el: 'body', onDone: onDone }"><img :src="logo_src" alt="logo"></a>
            <!-- bur -->
            <div class="burBox" id="toggle" @click="isOpen = !isOpen">
                <div class="burger" :class="{ 'cross' : isOpen == true }" ><span></span></div>
            </div>
            <!-- PC menu -->
            <nav class="menu">
                <ul>
                    <span class="left">
                        <li><a class="line" href="#" v-scroll-to="{ el: '.album', offset: 40, onDone: onDone }">{{ $t('menu_01') }}</a></li>
                        <li><a class="line" href="#" v-scroll-to="{ el: '.history', offset: -80, onDone: onDone }">{{ $t('menu_02') }}</a></li>
                        <li><a class="line" href="#" v-scroll-to="{ el: '.story', offset: 80, onDone: onDone }">{{ $t('menu_03') }}</a></li>
                        <li><a class="line" href="#" v-scroll-to="{ el: '.QA', offset: 0, onDone: onDone }">{{ $t('menu_04') }}</a></li>
                        <li><a class="line" href="#" v-scroll-to="{ el: '.fbBox', offset: 0, onDone: onDone }">{{ $t('menu_05') }}</a></li>
                        <li><a class="fb" href="#" @click.prevent><span class="icon-fb"></span></a></li>
                    </span>
                    <li class="lang">
                        <ul>
                            <li><nuxt-link :to="{ params: { lang: 'zh' }}" active-class="active" exact>繁中</nuxt-link></li>
                            <li>/</li>
                            <li><nuxt-link :to="{ params: { lang: 'en' }}" active-class="active" exact>English</nuxt-link></li>
                            <li>/</li>
                            <li><nuxt-link :to="{ params: { lang: 'jp' }}" active-class="active" exact>日本語</nuxt-link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- M Menu -->
        <div class="menubox overlay" id="overlay" :class="{ 'open' : isOpen == true }">
            <nav class="overlay-menu">
                <ul>
                    <li><a class="line" href="#" v-scroll-to="{ el: '.album', offset: -40, onStart: onStart, onDone: onDone }">{{ $t('menu_01') }}</a></li>
                    <li><a class="line" href="#" v-scroll-to="{ el: '.history', offset: -80, onStart: onStart, onDone: onDone }">{{ $t('menu_02') }}</a></li>
                    <li><a class="line" href="#" v-scroll-to="{ el: '.story', offset: 40, onStart: onStart, onDone: onDone }">{{ $t('menu_03') }}</a></li>
                    <li><a class="line" href="#" v-scroll-to="{ el: '.QA', offset: -40, onStart: onStart, onDone: onDone }">{{ $t('menu_04') }}</a></li>
                    <li><a class="line" href="#" v-scroll-to="{ el: '.fbBox', offset: -40, onStart: onStart, onDone: onDone }">{{ $t('menu_05') }}</a></li>
                    <li class="lang">
                        <ul>
                            <li class="lang"><nuxt-link :to="{ params: { lang: 'zh' }}" active-class="active" exact>繁中</nuxt-link></li>
                            <li class="lang">/</li>
                            <li class="lang"><nuxt-link :to="{ params: { lang: 'en' }}" active-class="active" exact>English</nuxt-link></li>
                            <li class="lang">/</li>
                            <li class="lang"><nuxt-link :to="{ params: { lang: 'jp' }}" active-class="active" exact>日本語</nuxt-link></li>
                        </ul>
                    </li>
                    <li><a class="fb_pos" href="#" @click.prevent><span class="icon-fb"></span></a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.$t('title'),
                meta: [
                    { hid: 'description', name: 'description', content: this.$t('des') },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
                    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
                    { 'property': 'og:type', content: 'website' },
                    { 'property': 'og:title', content: this.$t('title') },
                    { 'property': 'og:url', content: '' },
                    { 'property': 'og:description', content: this.$t('des') },
                    { 'property': 'og:image', content: require('@/assets/img/600x315.png') },
                    { 'property': 'fb:app_id', content: '355985614832912' },
                ],
                link:[
                    { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
                ]
            }
        },
        data() {
            return {
                isWindow: process.browser,
                isOpen: false,
                isScrolled: false,
            }
        },
        computed: {
            logo_src() {
                return (this.isScrolled && !this.isOpen) ? require('@/assets/svg/logo_g.svg') : require('@/assets/svg/logo_w.svg');
            }
        },
        created() {
            if (this.isWindow) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        mounted() {
            if (this.isWindow) {
                this.handleScroll();
            }
        },
        methods: {
            handleScroll() {
                var scrollY = window.scrollY || document.documentElement.scrollTop;
                var base = document.querySelector('header').offsetHeight / 2;

                this.isScrolled = (scrollY > base) ? true : false;
            },
            onStart() {
                this.isOpen = false;
            },
            onDone(evt) {
                // 拿來送GA
            }
        },
        destroyed() {
            if (this.isWindow) {
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    }

</script>

<style>


</style>
