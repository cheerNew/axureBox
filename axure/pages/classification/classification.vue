<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryListnew" :key="index">
					<image :src="item.imgurl" />
					<view>{{item.title}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [
					{name:"服装"},
					{name:"餐厨"},
					{name:"配件"},
					{name:"居家"},
					{name:"洗护"},
					{name:"婴童"},
					{name:"杂货"},
					{name:"饮食"}
				],
				subCategoryListnew:[],
				subCategoryList: [
					{
						id:0,
						list:[
							{imgurl:"../../static/p0.png",title:"内裤"},
							{imgurl:"../../static/p1.png",title:"内衣"},
							{imgurl:"../../static/p2.png",title:"袜子"},
							{imgurl:"../../static/p3.png",title:"大衣"},
							{imgurl:"../../static/p4.png",title:"家居服"},
							{imgurl:"../../static/p5.png",title:"衬衫"},
							{imgurl:"../../static/p6.png",title:"外套"},
						]
					},
					{
						id:1,
						list:[
							{imgurl:"../../static/p7.png",title:"锅具"},
							{imgurl:"../../static/p8.png",title:"刀铲"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
						]
					},
					{
						id:2,
						list:[
							{imgurl:"../../static/p7.png",title:"锅具"},
							{imgurl:"../../static/p8.png",title:"刀铲"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
							{imgurl:"../../static/p10.png",title:"餐具"},
							{imgurl:"../../static/p11.png",title:"杯壶"},
						]
					},
					{
						id:3,
						list:[
							{imgurl:"../../static/p0.png",title:"内裤"},
							{imgurl:"../../static/p1.png",title:"内衣"},
							{imgurl:"../../static/p2.png",title:"袜子"},
							{imgurl:"../../static/p3.png",title:"大衣"},
							{imgurl:"../../static/p4.png",title:"家居服"},
							{imgurl:"../../static/p5.png",title:"衬衫"},
							{imgurl:"../../static/p6.png",title:"外套"},
						]
					},
					{
						id:4,
						list:[
							{imgurl:"../../static/p7.png",title:"锅具"},
							{imgurl:"../../static/p8.png",title:"刀铲"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
							{imgurl:"../../static/p10.png",title:"餐具"},
							{imgurl:"../../static/p11.png",title:"杯壶"},
						]
					},
					{
						id:5,
						list:[
							{imgurl:"../../static/p0.png",title:"内裤"},
							{imgurl:"../../static/p1.png",title:"内衣"},
							{imgurl:"../../static/p2.png",title:"袜子"},
							{imgurl:"../../static/p3.png",title:"大衣"},
							{imgurl:"../../static/p4.png",title:"家居服"},
							{imgurl:"../../static/p5.png",title:"衬衫"},
							{imgurl:"../../static/p6.png",title:"外套"},
						]
					},
					{
						id:6,
						list:[
							{imgurl:"../../static/p7.png",title:"锅具"},
							{imgurl:"../../static/p8.png",title:"刀铲"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
							{imgurl:"../../static/p10.png",title:"餐具"},
							{imgurl:"../../static/p11.png",title:"杯壶"},
						]
					},
					{
						id:7,
						list:[
							{imgurl:"../../static/p7.png",title:"锅具"},
							{imgurl:"../../static/p8.png",title:"刀铲"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
							{imgurl:"../../static/p10.png",title:"餐具"},
							{imgurl:"../../static/p11.png",title:"杯壶"},
							{imgurl:"../../static/p4.png",title:"家居服"},
							{imgurl:"../../static/p5.png",title:"衬衫"},
							{imgurl:"../../static/p6.png",title:"外套"},
							{imgurl:"../../static/p9.png",title:"功能厨具"},
							{imgurl:"../../static/p10.png",title:"餐具"},
							{imgurl:"../../static/p11.png",title:"杯壶"},
							{imgurl:"../../static/p4.png",title:"家居服"},
							{imgurl:"../../static/p5.png",title:"衬衫"},
							{imgurl:"../../static/p6.png",title:"外套"},
						]
					}
				],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(index) {
				this.categoryActive = index;
				this.subCategoryListnew = this.subCategoryList[index].list;
				this.scrollTop = -this.scrollHeight * index;
			},
		},
		onLoad: function () {
			this.categoryClickMain(0);
			this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style>
	.page-body {
		display: flex;
		background-color: #EEEEEE;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #E0E0E0;
		border-bottom: solid 1px #E0E0E0;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F2F2F2;
	}

	.nav-right {
		width: 70%;
	}

	.nav-right-item {
		width: 37%;
		height: 200upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
		background-color: #fff;
		margin-left: 6%;
		margin-bottom: 2%;
		margin-top: 3%;
	}

	.nav-right-item image {
		width: 100upx;
		height: 100upx;
	}

	.active {
		color: #2AB795;
	}
</style>
