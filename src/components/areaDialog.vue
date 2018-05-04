<template>
　 <div class="slideDialog">
        <!-- 选择城市遮罩 -->
        <div :class="['Procity-list', 'dialog-list', {'more-wp-open':openCity}]">
            <a class="return-back border-bottom" @click="closeDialog">
                <i class="icon-left"></i>
                <h4>选择城市</h4>
            </a>
            <ul class="selProvince dialog-start-list">
                <li v-for="item in province" :key="item.ProID" @click="getCity(item.ProID,item.ProName)">{{item.ProName}}</li>
            </ul>
            <ul class="selCity dialog-end-list">
                <li v-for="item in city" :key="item.CityID" @click="getDistrict(item.CityID,item.CityName)">{{item.CityName}}</li>
            </ul>
        </div>

        <!-- 选择区县遮罩 -->
        <div :class="['zone-list', 'dialog-list', {'more-wp-open':openDis}]">
            <a class="return-back border-bottom" @click="closeDialog">
                <i class="icon-left"></i>
                <h4>选择地区</h4>
            </a>
            <ul class="selDistrict dialog-end-list whole-list">
                <li v-for="item in zone"  @click="getDisName(item.DisName)">{{item.DisName}}</li>
            </ul>
        </div>   

　 </div>
</template>
<script>
import {province,city,district} from '/api/api'
export default {
    name : 'slideDialog',
    data() {
　　  return {
        province:[],
        city:[],
        zone:[],
        cityName: '',
        disName:''
　　  }
　  },
	props: ['openCity','openDis'],
    mounted() {
        this.getProvince();
    },
    methods:{
       // 获取省份
       async getProvince() {
            this.province = await province();
        },
        // 获取城市
        async getCity(proID, name) {
            this.cityName = name;
            let allCity = await city();
            let cityArr = [];
            allCity.forEach((item) => {
                if(item.ProID === proID){
                    cityArr.push(item);
                }
            });
            this.city = cityArr;

        },
        // 获取地区
        async getDistrict(cityID,name) {
            if(this.cityName != name){
                this.cityName += name;
            }
            let allDistict = await district();
            let disArr = [];
            allDistict.forEach((item) => {
                if(item.CityID === cityID){
                    disArr.push(item);
                }
            });
            this.zone = disArr;
            this.$emit('closeDialog');
            this.$emit('cityName',this.cityName);
            this.$emit('disName','');//置空区县
        },
        closeDialog() {
            this.$emit('closeDialog');
        },
        getDisName(name){
            this.disName = name;
            this.$emit('disName',this.disName);
            this.$emit('closeDialog');
        }
    }

}
</script>

<style lang="scss">
@import '../assets/scss/var.scss';
.dialog-list{
    @extend %fixed-body;
    background-color: #fff;
    z-index: 10;
    box-sizing: border-box;
    -webkit-transform: translateX(150%) translateZ(0);
    -webkit-transition: all .6s linear 0s;
}
.dialog-start-list,.dialog-end-list {
    width: 50%;
    margin-top: 44px;
    float: left;
    // text-align: center;
    overflow: auto;
    height: 100%;
    font-size: 12px;
    li{
        position: relative;
        padding: 0 10px;
        line-height: 40px;
        &:after {
            @extend %mini-border;
            border-bottom: 1px solid #e1e1e1;
        }
    }
}
.dialog-start-list{
    background-color: #eee;
    li.active {
        background-color: #fff;
    }
}
.whole-list {
    width: 100%;
    li {text-align: left;}
}

.return-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    @include height;
    padding: 0 10px;
    box-sizing: border-box;
    h4 {
        text-align: center;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }
}
.more-wp-open {
    -webkit-transform: translateX(0) translateZ(0) !important;
    -webkit-transition: all .6s;
}
</style>