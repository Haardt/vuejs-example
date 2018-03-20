<template>
  <li @click="clicked" v-bind:class="[{active: active}]">
    <a>{{ label }}</a>
  </li>
</template>

<style scoped>
  li {
    float: left;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #f8f8f8;
  }

  .active {
    border-bottom: lightskyblue solid;
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Inject, Prop} from 'vue-property-decorator'
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'

  @Component()
  export default class CpTabItemDemo extends Vue {

    @Prop({type: String, required: true}) name: string
    @Prop() label: string
    @Prop({type: Boolean, default: false}) tabActive: boolean

    active: boolean = false

    created() {
      this.active = this.tabActive
    }

    @Inject('tabName')
    tabName: string

    clicked() {
      this.$parent.$emit('tab-clicked', {tabName: this.tabName, tabItemName: this.name})
      this.active = true
    }

    deactivate() {
      this.active = false
    }
  }
</script>

