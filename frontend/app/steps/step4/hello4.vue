<template>
  <div id="hello">
    {{ greetings }}
    <cp-who name="Softwerkskammer"></cp-who>
    <p>
      <input @keyup.enter="addPerson" type="text" v-model="person"/>
      <button @click="addPerson">Add</button>
    </p>
    <div v-for="person in audience">
      {{ greetings }}
      <cp-who v-bind:name="person"/>
    </div>
    <p>Number of people: {{numberOfPeople}}</p>
  </div>
</template>

<style scoped>
  #hello {
    margin-left: 10%;
    margin-top: 30px;
  }
</style>

<script lang="ts">
  import Vue from 'vue'
  import CpWho from '../step1/cp-who.vue'
  import Component from "vue-class-component";
  import {Prop} from "vue-property-decorator";

  @Component({
    components: {CpWho}
  })
  export default class Hello4 extends Vue {

    @Prop({type: String, required: false, default: "Hello"}) greetings: string

    person: string
    audience: string[] = []

    get numberOfPeople() {
      return this.audience.length
    }

    addPerson() {
      this.audience.push(this.person)
      this.person = ''
    }
  }
</script>
