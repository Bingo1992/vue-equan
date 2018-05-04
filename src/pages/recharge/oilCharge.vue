<template>
  <div>

  
    <ul class="form-list border-list">
        <li>
            <input type="tel" placeholder="请输入19位油卡卡号" v-model="cardNum">
            <p class="border-top"></p>
        </li>
        <li>
            <input type="tel" placeholder="再次确认卡号" v-model="conCardNum">
            <p class="border-top"></p>
        </li>
    </ul>
    <ul class="face-list">
    	  <li :class="{'active': idx===i}" v-for="(item, i) in feeList" @click="getVal(item.ebi, i)">
    	  	<p class="face-value">{{item.faceVal}}元</p>
    	  </li>
    </ul>

    <div class="bg-mgShow">
    	 <div class="title-bar border-bottom">
          <h5>支付选择</h5>
       </div>
       <ul>
          <li class="list-box">
            <p class="list-info-h">e币支付</p>
            <span class="font-orange pdr">{{ebi}} e币</span>
             <label class="checkbox">
                <input type="radio" name="type" checked>
                <i class="icon-hook"></i>
            </label>
          </li>
       </ul>
    </div>

		<div class="bg-mgShow rich-box">
			 <h5>服务说明</h5>
	      <p class="font-red">每天23:00-01:00暂停充值。</p>
		</div>
	     
    <div class="btn">
        <p class="btn-theme" @click="saveAddress()">保存</p>
    </div>

    <alert-tip v-show="showAlertTip" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
    import alertTip from '/components/alertTip'
    export default {
      name: 'addAddress',
      data () {
        return {
            showAlertTip: false,
            alertText: '',
            ebi: 299,
            feeList: [{'faceVal': 30, 'ebi': 299} , {'faceVal': 50, 'ebi': 499}, {'faceVal': 100, 'ebi': 999}],
            idx: 0,
            ads:{
              mobile: ''
            }   
        }
      },
      components: {
         alertTip
      }, 
      computed: {
        //判断手机号码
        rightMobile() {
            return  /^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/.test(this.ads.mobile)
         }
      },
      methods: {
        getVal(ebi, i) {
          this.idx = i;
          this.ebi = ebi;
        },
        // 保存
        async saveAddress(params) {
          if(!this.rightMobile){
            this.showHideAlert('手机号不正确');
          } 
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
@import '../../assets/scss/var.scss';
// .addAddress {
//   @extend %fixed-body;
//   z-index: 5;
//   background-color: #f6f6f6;
// }
</style>
