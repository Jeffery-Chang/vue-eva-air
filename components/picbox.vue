<template>
    <transition name="fade">
        <div class="lightbox" v-show="store.isOpenPIC">
            <a class="close" @click.prevent="close"><span></span><span></span></a>
            <div class="main"><img :src="store.pic_src" alt=""></div>
            <a class="closeArea" @click.prevent="close"></a>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                store: this.$store.state
            }
        },
        mounted() {
            
        },
        methods: {
            close(){
                this.$store.commit('SET_PIC', false);
            }
        }
    }

</script>

<style>


</style>
