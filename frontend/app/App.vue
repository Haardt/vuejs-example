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
    import Hello from './steps/step1/hello.vue'
    import CpProfile from './steps/final/profile/cp-profile.vue'
    import StepsMenu from './steps/final/menu/cp-steps-menu.vue'

    @Component({
        name: 'app',
        components: {Hello, CpProfile, StepsMenu}
    })
    export default class App extends Vue {

        created(): void {
        }

        showAppliances() {
            // showAppliances(this.$router, this.$store)
        }
    }

</script>

