<template>
  <div id="hello">
    {{ greetings }}
    <cp-who name="Softwerkskammer"></cp-who>
  </div>
</template>

<style scoped>
  #hello {
    margin-left: 10%;
    margin-top: 30px;
  }
</style>

<script lang="js">
  import CpWho from './cp-who.vue'

  export default {
    components: {CpWho},
    data: function () {
      return {
        greetings: 'Hello'
      }
    }
  }

</script>
