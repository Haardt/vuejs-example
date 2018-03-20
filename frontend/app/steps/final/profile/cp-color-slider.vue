<template>
  <div>
    <h2>{{ $t('appearance.chooseBackgroundColor' )}}</h2>

    <div v-bind:style="{backgroundColor: 'rgb(' + sliderR +','+sliderG+',' + sliderB +')', height: '100px'}"></div>
    <div class="show-rgb">{{$t('appearance.red')}}:{{sliderR}} {{$t('appearance.green')}}:{{sliderG}}
      {{$t('appearance.blue')}}:{{sliderB}}
    </div>
    <cp-slider name="r" max="255" :show-value=false></cp-slider>
    <cp-slider name="g" max="255" :show-value=false></cp-slider>
    <cp-slider name="b" max="255" :show-value=false></cp-slider>

  </div>
</template>

<style scoped>
  .show-rgb {
    text-align: center;
    padding-top: 10px;
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Prop} from 'vue-property-decorator'
  import {Getter, Mutation} from "vuex-class";
  import CpSlider from '../slider/cp-slider.vue'

  @Component({
    components: {CpSlider}
  })
  export default class CpColorSlider extends Vue {
    @Prop({type: String, required: false, default: 'color-slider'}) name

    @Getter("slider/getSliderValue") getSliderValue

    get sliderR() {
      return this.getSliderValue('r')
    }

    get sliderG() {
      return this.getSliderValue('g')
    }

    get sliderB() {
      return this.getSliderValue('b')
    }

  }
</script>
