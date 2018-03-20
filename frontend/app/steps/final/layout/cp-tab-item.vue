<template>
  <li @click="activateTab" v-bind:class="{active: isActive}">
    <a>{{ $t(label) }}</a>
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
  export default class CpTabItem extends Vue {

    @Prop() name: string
    @Prop() label: string
    @Prop({type: Boolean, required: false, default: false}) tabActive: boolean

    @Inject('tabName')
    tabName: string

    @Mutation("tab/activateTab") activateTabInStore
    @Getter('tab/isTabActive') isTabActive

    get isActive() {
      return this.isTabActive(this.tabName, this.name)
    }

    activateTab() {
      this.activateTabInStore({tabName: this.tabName, tabItemId: this.name})
      this.$emit('tab-clicked', {item: this.name})
    }
  }
</script>

