<template>
  <div id="hello">
    {{ greetings }}
    <cp-who name="Softwerkskammer"></cp-who>

    <!-- new -->
    <p>
      <input @keyup.enter="addPerson" type="text" v-model="person"/>
      <button @click="addPerson">Add</button>
    </p>
    <div v-for="person in audience">
      {{ greetings }}
      <cp-who :name="person"/>
    </div>
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
    data: function() {
      return {
        greetings: 'Hello',
        audience: [],
        person: ''
      }
    },
    methods:
      {
        addPerson: function () {
          this.audience.push(this.person)
          this.person = ''
        }
      }
  }
</script>
