<template>
　 <div class="tip-dialog">
        <div class="tip-content">
            <p>{{alertText}}</p>
        </div>
　 </div>
</template>
<script>

export default {
   name : 'tipDialog',
   data() {
　　  return {
        showAlertTip: true
　　  }
　 },
	props: ['alertText']
}
</script>

<style lang="scss">
@import '../assets/scss/var.scss';
.tip-dialog{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    @extend %fixed-body;
    z-index: 20;
}
.tip-content{
    padding:  $gauge;
    line-height: 20px;
    max-width: 12rem;
    background-color: rgba(0,0,0,.65);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
}
</style>