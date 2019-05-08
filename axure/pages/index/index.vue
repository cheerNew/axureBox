<template>
	<view class="page">
		<view class="banner">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in imgUrls" :key="index">
					<image class="imgsize" :src="item.url"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="navView">
			<view class="nav-item">
				<image src="../../static/icon1.png"></image>
				<text>话题</text>
			</view>
			<view class="nav-item">
				<image src="../../static/icon2.png"></image>
				<text>优选</text>
			</view>
			<view class="nav-item">
				<image src="../../static/icon3.png"></image>
				<text>特惠</text>
			</view>
			<view class="nav-item">
				<image src="../../static/icon4.png"></image>
				<text>签到</text>
			</view>
		</view>
		<view class="msgview">
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon">
					<image src="../../static/icon5.png" mode="widthFix"></image>
				</view>
				<swiper vertical="true" autoplay="true" circular="true" interval="3000">
					<swiper-item>
						<navigator>自营家电清洗服务上线自营家电清洗服务上线1111</navigator>
					</swiper-item>
					<swiper-item>
						<navigator>自营家电清洗服务上线自营家电清洗服务上线2222</navigator>
					</swiper-item>
					<swiper-item>
						<navigator>自营家电清洗服务上线自营家电清洗服务上线3333</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="center"></view>
		<view>
			<view class="title">
				<view class="title-left"><image src="../../static/icon6.png"></image>人气推荐</view>
				<text>更多》</text>
			</view>
			<view class="goods-list" v-for="(dataList,index) in datalist" :key="index">
				<image :src="dataList.image"></image>
				<view class="right-view">
					<text class="ax_default">{{dataList.title}}</text>
					<text class="u135">{{dataList.title}}</text>
					<view class="bottom-view">
						<text class="left-btm">￥{{dataList.favourPrice}}</text>
						<text class="right-btn">{{dataList.tip}}</text>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="title">
				<view class="title-left"><image src="../../static/icon6.png"></image>商品列表2</view>
				<text>更多》</text>
			</view>
			<view class="uni-product-list">
				<view class="uni-product" v-for="(product,index) in productList" :key="index" @tap="openproduct" :data-id="1">
					<view class="image-view">
						<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
					</view>
					<view class="uni-product-title">{{product.title}}</view>
					<view class="uni-product-price">
						<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
						<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
						<text class="uni-product-tip">{{product.tip}}</text>
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
				imgUrls: [
					{url:'../../static/banner.jpg'},
					{url:'../../static/banner1.jpg'},
					{url:'../../static/banner2.jpg'},
					{url:'../../static/banner3.jpg'}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				title:"商品列表",
				productList:[],
				renderImage:false,
				datalist:[
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
				        title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
				        originalPrice: 9999,
				        favourPrice: 8888,
				        tip: '自营'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
				        title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
				        originalPrice: 3499,
				        favourPrice: 3399,
				        tip: '优惠'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
				        title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
				        originalPrice: 12999,
				        favourPrice: 10688,
				        tip: '秒杀'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
				        title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
				        originalPrice: 999,
				        favourPrice: 958,
				        tip: '秒杀'
				    }
				]
			}
		},
		onLoad() {
			this.loadData();
		    setTimeout(()=> {
		        this.renderImage = true;
		    }, 300);
		},
		onPullDownRefresh() {
		    this.loadData('refresh');
		    // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
		    setTimeout(() => {
		        uni.stopPullDownRefresh();
		    }, 2000);
		},
		onReachBottom() {
		    this.loadData();
		},
		methods: {
			loadData(action = 'add'){
				 const data = [
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
				         title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
				         originalPrice: 9999,
				         favourPrice: 8888,
				         tip: '自营'
				     },
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
				         title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
				         originalPrice: 3499,
				         favourPrice: 3399,
				         tip: '优惠'
				     },
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
				         title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
				         originalPrice: 12999,
				         favourPrice: 10688,
				         tip: '秒杀'
				     },
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
				         title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
				         originalPrice: 999,
				         favourPrice: 958,
				         tip: '秒杀'
				     },
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
				         title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
				         originalPrice: 8888,
				         favourPrice: 8288,
				         tip: '优惠'
				     },
				     {
				         image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
				         title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
				         originalPrice: 2899,
				         favourPrice: 2799,
				         tip: '自营'
				     }
				 ];
				 if (action === 'refresh') {
				     this.productList = [];
				 }
				 data.forEach(item => {
				     this.productList.push(item);
				 });
			},
			openproduct(e){
				var newsid = e.currentTarget.dataset.id;
				// #ifdef APP-PLUS
					plus.runtime.openURL("https://www.baidu.com/");
				// #endif
				uni.navigateTo({
					url:"../urlLink/urlLink"
				})
			}
		}
	}
</script>

<style>
	uni-image{
		width: 100%;
	}
	.navView{
		width: 100%;
		display:flex;
		padding: 2% 0;
		border-bottom: 1px solid #ccc;
	}
	.nav-item{
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav-item image{
		width: 60upx;
		height: 60upx;
		padding: 2%;
	}
	.msgview{
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.uni-swiper-msg{
		width: 85%;
		margin: 0 auto;
	}
	.uni-swiper-msg-icon{
		padding-top: 3px;
	}
	.title{
		display: flex;
		width: 100%;
		line-height: 2;
		padding: 2% 3%;
		align-items: center;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.title image{
		width: 30px;
		height: 30px;
		padding-right: 2%;
	}
	.title-left{
		width: 50%;
		display: flex;
		align-items: center;
	}
	.title text{
		color: #666;
	}
	.goods-list{
		width: 100%;
		display: flex;
		padding: 2%;
		align-items: center;
	}
	.goods-list image{
		width: 200upx;
		height: 180upx;
		padding: 3%;
		box-sizing: border-box;
	}
	.right-view{
		display: flex;
		width: 70%;
		padding: 0 5%;
		flex-direction: column;
	}
	.ax_default{
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		line-height: 35px;
		font-style: normal;
		letter-spacing: normal;
		color: #333333;
		text-overflow: ellipsis;
		overflow:hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		display: -webkit-box;
	}
	.u135{
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		line-height: 35px;
		font-style: normal;
		letter-spacing: normal;
		text-transform: none;
		color: #666666;
		text-overflow: ellipsis;
		overflow:hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		display: -webkit-box;
	}
	.bottom-view{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3%;
	}
	.left-btm{
		color: #FB0017;
	}
	.right-btn{
		border-width: 0px;
		width: 60px;
		height: 24px;
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(253, 153, 75, 1);
		border-radius: 4px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		text-align: center;
		color: #FD994B;
		line-height: 24px;
	}
	.center{
		height: 20px;
		background-color: #f5f5f5;
	}
	.imgsize{
		width: 100%;
	}
</style>
