<template>
  <div :class="['swiper-container','swiper-container-c'+myClass]">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in listImg" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
        </div>
        <!-- <div :class="['swiper-pagination', 'swiper-pagination-white', 'swiper-pagination-c'+myClass]"></div> -->
    </div>
</template>


<script>

// import Swiper from 'swiper';
import '../assets/css/swiper.min.css';
export default {
    name: 'swiper-container',
    data () {
      return {
         // len: 2
      }
    },
    props: ['listImg','myClass'],
    mounted() {
        
        // var swiper = new Swiper('.swiper-container', {
        //     pagination: '.swiper-pagination',
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //     paginationClickable: true,
        //     spaceBetween: 30
        // });
        
      
            
    },   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/var.scss';
.swiper-container {
    width: 100%;
    height: pxTorem(180);
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: pxTorem(640);
        // margin: 0 pxTorem(24); 
        height: 100%;
        // background-size: 100% 100%;
        object-fit:fill;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
// .swiper-pagination {
//     bottom: $banBottom !important;
// }

</style>
