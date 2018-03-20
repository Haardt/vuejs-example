<template>
  <cp-section>

    <cp-tab-demo ref="demo" v-on:tab-clicked="deselectAllTabs"  name="demo">
      <cp-tab-item-demo label="test1" name="test1" :tab-active=true />
      <cp-tab-item-demo label="test2" name="test2"/>
      <cp-tab-item-demo label="test3" name="test3"/>
      <cp-tab-item-demo label="test4" name="test4"/>
    </cp-tab-demo>

  </cp-section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from "vue-class-component";

  import CpSection from '../final/layout/cp-section.vue'
  import CpTabDemo from './cp-tab-demo.vue'
  import CpTabItemDemo from './cp-tab-item-demo.vue'

  @Component({
    components: {CpSection, CpTabDemo, CpTabItemDemo}
  })
  export default class ProvideEmit extends Vue {

    deselectAllTabs({tabName, tabItemName}) {
      this.$refs.demo.deselectTabs()
    }
  }
</script>
