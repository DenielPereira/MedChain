<template>
  <span :class="color"><slot></slot></span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: String
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');
  span {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;

    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-transform: uppercase;

    box-shadow: 0px 3px 6px #00000029;
    
    background-color: #F2D42C;
    color: white;
  }
  
  .yellow {
    background-color: #F2D42C;
    color: white;
  }

  .blue {
    background-color: #5347FE;
    color: white;
  }
</style>
