<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0 
  transition: all .2s ease-in-out
  font-family: Metropolis, sans-serif !important
  letter-spacing: -0.04em

a 
  text-decoration: none !important
  
body
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  scroll-behavior: smooth
</style>
