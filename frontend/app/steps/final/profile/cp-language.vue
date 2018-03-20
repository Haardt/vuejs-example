<template>
  <div>
    <h2>{{ $t('lang.language') }}</h2>
    <div>
      <button @click="setEnglish" id="button1" >
        <h3>{{ $t('lang.english') }}<h3>
      </button>
      <button @click="setGerman" id="button2">
        <h3>
          {{ $t('lang.german') }}
        </h3>
      </button>
    </div>
  </div>
</template>

<style scoped>
  #button1 , #button2 {
    display:inline-block;
    margin-top: 15px;
    margin: 15px;
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Component from 'vue-class-component';
  import {Getter, Mutation} from "vuex-class";

  @Component()
  export default class CpLanguage extends Vue {
    @Mutation('profile/storeLanguage') storeLanguage

    setEnglish() {
      this.storeLanguage('en')
      this.$i18n.set('en');
    }

    setGerman() {
      this.storeLanguage('de')
      this.$i18n.set('de');
    }
  }
</script>
