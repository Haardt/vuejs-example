<template>
  <cp-section>
    <div slot="header">
      Header slot
    </div>
    <p>Default slot</p>
  </cp-section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CpSection from '../final/layout/cp-section.vue'
  import Component from "vue-class-component";

  @Component({
    components: {CpSection}
  })
  export default class SlotDemo extends Vue {
  }
</script>
