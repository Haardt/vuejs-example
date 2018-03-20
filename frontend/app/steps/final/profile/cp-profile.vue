<template>
  <cp-section>
    <cp-tab name="ProfileTabs" :show-separator=true>
      <cp-tab-item @tab-clicked="showLanguage" name="lang" label="profile.tabLanguage"/>
      <cp-tab-item @tab-clicked="showAppearance" name="appearance" label="profile.tabAppearance"/>
    </cp-tab>

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <spinner v-if="isProfileLoadingFromStore" :message="'loading' | translate"/>

    <div class="separator"></div>
    <button v-show="!isProfileSavingFromStore" @click="save" class="save-button">
      <h3>{{ $t('profile.save') }}</h3>
    </button>
    <spinner v-show="isProfileSavingFromStore" :message="'saving' | translate"/>
  </cp-section>
</template>

<style scoped>
  .separator {
    width: 100%;
    border-bottom: black solid thin;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .save-button {
    width: 100px;
  }

</style>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import CpSlider from '../slider/cp-slider.vue'
  import CpColorSlider from './cp-color-slider.vue'
  import CpSection from '../layout/cp-section.vue'
  import CpTab from '../layout/cp-tab.vue'
  import CpTabItem from '../layout/cp-tab-item.vue'
  import {Action, Getter, Mutation} from "vuex-class";
  import Spinner from 'vue-simple-spinner'

  @Component({
    components: {CpSlider, CpColorSlider, CpSection, CpTab, CpTabItem, Spinner}
  })
  export default class CpProfile extends Vue {

    @Mutation("tab/activateTab") activateTab
    @Getter("slider/getSliderValue") getSliderValue
    @Getter('profile/isProfileLoading') isProfileLoading
    @Getter('profile/isProfileSaving') isProfileSaving

    @Action('profile/saveProfile') saveProfile

    get isProfileLoadingFromStore() {
      return this.isProfileLoading()
    }

    get isProfileSavingFromStore() {
      return this.isProfileSaving()
    }

    showLanguage() {
      this.$router.push({name: 'lang'})
    }

    showAppearance() {
      this.$router.push({path: '/profile/appearance'})
    }

    save() {
      this.saveProfile().then(success => {
        this.$router.push({path: '/profile/lang'})
        this.activateTab({tabName: 'ProfileTabs', tabItemId: 'lang', active: true})
      }, error => {
        //error
      })
    }
  }
</script>
