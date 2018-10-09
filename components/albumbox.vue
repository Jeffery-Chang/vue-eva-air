<template>
    <transition name="fade">
        <div class="lightbox init" v-show="store.slickData.isOpen"><a class="close" @click.prevent="close"><span></span><span></span></a>
            <!-- album-->
            <div class="main album_main">
                <p>{{ store.slickData.titleWord }}</p>
                <div class="gallery"> 
                    <div class="lightbox_arrow">
                        <a class="left"><span class="icon-arrow"></span></a>
                        <a class="right"><span class="icon-arrow"></span></a>
                    </div>
                    <div class="slickBox">
                        <div :key="$index" class="picBox" v-for="(item, $index) in store.slickData.pic">
                            <img :src="require('@/assets/img/album/' + item.src)" alt="">
                        </div>
                    </div>
                </div>
                <div class="slider">
                    <ul>
                        <li :key="$index" v-for="(item, $index) in store.slickData.pic">
                            <a :class="{ 'active' : $index == 0 }">
                                <img :src="require('@/assets/img/album/' + item.src)" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="closeArea" @click.prevent="close"></a>
        </div>
    </transition>
</template>

<script>
    if (process.browser) {
        var $ = require('jquery');
        var slick = require('slick-carousel');
    }
    export default {
        data() {
            return {
                store: this.$store.state
            }
        },
        mounted() {
            this.$store.commit('SET_SLICK', true);
            this.$nextTick(() => {
                this.init();
            });
        },
        methods: {
            init() {
                var $this = this;
                $this.$store.commit('SET_SLICK_WORD', $this.$t('photo_in_01'));
                $('.lightbox .slider ul').on('init', (event, slick) => {
                    this.$store.commit('SET_SLICK', false);
                });
                $('.lightbox .slickBox').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    adaptiveHeight: true,
                    dots: false,
                    infinite: false,
                    prevArrow: $('.lightbox_arrow .left'),
                    nextArrow: $('.lightbox_arrow .right'),
                    asNavFor: '.lightbox .slider ul'
                });
                $('.lightbox .slider ul').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '.lightbox .slickBox',
                    arrows: false,
                    dots: false,
                    infinite: false,
                    centerMode: false,
                    focusOnSelect: true
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                    $('.lightbox .slider ul li').eq(currentSlide).find('a').removeClass('active');
                    $('.lightbox .slider ul li').eq(nextSlide).find('a').addClass('active');
                    $.each($this.store.slickData.word, function(key, obj) {
                        var newIndex = obj.index + 1;
                        if (nextSlide >= obj.action && nextSlide <= obj.action_end) {
                            var newWord = 'photo_in_' + ((newIndex < 10) ? '0' + newIndex : newIndex);
                            if ($this.store.slickData.titleWord != $this.$t(newWord)) $this.$store.commit('SET_SLICK_WORD', $this.$t(newWord));
                        }
                    });
                });
            },
            close() {
                this.$store.commit('SET_SLICK', false);
            }
        }
    }

</script>

<style>
    .init{
        z-index: -1;
        visibility: hidden;
    }

</style>
