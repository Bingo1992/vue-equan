<template>
   <ul class="nav-bar flex-layout fixed-bottom">
    <li>
      <router-link to="/home">
        <i class="icon-home_2"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li>
      <router-link to="/cart">
        <i class="icon-cart_2"></i>
        <p>购物车</p>
        <span v-if="cartNum && cartNum!=0" class="circlePoint">{{cartNum}}</span>
      </router-link>
    </li>
    <li>
      <router-link to="/ticket">
        <i class="icon-ticket"></i>
        <p>订单</p>
      </router-link>
    </li>
    <li>
      <router-link to="/user">
        <i class="icon-user_2"></i>
        <p>我的</p>
      </router-link>
    </li>
   </ul> 
</template>


<script>
// import {mapState, mapMutations} from 'vuex'

export default {
  name: 'navBar',
  data () {
    return {
      cartNum: 0
    }
  },
  computed: {
   
  },
  mounted() {
    
  },
  methods:{
   
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.fixed-bottom {
  @extend %fixed-bottom;
}
// 底部导航
.nav-bar {
  background-color: #fff;
  li {
    -webkit-box-orient:vertical;
    padding: 4px 0;
  }
  i {
    color: #d5dadd;
    font-size: 28px;
  }
  a {
    color: #999;
  }
  &:after {
    @extend %mini-border;
    border-top: 1px solid $border-color;
  }
}
.nav-bar .router-link-active{
  p, i{
    color: $color-theme;
  }
  i {
   background: $bkg-theme;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  } 
}
    
</style>
