<template>
    <div class="index">
        <div class="main">
            <h1>
                <div class="ani_pos">
                    <div class="tt1" v-show="$i18n.locale != 'jp'"><img :src="require('@/assets/' + $t('index_tt1'))" alt=""></div>
                    <div class="tt2" v-show="$i18n.locale == 'zh'"><img src="~assets/svg/tt2.svg" alt=""></div>
                    <div class="tt3"><img :src="require('@/assets/' + $t('index_tt3'))" alt=""></div>
                    <div class="tt4"><img src="~assets/img/tt4.png" alt=""></div>
                    <div class="tt5"><img src="~assets/svg/tt5.svg" alt=""></div>
                </div><img class="base" :src="require('@/assets/' + $t('index_base'))" alt="那些年，我們一起搭的747-400">
            </h1>
            <p class="sub" v-html="$t('index_H2_PC')"></p>
            <!-- 英文版p裡面包p,在server-side會檢查語法,故使用no-ssr略過檢查(或是把裡面的p改掉) -->
            <no-ssr>
                <p class="sub m_sub" v-html="$t('index_H2_M')"></p>
            </no-ssr>
            <div class="scroll">
                <div class="line"></div>
            </div>
        </div>
        <div class="top-slider">
            <div class="cell">
                <div class="inner">
                    <div class="slide-img" :style="slide1_1"></div>
                </div>
            </div>
            <div class="cell">
                <div class="inner">
                    <div class="slide-img" :style="slide1_2"></div>
                </div>
            </div>
            <div class="cell">
                <div class="inner">
                    <div class="slide-img" :style="slide1_3"></div>
                </div>
            </div>
            <div class="cell">
                <div class="inner">
                    <div class="slide-img" :style="slide1_4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TweenMax from 'gsap';
    var bgInterval = null,
        bgTimeout = null;
    export default {
        data() {
            return {
                store: this.$store.state,
                winWidth: 0,
            }
        },
        computed: {
            imgName() {
                return (this.winWidth <= 1080) ? 'm_' : '';
            },
            fileName() {
                return (this.winWidth <= 1080) ? 'jpg' : 'png';
            },
            position() {
                return (this.winWidth <= 1080) ? (this.winWidth <= 700) ? 'left -100px' : 'left 90%' : 'center bottom';
            },
            slide1_1() {
                return (`background: url(` + require('@/assets/img/' + this.imgName + 'bg1.' + this.fileName) + `) ` + this.position + ` / cover;`);
            },
            slide1_2() {
                return (`background: url(` + require('@/assets/img/' + this.imgName + 'bg2.' + this.fileName) + `) ` + this.position + ` / cover;`);
            },
            slide1_3() {
                return (`background: url(` + require('@/assets/img/' + this.imgName + 'bg3.' + this.fileName) + `) ` + this.position + ` / cover;`);
            },
            slide1_4() {
                return (`background: url(` + require('@/assets/img/' + this.imgName + 'bg4.' + this.fileName) + `) ` + this.position + ` / cover;`);
            }
        },
        beforeMount() {
            this.winWidth = document.body.offsetWidth;
            this.scrollTop = document.documentElement.scrollTop;
        },
        mounted() {
            this.$nextTick(() => {
                this.slideBG();
                if (!this.store.isLoaded) {
                    TweenMax.to(document.getElementById('splash'), .5, {
                        height: "0%",
                        delay: 1.5,
                        onComplete: () => {
                            this.$store.commit('SET_LOAD', true);
                            this.$nextTick(() => {
                                this.initTitle();
                            });
                        }
                    });
                } else {
                    this.initTitle();
                }
            });
        },
        methods: {
            scroll() {
                if (this.burger) return;

                var scrollTop = $(window).scrollTop();
                var width = $(window).width();
                var albumOffset = $('.album').offset().top;
                var tlOffset = $('.history').offset().top;
                var storyOffset = $('.story').offset().top;
                var qaOffset = $('.QA').offset().top;
                var fbboxOffset = $('.fbBox').offset().top;
                var offsetList = [albumOffset, tlOffset, storyOffset, qaOffset, fbboxOffset];
                var gaList = ['image', 'timeline', 'history', 'QA', 'fanpage'];
                var padding = 0;
                var headerH = $('header').height();

                if ((scrollTop > (albumOffset * 0.6)) && this.albumIN) {
                    this.albumIN = false;
                    this.initAlbum();
                }

                (scrollTop > albumOffset) ? $('.top-slider').css('opacity', 0): $('.top-slider').css('opacity', 1);
            },
            resize() {
                this.winWidth = document.body.offsetWidth;

                document.querySelectorAll('.inner').forEach((e) => {
                    e.style.width = this.winWidth + 'px';
                });
            },
            slideBG() {
                if (bgInterval != null) {
                    clearInterval(bgInterval);
                    bgInterval = null;
                }
                if (bgTimeout != null) {
                    clearTimeout(bgTimeout);
                    bgTimeout = null;
                }

                document.querySelectorAll('.cell')[0].classList.add('is-next');
                document.querySelectorAll('.inner').forEach((e) => {
                    e.style.width = this.winWidth + 'px';
                });

                slide_show();
                bgInterval = setInterval(slide_show, 5000);

                function slide_show() {
                    var nodes = Array.prototype.slice.call(document.querySelector('.top-slider').children);
                    var nowObj = document.querySelector('.is-next');
                    var nextIndex = nodes.indexOf(nowObj);
                    var newIndex = (nextIndex + 1 >= document.querySelectorAll('.cell').length) ? 0 : nextIndex + 1;
                    var nextElement = nodes[newIndex];

                    document.querySelectorAll('.is-next')[0].classList.add('is-active');
                    if (document.querySelector('.current') != null) {
                        document.querySelector('.current').classList.add('is-out');
                    }

                    bgTimeout = setTimeout(function() {
                        document.querySelector('.is-next.is-active').classList = 'cell current';
                        document.querySelectorAll('.cell')[newIndex].classList.add('is-next');

                        if (document.querySelector('.current.is-out') != null) {
                            document.querySelector('.current.is-out').classList.remove('current');
                            document.querySelector('.is-out').classList.remove('is-out');
                        }
                    }, 1200);
                }
            },
            initTitle() {
                var left = '.tt1, .tt3';
                var right = '.tt2';
                var line = '.tt4';
                var plane = '.tt5';
                var words = '.index .sub:not(.m_sub)';
                var scroll = '.index .scroll';
                var m_title = '.index .base';
                var m_words = '.index .sub.m_sub';
                var delaytime = 0;
                var sec = 1;

                TweenMax.to(right, .8, {
                    width: "144px",
                    delay: .75 + delaytime
                });
                TweenMax.staggerTo([left, words], .75, {
                    y: -50,
                    opacity: 1,
                    delay: delaytime,
                    ease: Power1.easeOut
                }, .33);

                var tl = new TimelineMax({
                    delay: .5 + delaytime
                });
                var bezTween = new TweenMax(plane, sec, {
                    bezier: {
                        type: "soft",
                        values: [{
                                x: 179,
                                y: 32,
                                opacity: 1,
                                scale: 1.2,
                                rotation: 35
                            },
                            {
                                x: 229,
                                y: -15,
                                opacity: 1,
                                scale: .9,
                                rotation: 0
                            }
                        ],
                        autoRotate: false
                    },
                    ease: Power2.easeIn
                });
                tl.add(bezTween);
                TweenMax.to(line, sec, {
                    width: '231px',
                    ease: Power2.easeIn,
                    delay: .5 + delaytime
                });

                TweenMax.staggerTo([m_title, m_words], .75, {
                    y: -50,
                    opacity: 1,
                    delay: delaytime,
                    ease: Power1.easeOut
                }, .33);

                TweenMax.to(scroll, .8, {
                    opacity: 1,
                    delay: 1 + delaytime
                });
            }
        }
    }

</script>

<style>


</style>
