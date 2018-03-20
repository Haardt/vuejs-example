<template>
    <div>
        <steps-menu></steps-menu>
        <router-view></router-view>
    </div>
</template>

<style scoped>
</style>
<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import StepsMenu from './steps/final/menu/cp-steps-menu.vue'

    @Component({
        name: 'app',
        components: {StepsMenu}
    })
    export default class App extends Vue {

        created(): void {
        }
    }

</script>

