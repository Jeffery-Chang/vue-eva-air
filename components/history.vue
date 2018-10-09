<template>
    <div class="history">
        <div class="main">
            <h2>{{ $t('Timeline_H1') }}</h2>
            <div class="sub">{{ $t('Timeline_H2') }}</div>
            <div class="timeline">
                <section>
                    <div class="event" v-html="$t('Timeline_01')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img class="p1" src="~assets/img/event/event_01.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_02')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_02.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_03')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_03.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_04')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="c2-2"><img src="~assets/img/c2.png" alt=""></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_05')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_04.jpg" alt=""></a></div>
                    <div class="plane1 wow slideInRight"><img src="~assets/img/plane2.png" alt=""></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_06')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_05.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_07')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_06.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_08')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_07.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_09')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_08.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_10')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img class="p9" src="~assets/img/event/event_09.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_11')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img class="p10" src="~assets/img/event/event_10.jpg" alt=""></a></div>
                    <div class="c3"><img src="~assets/img/c3.png" alt=""></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_13')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="c2-3"><img src="~assets/img/c2.png" alt=""></div>
                    <div class="plane2 wow slideInLeft"><img src="~assets/img/plane1.png" alt=""></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_14')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_13.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_15')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_14.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_16')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_15.jpg" alt=""></a></div>
                    <div class="c1-2"><img src="~assets/img/c1.png" alt=""></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_17')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_16.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_18')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img class="p17" src="~assets/img/event/event_17.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_19')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_18.jpg" alt=""></a></div>
                </section>
                <section>
                    <div class="event" v-html="$t('Timeline_20')"></div>
                    <div class="tldots"><div class="cir"></div></div>
                    <div class="pic"><a href="#" @click.prevent="openSingle($event)"><img src="~assets/img/event/event_19.jpg" alt=""></a></div>
                </section>
            </div>
            <div class="story">
                <div class="content">
                    <h3>{{ $t('History_H1') }}</h3>
                    <div class="story_arrowbox">
                        <a class="left" href="#"><span class="icon-arrow"></span></a>
                        <a class="right" href="#"><span class="icon-arrow"></span></a>
                    </div>
                    <div class="slidebox">
                        <div class="item">
                            <h4>{{ $t('History_01_1') }}</h4>
                            <p>{{ $t('History_01_2') }}</p>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_02_1') }}</h4>
                            <p>{{ $t('History_02_2') }}</p>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_03_1') }}</h4>
                            <p>{{ $t('History_03_2') }}</p>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_04_1') }}</h4>
                            <p>{{ $t('History_04_2') }}</p>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_05_1') }}</h4>
                            <h5>{{ $t('History_05_2_1') }}</h5>
                            <div class="years">
                                <ul v-html="$t('History_05_2_2')"></ul>
                            </div>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_05_1') }}</h4>
                            <h5>{{ $t('History_05_2_3') }}</h5>
                            <div class="years">
                                <ul v-html="$t('History_05_2_4')"></ul>
                            </div>
                        </div>
                        <div class="item">
                            <h4>{{ $t('History_05_1') }}</h4>
                            <div class="txtbox">
                                <h5>{{ $t('History_05_2_5') }}</h5>
                                <div class="years"><ul v-html="$t('History_05_2_6_1')"></ul></div>
                                <div class="years"><ul v-html="$t('History_05_2_6_2')"></ul></div>
                            </div>
                        </div>
                    </div>
                    <div class="slider">
                        <div class="indicator"></div>
                    </div>
                </div>
            </div>
            <div class="c2"><img src="~assets/img/c2.png" alt=""></div>
            <div class="c3-2"><img src="~assets/img/c3.png" alt=""></div>
            <div class="c3-3"><img src="~assets/img/c3.png" alt=""></div>
        </div>
    </div>
</template>

<script>
    if (process.browser) {
        var WOW = require('wow.js');
        var $ = require('jquery');
        var slick = require('slick-carousel');
    }
    export default {
        data() {
            return {
                store: this.$store.state
            }
        },
        computed: {

        },
        beforeMount() {

        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                if ($(window).width() > 736) {
                    $('.timeline section .event, .timeline section .tldots, .timeline section .pic').addClass('inStage').addClass('fadeInUp');
                    new WOW().init();
                    new WOW({
                        boxClass: 'inStage',
                        offset: 200
                    }).init();
                    new WOW({
                        boxClass: 'timeline section',
                        animateClass: 'long',
                        offset: 200
                    }).init();
                    this.$store.commit('SET_WOW', true);
                } else {
                    if (!this.store.isWOW) $('.timeline section').addClass('long');
                }
                // 歷史回顧
                $('.slidebox').slick({
                    dots: true,
                    appendDots: $('.story .slider'),
                    infinite: false,
                    prevArrow: $('.story_arrowbox .left'),
                    nextArrow: $('.story_arrowbox .right'),
                    customPaging: function(slider, i) {
                        return '<a style="cursor: pointer;"></a>';
                    },
                    responsive: [{
                        breakpoint: 736,
                        settings: {
                            adaptiveHeight: true,
                        }
                    }]
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                    $('.indicator').css('margin-left', nextSlide * 25 + 'px');
                });
            },
            openSingle(evt) {
                this.$store.commit('SET_SRC', evt.target.getAttribute('src'));
                this.$store.commit('SET_PIC', true);
            }
        }
    }

</script>

<style>
    @charset "UTF-8";
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
    }

    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0)
        }
        to {
            opacity: 1;
            -webkit-transform: none;
            transform: none
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0)
        }
        to {
            opacity: 1;
            -webkit-transform: none;
            transform: none
        }
    }

    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp
    }

    @-webkit-keyframes slideInLeft {
        from {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            visibility: visible
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    @keyframes slideInLeft {
        from {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            visibility: visible
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    .slideInLeft {
        -webkit-animation-name: slideInLeft;
        animation-name: slideInLeft
    }

    @-webkit-keyframes slideInRight {
        from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            visibility: visible
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    @keyframes slideInRight {
        from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            visibility: visible
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    .slideInRight {
        -webkit-animation-name: slideInRight;
        animation-name: slideInRight
    }

    .slick-list,
    .slick-slider,
    .slick-track {
        position: relative;
        display: block
    }

    .slick-loading .slick-slide,
    .slick-loading .slick-track {
        visibility: hidden
    }

    .slick-slider {
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent
    }

    .slick-list {
        overflow: hidden;
        margin: 0;
        padding: 0
    }

    .slick-list:focus {
        outline: 0
    }

    .slick-list.dragging {
        cursor: pointer;
        cursor: hand
    }

    .slick-slider .slick-list,
    .slick-slider .slick-track {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .slick-track {
        top: 0;
        left: 0
    }

    .slick-track:after,
    .slick-track:before {
        display: table;
        content: ''
    }

    .slick-track:after {
        clear: both
    }

    .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px
    }

    [dir=rtl] .slick-slide {
        float: right
    }

    .slick-slide img {
        display: block
    }

    .slick-slide.slick-loading img {
        display: none
    }

    .slick-slide.dragging img {
        pointer-events: none
    }

    .slick-initialized .slick-slide {
        display: block
    }

    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent
    }

    .slick-arrow.slick-hidden {
        display: none
    }

    /*# sourceMappingURL=slick.min.css.map */

</style>
