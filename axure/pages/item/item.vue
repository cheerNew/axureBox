<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''">
				 <!-- <image :src="tabIndex==index ? tab.imgurlActive:tab.imgurl"></image> -->
				 <image :src="tab.imgurl"></image>
				 <view :data-current="index" @click="tapTab" :data-id="tab.id">{{tab.name}}</view>
			 </view>
		</scroll-view>
		<view class="swiper-box">
			<view class="mainBox" v-for="(item,index) in newsitems" :key="index">
				<view class="title-box">
					<image :src="item.titleIcon"></image>
					<text>{{item.title}}</text>
				</view>
				<view class="banner-main">
					<image :src="item.bannerUrl"></image>
					<text class="remen">{{item.bannerTitle}}</text>
				</view>
				<view class="title-main">
					<text class="main-left">{{item.content}}</text>
					<text class="main-right">￥{{item.value}}元起</text>
				</view>
				<view class="scond-title">{{item.smallTitle}}</view>
				<view class="main-bottom">
					<view class="bottom-left">
						<image src="../../static/xin.png"></image>
						<text>{{item.xinValue}}</text>
						<image class="imgstyle" src="../../static/yanjing.png"></image>
						<text>{{item.jinValue}}</text>
					</view>
					<view class="bottom-right">
						<image src="../../static/xiaoxi.png"></image>
						<text>{{item.commentValue}}</text>
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [
					{
						titleIcon:"../../static/nav1.png",
						title:"餐厨专题",
						bannerUrl:"../../static/banner1.jpg",
						bannerTitle:"热门",
						content:"五个春天的生活新提案",
						value:"99",
						smallTitle:"餐厨起居好物",
						xinValue:"100",
						jinValue:"10000",
						commentValue:"100"
					},
					{
						titleIcon:"../../static/nav2.png",
						title:"餐厨专题",
						bannerUrl:"../../static/banner2.jpg",
						bannerTitle:"热门",
						content:"五个春天的生活新提案",
						value:"99",
						smallTitle:"餐厨起居好物",
						xinValue:"100",
						jinValue:"10000",
						commentValue:"100"
					},
					{
						titleIcon:"../../static/nav4.png",
						title:"餐厨专题",
						bannerUrl:"../../static/banner3.jpg",
						bannerTitle:"热门",
						content:"五个春天的生活新提案",
						value:"99",
						smallTitle:"餐厨起居好物",
						xinValue:"100",
						jinValue:"10000",
						commentValue:"100"
					}
				],
				tabBars: [{
					name: '全部专题',
					id: '111111',
					imgurl:"../../static/p0.png",
					//imgurlActive:"../../static/tab11.png"
				}, {
					name: '服装专题',
					id: '22222',
					imgurl:"../../static/p1.png",
					//imgurlActive:"../../static/tab22.png"
				}, {
					name: '配件专题',
					id: '33333',
					imgurl:"../../static/p2.png",
					//imgurlActive:"../../static/tab33.png"
				}, {
					name: '居家专题',
					id: '44444',
					imgurl:"../../static/p3.png",
					//imgurlActive:"../../static/tab44.png"
				}, {
					name: '洗护专题',
					id: '55555',
					imgurl:"../../static/p4.png",
					//imgurlActive:"../../static/tab55.png"
				}, {
					name: '娱乐',
					id: '666666',
					imgurl:"../../static/p5.png",
					//imgurlActive:"../../static/tab66.png"
				}, {
					name: '军事',
					id: '77777',
					imgurl:"../../static/p6.png",
					//imgurlActive:"../../static/tab77.png"
				}],
				
			}
		},
		onLoad() {
			
		},
		methods: {
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				if(e.currentTarget.dataset.id==55555){
					this.newsitems=[
						{
							titleIcon:"../../static/nav1.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						}
					]
				}else if(e.currentTarget.dataset.id==22222){
					this.newsitems=[
						{
							titleIcon:"../../static/nav1.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner3.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						}
					]
				}else if(e.currentTarget.dataset.id==33333){
					this.newsitems=[
						{
							titleIcon:"../../static/nav4.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner2.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						}
					]
				}else{
					this.newsitems=[
						{
							titleIcon:"../../static/nav1.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner1.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						},
						{
							titleIcon:"../../static/nav2.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner3.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						},
						{
							titleIcon:"../../static/nav4.png",
							title:"餐厨专题",
							bannerUrl:"../../static/banner.jpg",
							bannerTitle:"热门",
							content:"五个春天的生活新提案",
							value:"99",
							smallTitle:"餐厨起居好物",
							xinValue:"100",
							jinValue:"10000",
							commentValue:"100"
						}
					]
				}
				console.log(e.currentTarget.dataset.id);
				let tabIndex = e.target.dataset.current;
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
		}
	}
</script>

<style>
	uni-page-body{
		height: 100%;
		background-color: #F2F2F2;
	}
	.swiper-box{
		background-color: #F2F2F2;
	}
	page{
		height: 100%;
		background-color: #F2F2F2;
	}
	.swiper-tab-list image{
		width: 50upx;
		height: 50upx;
	}
	.uni-swiper-tab{
		width: 100%;
		white-space: nowrap;
		line-height: 70px;
		height: 61px;
		border-bottom: 1px solid #c8c7cc;
		padding-top: 10px;
		background-color: #fff;
	}
	.uni-tab-bar .active{
		color: #2AB795;
	}
	.swiper-box{
		width: 100%;
		height: 950upx;
		overflow-y: auto;
	}
	.mainBox{
		margin: 4% 0;
		border-top: 1px solid #ccc;
		background-color: #fff;
	}
	.title-box{
		width: 100%;
		padding: 2% 3%;
		display: flex;
		align-items: center;
	}
	.title-box image{
		width: 50upx;
		height: 50upx;
		padding-right: 2%;
	}
	.title-box text{
		color: #333333;
	}
	.banner-main{
		width: 100%;
		position: relative;
	}
	.banner-main image{
		width: 100%;
		height: 280upx;
	}
	.remen{
		position: absolute;
		top: 3%;
		right: 2%;
		background-color: #FD994B;
		border-radius: 20upx;
		width: 120upx;
		text-align: center;
		color: #fff;
	}
	.title-main{
		width: 100%;
		padding: 1% 3%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.main-left{
		width: 70%;
		text-overflow: ellipsis;
		overflow:hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		display: -webkit-box;
	}
	.main-right{
		width: 30%;
		color: #FB0017;
		text-align: right;
	}
	.scond-title{
		color: #ccc;
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.main-bottom{
		width: 100%;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		padding: 2%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 2%;
		box-sizing: border-box;
	}
	.bottom-left{
		width: 60%;
		display: flex;
		align-items: center;
	}
	.bottom-left image{
		width: 40upx;
		height: 40upx;
	}
	.bottom-left text{
		padding: 0 1%;
	}
	.bottom-right{
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.imgstyle{
		margin-left: 12%;
	}
	.bottom-right image{
		width: 40upx;
		height: 40upx;
	}
	.bottom-right text{
		padding: 0 2%;
		margin-right: 5%;
	}
</style>