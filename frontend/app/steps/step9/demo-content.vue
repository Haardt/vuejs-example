<template>
  <div>
    <h3>router content component</h3>
    <p>Id: {{ id }}</p>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
  import Vue from 'vue'
  import Component from "vue-class-component";
  import {Prop} from "vue-property-decorator";

  @Component()
  export default class DemoContent extends Vue {
    @Prop({type: String}) id
  }
</script>
