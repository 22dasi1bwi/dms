<template>
    <div class="w-full mx-auto font-sans relative min-h-screen-99">
        <app-navigation></app-navigation>
        <router-view class="px-8 container mx-auto"></router-view>
        <the-global-message></the-global-message>
    </div>
</template>

<script>
    import Navigation from './components/navigation/Navigation.vue';
    import TheGlobalMessage from "./components/TheGlobalSnackbar";
    import './assets/css/main.css';

    export default {
        components: {
            appNavigation: Navigation,
            TheGlobalMessage: TheGlobalMessage,

        }
    }
</script>
