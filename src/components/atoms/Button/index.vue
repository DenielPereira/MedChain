<template>
  <button :class="color" @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: String,
    click: Function
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="sass" scoped>

button 
  padding: 0 $space-2
  border: none
  border-radius: 5px !important
  font-weight: 500
  font-size: 16px
  box-shadow: 0 2px 8px -1px transparentize($black, 0.7)
  color: white
  @media only screen and (max-width: 768px) 
    font-size: 14px !important

  &:hover 
    cursor: pointer
    box-shadow: 1px 1px 8px -1px transparentize($black, 0.5)

  &.blue-gradient 
    background-color: #5347FE
    background: linear-gradient(to bottom right, #5347FE, #4F2BEA)
    color: white
    transition: background-color .5s
    &:hover
      background-color: #512BEA
      background: linear-gradient(to top left, #512BEA, #6047FE)
      transition: background-color 2s

  &:focus
    outline: none !important
    background: linear-gradient(to top left, #512BEA, #6047FE)
    box-shadow: inset 1px 1px 8px -1px transparentize($black, 0.5),
    1px 1px 8px -1px transparentize($black, 0.5)
  
</style>
