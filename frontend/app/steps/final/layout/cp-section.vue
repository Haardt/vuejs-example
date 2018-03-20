<template>
  <section>
    <h3>
      <slot name="header"></slot>
    </h3>
    <slot></slot>
  </section>
</template>

<style scoped>
  section {
    background-color: white;
    border: #939393 solid;
    border-width: thin;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10px;
    padding: 5px;
    -webkit-box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.35);
    box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.35);
  }
</style>

<script lang="ts">
  import Vue from "vue"
  import Component from "vue-class-component";
  import {Prop} from "vue-property-decorator";

  @Component({
    components: {}
  })
  export default class CpSection extends Vue {
  }
</script>
