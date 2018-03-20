<template>
  <div>
    <ul v-bind:class="{separator: showSeparator}">
      <slot></slot>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .separator {
    border-bottom: #eeeeee solid;
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Prop, Provide} from 'vue-property-decorator'

  @Component()
  export default class CpTab extends Vue {
    @Prop() name: string
    @Prop({type: Boolean, default: false}) showSeparator: boolean

    @Provide('tabName')
    providedTabName: string = this.name
  }
</script>

