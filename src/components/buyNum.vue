<template>
	<div class="amount">
      <span :class="['minus', 'icon-minus', num <= 1? 'dis-btn':'']" @touchstart="down()"></span>
      <span class="count" @click="showDialog()">{{num}}</span>
      <span class="plus icon-plus" @touchstart="up()"></span>
		
		<div v-if="showNumDialog" class="ui-dialog">
	        <div class="dialog-cnt">
	  			<div class="center-text">
	  				<h5 class="pdt">购买数量</h5>
	  				<div class="amount">
	  					 <span :class="['minus', 'icon-minus', num <= 1? 'dis-btn':'']" @touchstart="down()"></span>
					      <input type="number" class="count" maxlength="3" v-model.number="num">
					      <span class="plus icon-plus" @touchstart="up()"></span>
	  				</div>
	  			</div>
	            <div class="two-btn">
	            	<a class="btn-cancel" @click="closeDialog">取消</a>
	                <a class="btn-theme" @click="confirmBtn">确定</a>
	            </div>
	        </div>
	　 </div>

  </div>
</template>
<script>
export default {
	data() {
		return {
			num: this.proNum,
			limit: 999,
			showNumDialog: false
		}
	},
	props: {
	  proNum: {
        type: [Number],
        default: 1
      },
      proID: {
        type: [Number, String]
      },
      check: {
        type: [String, Boolean]
      },
	},
	methods: {
		up() {
			this.changeNum('up');
		},
		down() {
			this.changeNum('down');
		},
		changeNum(type) {
			if(type === 'up') {//+
				this.num++;
			} else {//-
				this.num--;
			}
			this.$emit('editNum', this.proID, this.num, this.check);
		},
		confirmBtn() {
			this.num = this.num > this.limit ? Number(this.limit) : Number(this.num);
 			if(this.num < 1 || this.num == '') {
 				this.num = 1;
 			}
			this.$emit('editNum', this.proID, this.num, this.check);
			this.showNumDialog = false;
		},
		showDialog() {
			this.showNumDialog = true;
		},
		closeDialog() {
			this.showNumDialog = false;
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/var.scss';

.minus,.plus {
    @include btnRadius(28px);
    padding: 0;
    display:inline-block;
    background-color: #f4f4f4;
    width: 30px;
}
.minus {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &.dis-btn {
        color: #ccc;
        pointer-events: none;
    }
}
.plus {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.count {
    padding: 0 4px;
    width: 35px;
    height: 28px;
    background-color: #f4f4f4;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}
.ui-dialog {
	.minus, .plus, .count {
		border: 1px solid #e6e6e6;
		margin: 10px 4px;
	}
}
</style>