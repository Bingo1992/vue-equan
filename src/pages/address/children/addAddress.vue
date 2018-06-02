<template>
  <div class="children-view">
      <ul class="form-list border-list">
          <li>
              <label>收货人</label>
              <input type="text" placeholder="请输入收货人姓名" v-model="ads.name">
          </li>
          <li>
              <label>联系电话</label>
              <input type="tel" placeholder="请输入联系电话" v-model="ads.mobile">
          </li>
          <li class="btn-city" @click="showCityDialog">
              <label>所在城市</label>
              <input class="cityValue nowrap" type="text" placeholder="选择城市" readonly v-model="ads.cityVal">
              <i class="icon-right"></i>  
          </li>
          <li class="btn-zone" @click="showDisDialog">
              <label>所在地区</label> 
              <input class="zoneValue" type="text" placeholder="选择区县" readonly v-model="ads.disVal">
              <i class="icon-right"></i>  
          </li>
          <li>
              <textarea class="list-info" cols="30" rows="3" placeholder="详细地址" v-model="ads.detailVal"></textarea>
          </li>
          
      </ul>
      <label class="list-box" style="margin:0">
          <div class="checkbox">
              <input  type="checkbox" value="isDefault" v-model="whetherDefault" @change="check">
              <i class="icon-hook"></i>
          </div>
          <span class="list-info">设为默认地址</span>
      </label>
      <div class="btn">
        <p class="btn-theme" @click="saveAddress({addID:addressId,name:ads.name,mobile:ads.mobile,address_detail:ads.cityVal+ads.disVal+ads.detailVal,check:flag})">保存</p>
    </div>

    <area-dialog  :open-city="openCity" :open-dis="openDis" :zone="district" @closeDialog="closeDialog" @cityName="cityName"  @disName="disName"></area-dialog>

    <alert-tip v-show="showAlertTip" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {addressList,updateAddress,addAddress} from '/api/api'
import areaDialog from '/components/areaDialog'
import alertTip from '/components/alertTip'

export default {
  name: 'addAddress',
  data () {
    return {
        showLoading: true, //显示加载中  
        openCity:false,
        openDis: false,
        district:[],
        alertText: "",
        showAlertTip: false,
        address: [],
        whetherDefault: '',//是否默认地址
        flag: false,
        addressId:'',
        ads:{
          name:'',
          mobile:'',
          cityVal:'',
          disVal:'',
          detailVal:''
        }
          
    }
  },
  mounted() {
      this.initData();
  },
  components: {
     areaDialog,  alertTip
  }, 
  computed: {
    //判断手机号码
    rightMobile() {
        return  /^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/.test(this.ads.mobile)
     }
  },
  methods: {
    initData() {
      this.addressId = this.$route.query.addressId;

      if(this.addressId){//修改地址

        addressList().then(res => {
            this.address = res.resultList;
            this.address.forEach((elm, index) => {
               if(elm.id == this.addressId) {
                 this.ads.name = elm.username;
                 this.ads.mobile = elm.mobile;
                 // let arr = elm.address_detail.split(" ");
                 this.ads.cityVal = elm.province + elm.city;
                 this.ads.disVal = elm.district;
                 this.ads.detailVal = elm.detailaddress;
                 // if(elm.check) {
                 //  this.whetherDefault = "check";
                 //  this.flag = true;
                 // }
               }
            });
        })
            
      }
    },
    // 保存
    async saveAddress(params) {
      if(!this.ads.name){
        this.showHideAlert('收货人不能为空');
      } else if(!this.rightMobile){
        this.showHideAlert('手机号不正确');
      } else if(!this.ads.cityVal){
        this.showHideAlert('城市不能为空');
      } else if(!this.ads.disVal){
        this.showHideAlert('县区不能为空');
      } else if(!this.ads.cityVal){
        this.showHideAlert('城市不能为空');
      } else if(!this.ads.detailVal){
        this.showHideAlert('详细地址不能为空');
      } else {
        if(this.addressId) {//修改地址
          let update = await updateAddress(params);
        }else {//添加地址
          delete params.addID;
          let add = await addAddress(params);
        }
        console.log(params)
        this.$router.go(-1);
      }
    },
    check(){
      if(this.whetherDefault){
        this.flag = true;
      }else {
        this.flag = false;
      }
    },
    showCityDialog() {
      this.openCity = true;
    },
    showDisDialog() {
      this.openDis = true;
    },
    closeDialog() {
      this.openCity = false;
      this.openDis = false;
    },
    cityName(name){
      this.ads.cityVal = name;
    },
    disName(name){
      this.ads.disVal = name;
    },
    //显示隐藏提示框
    showHideAlert(text) { 
        this.showAlertTip = true;
        this.alertText = text;
        setTimeout(() => {
            this.showAlertTip = false;
        }, 1000);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/scss/var.scss';
// .addAddress {
//   @extend %fixed-body;
//   z-index: 5;
//   background-color: #f6f6f6;
// }
</style>
