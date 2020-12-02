<template>
  <div :class="color"><slot></slot></div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    color: String
  }
}
</script>

<style lang="sass" scoped>
  .danger
    color: $red
    font-weight: 500
    margin-bottom: $space-1
</style>