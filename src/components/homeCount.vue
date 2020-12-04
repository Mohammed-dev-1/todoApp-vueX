<template>
  <div class="container p-4 bg-dark shadow-lg rounded">
      <h1 class="text-light ml-3">{{ counter }}</h1>
      <button-count />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import buttonCount from './buttonCount'

export default {
    name: 'homeTemp',
    components: {
      buttonCount
    },
    computed: {
      ...mapGetters(['counter'])
    }
}
</script>

<style>

</style>