<template>
    <transition name="fade">
        <div id="splash" v-if="!store.isLoaded">
            <div class="anim">
                <div id="loader"><img src="~assets/svg/plane.svg" alt=""><img class="shade" src="~assets/svg/plane_b.svg" alt=""></div>
            </div>
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

        }
    }

</script>

<style>


</style>
