<template>
  <cp-section>
    <h3>Top-Content</h3>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <h3>Bottom-Content</h3>
  </cp-section>
</template>

<style scoped>
</style>

<script lang="ts">
  import Vue from 'vue'
  import CpSection from '../final/layout/cp-section.vue'
  import Component from "vue-class-component";

  @Component({
    components: {CpSection}
  })
  export default class RouterDemo extends Vue {
  }
</script>
