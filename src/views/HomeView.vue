<template>
  <v-row
      justify="center"
      align="center"
      no-gutters
      style="height: 90vh"
    >
    <v-img
      class="home-img"
      max-height="200"
      max-width="200"
      contain
      :src="innerCircle"
    />
    <div class="home-line-wrapper justify-center text-center d-flex">
      <div class="home-line"></div> 
    </div>
    <v-img
      class="home-img"
      max-height="200"
      max-width="200"
      contain
      :src="rightImg"
      @click="$router.push('/main')"
    />
  </v-row>

</template>
<script>
import rightImg from '@/assets/sport1.jpeg'
import innerCircle from '@/assets/inner-circle.jpeg'

export default {
  data: function () {
    return {
      leftImg: '',
      rightImg,
      innerCircle
    }
  },
}
</script>

<style lang="scss" scoped>
  .img-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .home {
    &-img {
      cursor: pointer;
    }
    &-line {
      width: 5px;
      height: 100%;
      background: #fff;
      &-wrapper {
        height: 100%;
        width: 300px;
      }
    }
  }
</style>
