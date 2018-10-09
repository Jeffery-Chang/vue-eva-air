<template>
    <div class="fbBoxVue">
        <div class="fbBox">
            <h2>{{ $t('FB_H1') }}</h2>
            <div class="sub">{{ $t('FB_H2') }}</div>
            <div class="main">
                <div class="left">
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fevaairwayscorp.tw%2Fposts%2F864319930381858&show_text=true&appId=263541880685647&height=600" width="100%" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                </div>
                <div class="right">
                    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fevaairwayscorp.tw%2Fvideos%2F862389463908238%2F&show_text=true&appId=263541880685647" width="100%" style="border:none;" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                </div>
            </div>
            <footer><img src="~assets/img/footer.png" alt="">
                <p>Copyright © EVA Airways. All rights reserved.</p>
            </footer>
        </div>
        <div class="scrolling_cloud" v-parallax=".4"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {

        }
    }

</script>

<style>


</style>
