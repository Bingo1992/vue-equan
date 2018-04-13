<template>
  <div class="chooseAddress">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
       
        <!-- 地址列表 -->
        <ul class="address-list border-list" v-if="address.length">
            <li class="list-box" v-for="(item,i) in address" :key="item.proID"  @click="chooseAddress(item,i)">
               <!-- <label class="list-box" :for="i"> -->
                  <div class="checkbox">
                      <input :id="i" type="radio" name="address" v-model="addressIndex" :value="i">
                      <i class="icon-hook"></i>
                  </div>
                  <div class="list-info">
                      <div class="list-info">
                          <span>{{item.name}}</span>
                          <span>{{item.mobile}}</span>
                          <p>{{item.province}}{{item.city}}{{item.region}}{{item.address_detail}}</p>
                      </div>
                  </div>

              <!-- </label> -->
            </li>
             
        </ul>
         <div class="nothing" v-else>
            <i class="icon-map"></i>
            <h4>您还未添加地址</h4>
        </div>
        <div class="btn">
          <router-link class="btn-theme" to="/chooseAddress/addAddress">+新增地址</router-link>
        </div>
    </section>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>  
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from '/components/loading'
    import {addressList} from '/api/api'
    export default {
      name: 'chooseAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            address:[],
            defaultIndex: 0
        }
      },
      components: {
        loading
      }, 
      created() {
       this.getAddress();
      },
      computed: {
        ...mapState(['addressIndex'])
      },
      methods: {
        ...mapMutations(['CHOOSE_ADDRESS']),
        // 获取地址
        async getAddress() {
            // addressList().then(res => {
            //   this.address = res.result;
            //   this.showLoading = false;
            //   this.address && this.address.forEach((elm, index) => {
            //       if(elm.check === true){
            //           this.defaultIndex = index;
            //       }
            //   });
            // })
              this.address = await addressList();
              this.showLoading = false;
              // this.address && this.address.forEach((elm, index) => {
              //     if(elm.check === true){
              //         this.defaultIndex = index;
              //     }
              // });
        },
        //选择地址
        chooseAddress(address,index) {
          this.CHOOSE_ADDRESS({address, index});
          this.$router.go(-1);
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>
