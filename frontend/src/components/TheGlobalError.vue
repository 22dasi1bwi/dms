<template>
    <div
            class="z-50 bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded absolute top-0 inset-x-0 w-1/2 mx-auto mt-1 shadow"
            role="alert" v-if="globalError.display">
        <strong class="font-bold">{{globalError.caption}}</strong>
        <span class="block sm:inline">{{globalError.message}}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="resetGlobalError" role="button">
        <svg-close></svg-close>
      </span>
    </div>
</template>

<script>
    import SvgClose from './svg/SvgClose';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "TheGlobalError",
        components: {
            SvgClose
        },
        computed: {
            ...mapState([
                'globalError'
            ])
        },
        methods: {
            ...mapActions([
                'resetGlobalError'
            ])
        }
    }
</script>
