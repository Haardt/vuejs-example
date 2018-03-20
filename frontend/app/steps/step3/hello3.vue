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

    <!-- new -->
    <p>Number of people: {{ numberOfPeople }}</p>
  </div>
</template>

<style scoped>
  #hello {
    margin-left: 10%;
    margin-top: 30px;
  }
</style>

<script lang="js">
  import CpWho from '../step1/cp-who.vue'

  export default {
    components: {CpWho},
    data: function () {
      return {
        greetings: 'Hello',
        audience: [],
        person: ''
      }
    },
    computed: {
      numberOfPeople: function () {
        return this.audience.length
      }
    },
    methods: {
      addPerson: function () {
        this.audience.push(this.person)
        this.person = ''
      }
    }
  }
</script>
