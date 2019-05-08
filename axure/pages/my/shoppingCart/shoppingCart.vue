<template>
	<view class="page">
		<view class="swipeAction">
			<uni-swipe-action :options="item.options2" @click="bindClick" v-for="(item,index) in enterData" :key="index">
				<view class="cont">
					<checkbox :data-id="item.packboxId" :value="item.packboxId" :checked="item.checked" @click="checkBox($event, item)" />
					<view class="imgBox">
						<image :src="item.imgurl"></image>
					</view>
					<view class="rightMain">
						<text class="title">{{item.title}}</text>
						<text class="style">{{item.style}}<image src="../../../static/right.png"></image></text>
						<view class="number">
							<text class="value">￥{{item.value}}</text>
							<view class="addnum">
								<uni-number-box :value="item.numberValue" @change="change" />
							</view>
						</view>
					</view>
				</view>
			</uni-swipe-action>
		</view>
		<view class="bottomBox">
			<view class="bottomLeft">
				<checkbox value="qqq" :checked="ischecked" @change="changeCheckbox" />
				合计:<text>￥0</text>
			</view>
			<view class="jiesuan">
				结算(0)
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default{
		components: {
			uniSwipeAction,
			uniNumberBox
		},
		onLoad:function(){
			this.enterData.forEach(item => {
				item.checked = false;
			});
		},
		data(){
			return{
				numberValue: 0,
				numberValue1: 0,
				numberValue2: 0,
				ischecked:false,
				enterData:[
					{
						checked:false,
						packboxId:"1",
						imgurl:"../../../static/goods1.png",
						title:"2019新款真皮绑带凉鞋女夏白搭平底波西米亚女鞋夹趾沙滩学生搭平底波西米亚女鞋夹趾沙滩学生",
						style:"彩色;35",
						value:"138.86",
						options2: [{
							text: '取消',
							style: {
								backgroundColor: '#007aff'
							}
						}, {
							text: '删除',
							style: {
								backgroundColor: '#dd524d'
							}
						}],
						numberValue:0
					},
					{
						checked:false,
						packboxId:"2",
						imgurl:"../../../static/goods2.png",
						title:"2019新款真皮绑带凉鞋女夏白搭平底波西米亚女鞋夹趾沙滩学生搭平底波西米亚女鞋夹趾沙滩学生",
						style:"彩色;36",
						value:"138.86",
						options2: [{
							text: '取消',
							style: {
								backgroundColor: '#007aff'
							}
						}, {
							text: '删除',
							style: {
								backgroundColor: '#dd524d'
							}
						}],
						numberValue:0
					},
					{
						checked:false,
						packboxId:"3",
						imgurl:"../../../static/goods3.png",
						title:"2019新款真皮绑带凉鞋女夏白搭平底波西米亚女鞋夹趾沙滩学生搭平底波西米亚女鞋夹趾沙滩学生",
						style:"彩色;38",
						value:"138.86",
						options2: [{
							text: '取消',
							style: {
								backgroundColor: '#007aff'
							}
						}, {
							text: '删除',
							style: {
								backgroundColor: '#dd524d'
							}
						}],
						numberValue:0
					}
				]
			}
		},
		methods:{
			bindClick(value) {
				uni.showToast({
					title: `点击了${value.text}按钮`,
					icon: 'none'
				})
			},
			change(value) {
				this.numberValue = value
			},
			change1(value) {
				this.numberValue1 = value
			},
			change2(value) {
				this.numberValue2 = value
			},
			 checkBox(e, item) {
				let that = this;
				let box = (item.checked = !item.checked);
			},
			enter() {
				let that = this;
				// 循环遍历ID
				that.serverData = [];
				that.enterData.forEach(item => {
					if (item.checked == true) {
						that.serverData.push(item.packboxId);
					}
				});
				console.log(that.serverData);
			},
			changeCheckbox(){
				console.log("1111");
				if(this.ischecked==true){
					enter();
				}else{
					
				}
			}
		}
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
	.swipeAction{
		width: 100%;
	}
	.cont {
		width: 100%;
		height: auto;
		padding:30upx;
		display: flex;
		align-items: center;
	}
	.title{
		text-overflow: ellipsis;
		overflow:hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: -webkit-box;
	}
	.imgBox image{
		width: 180upx;
		height: 180upx;
	}
	.style{
		background-color: #f8f8f8;
		width: 156upx;
		border-radius: 6upx;
		text-align: center;
		color: #AAAAAA;
	}
	.style image{
		width: 20upx;
		height: 20upx;
	}
	.rightMain{
		display: flex;
		flex-direction: column;
		padding-left: 20upx;
	}
	checkbox{
		margin-right: 20upx;
	}
	.number{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.number .value{
		color: red;
	}
	.uni-numbox__minus{
		background-color: rgba(0,0,0,0);
	}
	.uni-numbox{
		height: 31px;
	}
	.bottomBox{
		width: 100%;
		height: 100upx;
		padding: 1% 3%;
		box-sizing: border-box;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		line-height: 100upx;
		display:flex;
		align-items: center;
		justify-content: space-between;
	}
	.bottomLeft{
		display: flex;
		align-items: center;
	}
	.bottomLeft text{
		color: red;
		font-size: 36upx;
	}
	.jiesuan{
		color: #fff;
		background-color: red;
		padding: 1% 4%;
		border-radius: 30upx;
	}
</style>
