<template>
 <!--  <div :class="['swiper-container','swiper-container'+myClass]">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in listImg" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
        </div>
        <div :class="['swiper-pagination', 'swiper-pagination-white', 'swiper-pagination'+myClass]"></div>
    </div> -->
    <div class="swipeSlide-banner">
        <div class="swipeSlide-wrapper">
            <div class="swiper-slide" v-for="item in listImg" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
        </div>
    </div>
</template>


<script>
import a from '/assets/images/banner1.jpg'
import b from '/assets/images/banner1.jpg'
import c from '/assets/images/banner1.jpg'
export default {
    name: 'swiper-container',
    data () {
      return {
         listImg: [{
              url: a
          }, {
              url: b
          }, {
              url: c
          }]
      }
    },
    mounted() {
       
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/var.scss';
.swipeSlide-banner {
    position: relative;
    width: 100%;
    height: 5rem;
    overflow: hidden;
}
.swipeSlide-wrapper {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
}
</style>
