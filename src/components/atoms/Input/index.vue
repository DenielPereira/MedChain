<template>
  <input :type="type" :placeholder="placeholder" @input="handleInput($event.target.value)"/>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    placeholder: String
  },
  methods: {
    handleInput(text) {
      this.$emit('input', text)
    }
  }
}
</script>

<style lang="sass" scoped>
  input
    margin-bottom: $space-2
    padding: $space-2
    font-weight: 500
    font-size: 16px
    height: 45px
    box-shadow: 2px 2px 10px transparentize($black, 0.86)
    border: 1px solid lighten($black, 68)
    width: 80%
    border-radius: 5px
    @media only screen and (max-width: 768px) 
      font-size: 14px !important

    &:focus
      border: 1px solid lighten($primary, 25) 
      outline: 0

</style>
