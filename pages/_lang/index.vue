<template>
    <span id="indexPage" :class="$i18n.locale" v-cloak>
        <loading />
        <headerMenu />
        <albumbox />
        <picbox />
        <div class="wrap">
            <kv />
            <album />
            <history />
            <qa />
            <fbbox />
        </div>
    </span>
</template>

<script>
    import loading from '~/components/loading.vue';
    import headerMenu from '~/components/menu.vue';
    import albumbox from '~/components/albumbox.vue';
    import picbox from '~/components/picbox.vue';
    import kv from '~/components/kv.vue';
    import album from '~/components/album.vue';
    import history from '~/components/history.vue';
    import qa from '~/components/qa.vue';
    import fbbox from '~/components/fbbox.vue';
    export default {
        components: {
            loading,
            headerMenu,
            albumbox,
            picbox,
            kv,
            album,
            history,
            qa,
            fbbox,
        }
    }
</script>

<style>
    
</style>
