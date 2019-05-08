<template>
	<view  class="page">
		<view class="inputMaiin">
			<view class="input-box">
				<view class="input-left">姓名</view>
				<view class="input-right"><input class="uni-input" focus value="cheer" /></view>
			</view>
			<view class="input-box">
				<view class="input-left">手机号码</view>
				<view class="input-right"><input class="uni-input" type="number" value="18033441849" /></view>
			</view>
			<view class="input-box">
				<view class="input-left">邮政编码</view>
				<view class="input-right"><input class="uni-input" type="number" value="518000" /></view>
			</view>
			<view class="input-box">
				<view class="input-left">所在区域</view>
				<view class="input-right"><input :value="pickerText" class="uni-input" @click="showMulLinkageThreePicker" disabled="disabled" placeholder="所在区域" /></view>
			</view>
			<view class="input-box">
				<view class="input-left">详细地址</view>
				<view class="input-right"><input class="uni-input" focus value="科兴科学园" /></view>
			</view>
		</view>
		<view class="radioBox">
			<radio value="2222" />设为默认收货地址
		</view>
		<view class="mpvue-picker">
			<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
			 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
	</view>
</template>

<script>
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	import mpvueCityPicker from '../../../components/mpvue-citypicker/mpvueCityPicker.vue';
	export default{
		components: {
			mpvuePicker,
			mpvueCityPicker
		},
		data(){
			return{
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[]
			}
		},
		onNavigationBarButtonTap:function(btn){
			uni.navigateTo({
				url: '../managementUrl/managementUrl',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			onCancel(e) {
				console.log(e)
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e.label).substring(1,JSON.stringify(e.label).length-1);
			}
		},
	}
</script>

<style>
	.page{
		position: fixed;
		height: 100%;
		width: 100%;
		background-color: #EEEEEE;
		padding-bottom:12%
	}
	uni-page-body{
		height: 100%;
		background-color: #EEEEEE;
	}
	.inputMaiin{
		padding-top: 5%;
	}
	.input-box{
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		align-items: center;
		padding: 2% 0;
	}
	.input-left{
		width: 25%;
		color: #666;
		padding-left: 4%;
	}
	.input-right{
		width: 75%;
	}
	.radioBox{
		display: flex;
		align-items: center;
		width: 90%;
		margin: 10% auto;
		color: #666;
	}
</style>
