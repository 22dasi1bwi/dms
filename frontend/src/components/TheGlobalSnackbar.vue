<template>
    <div
            class="z-50 bg-white border text-grey-900 px-4 py-3 rounded-sm absolute bottom-0 inset-x-0 w-1/2 mx-auto mb-4 shadow-lg"
            role="alert" v-if="globalSnackbar.display">
        <strong class="font-bold">{{globalSnackbar.caption}}</strong>
        <span class="block sm:inline">{{globalSnackbar.message}}</span>
        <span class="absolute fixed top-0 bottom-0 right-0 px-4 py-3" @click="resetGlobalSnackbar" role="button">
        <svg-close></svg-close>
      </span>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import SvgClose from './svg/SvgClose';

    export default {
        name: "TheGlobalSnackbar",
        components: {
            SvgClose: SvgClose
        },
        computed: {
            ...mapState([
                'globalSnackbar'
            ])
        },
        methods: {
            ...mapActions([
                'resetGlobalSnackbar'
            ])
        }
    }
</script>

