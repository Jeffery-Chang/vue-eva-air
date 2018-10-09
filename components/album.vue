<template>
    <div class="album">
        <div class="cloud"></div>
        <div class="content">
            <div class="subject">
                <div class="left">
                    <div class="line"></div>
                </div>
                <div class="right">
                    <h2>{{ $t('photo_H1') }}</h2>
                    <div class="sub">{{ $t('photo_H2') }}</div>
                    <div class="tab">
                        <ul>
                            <li :class="{ 'active' : albumFG == true }" @click.prevent="albumFG = true"><a :style="{ 'cursor': 'pointer'}"><span class="icon-camera"></span><span>{{ $t('photo') }}</span></a></li>
                            <li class="line"></li>
                            <li :class="{ 'active' : albumFG == false }" @click.prevent="albumFG = false"><a :style="{ 'cursor': 'pointer'}"><span class="icon-video"></span><span>{{ $t('video') }}</span></a></li>
                            <div class="bar" :class="{ 'move' : albumFG == false }"></div>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="albumbox" v-show="albumFG">
                    <ul>
                        <li v-for="(item, $index) in albumList" :key="$index">
                            <a href="#" @click.prevent="openBox($event, $index)">
                                <span v-html="item.word"></span>
                                <img :src="item.img" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="video" v-show="!albumFG">
                    <div style="position:relative;height:0;padding-bottom:56.25%">
                        <iframe v-if="!albumFG" src="https://www.youtube.com/embed/FTPIBtY4aSg?list=PL_PR6YoCajFla_d_xKvTHe_2KeOdBaTeF&rel=0&amp;controls=1&amp;showinfo=0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="c1"><img src="~assets/img/c1.png" alt=""></div>
    </div>
</template>

<script>
    if (process.browser) {
        var $ = require('jquery');
    }
    import TweenMax from 'gsap';
    export default {
        data() {
            return {
                store: this.$store.state,
                isWindow: process.browser,
                isAnimated: false,
                isScrolled: false,
                albumFG: true,
                albumList: [{
                        word: this.$t('photo_01'),
                        img: require('@/assets/img/album/01_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_02'),
                        img: require('@/assets/img/album/02_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_03'),
                        img: require('@/assets/img/album/03_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_04'),
                        img: require('@/assets/img/album/04_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_05'),
                        img: require('@/assets/img/album/05_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_06'),
                        img: require('@/assets/img/album/06_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_07'),
                        img: require('@/assets/img/album/07_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_08'),
                        img: require('@/assets/img/album/08_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_09'),
                        img: require('@/assets/img/album/09_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_10'),
                        img: require('@/assets/img/album/10_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_11'),
                        img: require('@/assets/img/album/11_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_12'),
                        img: require('@/assets/img/album/12_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_13'),
                        img: require('@/assets/img/album/13_01_s.jpg')
                    },
                    {
                        word: this.$t('photo_14'),
                        img: require('@/assets/img/album/14_01_s.jpg')
                    },
                ]
            }
        },
        created() {
            if (this.isWindow) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        mounted() {

        },
        methods: {
            handleScroll() {
                var scrollY = window.scrollY || document.documentElement.scrollTop;
                var kv_height = document.querySelector('.index').getBoundingClientRect().height / 3;
                if (!this.isScrolled && scrollY > kv_height) {
                    this.initAlbum();
                    this.isScrolled = true;
                    window.removeEventListener('scroll', this.handleScroll);
                }
            },
            openBox(evt, index) {
                var newKey = this.store.slickData.word[index].action;

                $('.lightbox .slickBox').slick('slickGoTo', newKey, true);

                this.$store.commit('SET_SLICK', true);
                this.$nextTick(() => {
                    $('.lightbox.init').removeClass('init');
                    $('.lightbox .slickBox').slick('setPosition');
                });
            },
            initAlbum() {
                var leftLine = '.album .subject .left .line';
                var rightWord = '.album .subject .right';
                var albumLi = '.album .albumbox ul li';
                var TL = new TimelineMax({
                    delay: 0
                });
                var lineTween = new TweenMax(leftLine, .5, {
                    width: '100%',
                    ease: Power0.easeIn
                });
                var wordTween = new TweenMax(rightWord, .4, {
                    opacity: 1,
                    y: -50,
                    ease: Power0.easeIn
                });
                var liTween = TweenMax.staggerTo(albumLi, .2, {
                    scale: 1,
                    delay: 0,
                    ease: Power0.easeOut
                }, .1);
                TL.add(lineTween);
                TL.add(wordTween);
                TL.add(liTween);
            },
            destroyed() {
                if (this.isWindow) {
                    window.removeEventListener('scroll', this.handleScroll);
                }
            }
        }
    }

</script>

<style>


</style>
