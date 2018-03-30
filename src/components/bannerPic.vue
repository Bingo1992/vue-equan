<template>
  <div :class="['swiper-container','swiper-container'+myClass]">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in listImg" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
        </div>
        <div :class="['swiper-pagination', 'swiper-pagination-white', 'swiper-pagination'+myClass]"></div>
    </div>
</template>


<script>

import Swiper from 'swiper';
import '../assets/css/swiper.min.css';
export default {
    name: 'swiper-container',
    data () {
      return {
         len: 2,
         swiper: null
      }
    },
    props: ['listImg','myClass'],
    mounted() {
        for(var i = 0; i < this.len; i++) {
           var swiper = new Swiper('.swiper-container'+i, {
                pagination: '.swiper-pagination'+i,
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
            
    },   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/var.scss';
.swiper-container {
    width: 100%;
    height: pxTorem(348);
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        // background-size: 100% 100%;
        object-fit:fill;
        img {
            width: 100%;
            height: 100%;
        }
    }
    // .swiper-pagination-bullet {
    //     width: .36rem;
    //     height: .36rem;
    //     display: inline-block;
    // }
}
.swiper-pagination {
    bottom: $banBottom !important;
}

</style>
