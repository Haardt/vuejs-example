<template>
  <div>
    <ul>
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
</style>

<script lang="ts">
  import Vue from "vue";
  import CpTabItemDemo from './cp-tab-item-demo.vue'
  import Component from "vue-class-component";
  import {Prop, Provide} from 'vue-property-decorator'

  @Component()
  export default class CpTabDemo extends Vue {
    @Prop() name: string

    @Provide('tabName')
    providedTabName: string = this.name

    deselectTabs() {
      this.$children.forEach( (child: CpTabItemDemo) =>  child.deactivate())
    }
  }
</script>

