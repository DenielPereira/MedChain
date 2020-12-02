<template>
  <img :class="[size, style_border]" :src="src"/>
</template>

<script>
export default {
  name: 'AvatarUser',
  props: {
    src: String,
    size: String,
    style_border: String
  },
  computed: {
    classRender: function () {
      return {
        size: this.size,
        style_border: this.style_border
      }
    }
  }
}
</script>

<style scoped>
  img {
    box-shadow: 2px 2px 8px #00000029;
  }

  .size-60 {
    width: 60px;
    height: 60px;
  }

  .size-120 {
    width: 120px;
    height: 120px;
  }

  .roudend {
    border-radius: 50%;
  }
</style>
