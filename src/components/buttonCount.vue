<template>
  <div class="container">
      <button class="btn btn-success" @click="addCount">Add Count</button>
      <button class="btn btn-danger ml-2" @click="disCount">Dis Count</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'buutonCount',
    computed: {
       ...mapGetters(['counter']) 
    },
    methods: {
      ...mapActions(['addCount']),
      ...mapActions(['disCount'])
    }
}
</script>

<style>

</style>