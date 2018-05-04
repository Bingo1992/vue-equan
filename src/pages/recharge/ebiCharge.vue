<template>
  <div>
    <ul class="form-list border-list">
        <li>
            <label>券码：</label>
            <input type="tel" placeholder="请输入16位券码" v-model="ticketNum">
        </li>
    </ul>
	     
    <div class="btn">
        <p class="btn-theme" @click="recharge()">充值</p>
    </div>

    <dl class="rich-box font-gray bg-mgShow">
      <dt>使用说明</dt>
      <dd>1、刮开e券积分卡背面的“密码”涂层；</dd>
      <dd>2、将密码输入到“码券”，安全码输入到“安全码”；</dd>
      <dd>3、拖动滑条获取图片验证码，按提示点击图片中的图案；</dd>
      <dd>4、点击“充值”进入充值页面。</dd>
    </dl>

    <alert-tip v-show="showAlertTip" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
  import alertTip from '/components/alertTip'
  export default {
    data () {
      return {
          showAlertTip: false,
          alertText: '',
          ticketNum: ''
      }
    }, 
    components: {
       alertTip
    }, 
    methods: {
      // 充值
      recharge() {
        if(this.ticketNum === ''){
          this.showHideAlert('券码不正确');
        } else {
          this.$router.push('/rechargeType');
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
    },
      

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
 
</style>
