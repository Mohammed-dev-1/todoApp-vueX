<template>
  <div id="app">
    <home-count />
    <home-item />
  </div>
</template>

<script>
import homeCount from './components/homeCount'
import homeItem from './components/homeItem'

export default {
  name: 'App',
  components: {
    homeCount,
    homeItem    
}
}
</script>

<style>
body{
  background: #144b6f;
}
#app{
  padding: 50px;
}
</style>
