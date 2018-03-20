<template>
    <div>
        <p v-if="showValue">{{ $t('currentSliderValue') }}: {{ sliderValueFromStore }}</p>
        <div class="slider">
            <input type="range" :min="min" :max="max" :value="sliderValueFromStore" @input="updateSliderValueInStore">
        </div>
    </div>
</template>

<style scoped>
    .slider {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 60px;
        padding-right: 60px;
    }
    input {
        width: 100%;
    }
</style>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import {Prop} from 'vue-property-decorator'
    import {Getter, Mutation} from "vuex-class"
    import {SliderPayload} from "./cp-slider-module"

    @Component()
    export default class CpSlider extends Vue {
        @Prop({type: String, required: false, default: 'slider'}) name
        @Prop({type: Number, required: false, default: 0}) startValue
        @Prop({type: Boolean, required: false, default: true}) showValue
        @Prop({type: String, required: false, default: "0"}) min
        @Prop({type: String, required: false, default: "100"}) max

        @Mutation("slider/update") updateSlider
        @Getter("slider/getSliderValue") getSliderValue

        get sliderValueFromStore() {
            return this.getSliderValue(this.name) == -1 ? this.startValue : this.getSliderValue(this.name)
        }

        updateSliderValueInStore(event) {
            this.updateSlider(new SliderPayload(this.name, event.target.value))
        }
    }
</script>
