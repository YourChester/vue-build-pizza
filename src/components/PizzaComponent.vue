<template>
  <div class="constructor">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'PizzaComponent',
  data () {
    return {
      msg: 'Your pizza!'
    }
  }
}
</script>

<style scoped>
  .constructor {
    background-color: white;
  }
</style>
