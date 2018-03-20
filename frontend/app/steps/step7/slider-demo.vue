<template>
  <cp-section>
    <cp-slider name="demo-slider"></cp-slider>
  </cp-section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CpSection from '../final/layout/cp-section.vue'
  import CpSlider from '../final/slider/cp-slider.vue'
  import Component from "vue-class-component";

  @Component({
    components: {CpSection, CpSlider}
  })
  export default class SliderDemo extends Vue {
  }
</script>
