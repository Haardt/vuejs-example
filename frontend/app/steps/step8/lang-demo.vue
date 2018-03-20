<template>
  <cp-section>

    <h3>{{$t('hello')}} <cp-who :name="'doctor' | translate" /> </h3>
    <h3>
      {{ $t('mail.newMessage', {count: count}, count) }}
    </h3>

    <h3>
      {{ $t('currentLanguage')}}: {{ $i18n.locale() }}
    </h3>
  </cp-section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CpSection from '../final/layout/cp-section.vue'
  import Component from "vue-class-component";
  import CpWho from '../step1/cp-who.vue'

  @Component({
    components: {CpSection, CpWho}
  })
  export default class LangDemo extends Vue {

    intervalId: number
    count: number = 1

    mounted() {
      this.intervalId = setInterval(() => {
        this.count++
        if (this.$i18n.locale() === 'de') {
          this.$i18n.set('en')
        } else {
          this.$i18n.set('de')
        }
      }, 2000)
    }

    destroyed() {
      clearInterval(this.intervalId)
    }


  }
</script>
