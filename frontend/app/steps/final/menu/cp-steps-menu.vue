<template>
  <cp-section>
    <cp-tab name="StepsMenu">
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step1" label="binding"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step2" label="directives/events"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step3" label="maaagic"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step4" label="class"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step5" label="slots"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step6" label="provide/emit"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step7" label="vuex"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step8" label="i18n"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="step9" label="router"/>
      <cp-tab-item v-on:tab-clicked="tabClicked" name="final" label="final"/>
      <cp-tab-item v-on:tab-clicked="activateSupport" name="support" label="support"/>
    </cp-tab>
  </cp-section>
</template>

<style scoped>
</style>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import CpSlider from '../slider/cp-slider.vue'
  import CpSection from '../layout/cp-section.vue'
  import CpTab from '../layout/cp-tab.vue'
  import CpTabItem from '../layout/cp-tab-item.vue'
  import {Action, Mutation} from "vuex-class";

  @Component({
    components: {CpSlider, CpSection, CpTab, CpTabItem}
  })
  export default class CpProfile extends Vue {

    @Mutation("tab/activateTab") activateTab
    @Mutation("SUPPORT_OVERRIDE") supportOverride
    @Action("profile/loadProfile") loadProfileToStore

    tabClicked(tabId: any) {
      switch (tabId.item) {
        case 'step9': {
          this.$router.push({path: '/route-demo/demo1/007'})
          break;
        }
        case 'final': {
          this.activateTab({tabName: 'ProfileTabs', tabItemId: 'lang', active: true})
          this.loadProfileToStore()
          this.$router.push({path: '/profile/lang'})
          break;
        }
        default:
          this.$router.push({path: `/${tabId.item}`})
          break;
      }
    }

    activateSupport() {
      this.supportOverride({})
      this.$eventBus.registerHandler('support-outbound', (err, message) => {
        this.supportOverride({...message.body})
      })
    }
  }
</script>
