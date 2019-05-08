<template>
	<view class="page">
		<view class="topBox">
			<view class="topLeft"><image src="../../static/u208.svg"></image></view>
			<view class="topCenter">
				<text class="userName">Cheer</text>
				<text class="grade">黄金会员</text>
			</view>
			<view class="topRight">
				<navigator url="personalCenter/personalCenter">
					<image src="../../static/u211.svg"></image>
				</navigator>
			</view>
		</view>
		<view class="uni-flex uni-row padding-height">
			<view class="flex-item">
				<text>积分</text>
				<text class="green">100</text>
			</view>
			<view class="flex-item">
				<text>优惠券</text>
				<text class="green">100</text>
			</view>
			<view class="flex-item">
				<text>关注</text>
				<text class="green">100</text>
			</view>
		</view>
		<view class="uni-flex uni-row padding-height1">
			<view class="flex-item1">
				<image src="../../static/u227.svg"></image>
				<text>我的订单</text>
			</view>
			<view class="flex-item1">
				<image src="../../static/fukuan.png"></image>
				<text>待付款</text>
			</view>
			<view class="flex-item1">
				<image src="../../static/shouhuo.png"></image>
				<text>待收货</text>
			</view>
			<view class="flex-item1">
				<image src="../../static/pingjia.png"></image>
				<text>待评价</text>
			</view>
			<view class="flex-item1">
				<image src="../../static/fuwu.png"></image>
				<text>售后服务</text>
			</view>
		</view>
		<view class="uni-flex uni-row padding-height2">
			<view class="flex-item2">
				<image src="../../static/u262.svg"></image>
				<text>我的订单</text>
			</view>
			<view class="flex-item2">
				<image src="../../static/fukuan.png"></image>
				<text>商品</text>
			</view>
			<view class="flex-item2">
				<image src="../../static/shouhuo.png"></image>
				<text>专题</text>
			</view>
			<view class="flex-item2">
				<image src="../../static/pingjia.png"></image>
				<text>话题</text>
			</view>
		</view>
		<view class="listBox">
			<uni-list>
				<view class="listItem">
					<view class="left-item">
						<image src="../../static/u282.svg"></image>
						<text class="centerItem">我的足迹</text>
					</view>
					<view class="right-item">
						<text class="fontSize">10</text>
						<text class="uni-icon uni-icon-arrowright" style="color: rgb(187, 187, 187); font-size: 40upx;"></text>
					</view>
				</view>
				<view class="listItem">
					<view class="left-item">
						<image src="../../static/u293.svg"></image>
						<text class="centerItem">我的评价</text>
					</view>
					<view class="right-item">
						<text class="fontSize">10</text>
						<text class="uni-icon uni-icon-arrowright" style="color: rgb(187, 187, 187); font-size: 40upx;"></text>
					</view>
				</view>
				<navigator url="managementUrl/managementUrl">
					<uni-list-item title="地址管理" thumb="../../static/u298.svg"></uni-list-item>
				</navigator>
				<navigator url="shoppingCart/shoppingCart">
					<uni-list-item title="购物车" thumb="../../static/u298.svg"></uni-list-item>
				</navigator>
				<navigator url="md-editor/md-editor">
					<uni-list-item title="富文本编辑器" thumb="../../static/u298.svg"></uni-list-item>
				</navigator>
				<uni-collapse>
					<uni-collapse-item thumb="../../static/u298.svg" :show-animation="true" title="内置接口">
						<navigator url="get-system-info/get-system-info">
							<view style="padding: 30upx;">
								获取手机系统信息
							</view>
						</navigator>
						<navigator url="make-phone-call/make-phone-call">
							<view style="padding: 30upx;">
								打电话
							</view>
						</navigator>
						<navigator url="upload-file/upload-file">
							<view style="padding: 30upx;">
								上传文件
							</view>
						</navigator>
						<navigator url="choose-location/choose-location">
							<view style="padding: 30upx;">
								使用地图选择位置
							</view>
						</navigator>
						<navigator url="datachecker/datachecker">
							<view style="padding: 30upx;">
								表单验证
							</view>
						</navigator>
						<navigator url="qrcode/qrcode">
							<view style="padding: 30upx;">
								二维码生成
							</view>
						</navigator>
						<navigator url="image/image">
							<view style="padding: 30upx;">
								图片
							</view>
						</navigator>
					</uni-collapse-item>
				</uni-collapse>
			</uni-list>
		</view>
		<view class="listBox">
			<uni-list>
				<view class="listItem">
					<view class="left-item">
						<image src="../../static/u305.svg"></image>
						<text class="centerItem">我的会员</text>
					</view>
					<view class="right-item">
						<text class="fontSize">黄金会员</text>
						<text class="uni-icon uni-icon-arrowright" style="color: rgb(187, 187, 187); font-size: 40upx;"></text>
					</view>
				</view>
				<uni-list-item title="服务中心" thumb="../../static/u313.svg"></uni-list-item>
				<navigator url="systemSetup/systemSetup">
					<uni-list-item title="系统设置" thumb="../../static/u318.svg"></uni-list-item>
				</navigator>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		components: {
			uniList,
			uniListItem,
			uniCollapse,
			uniCollapseItem
		},
	}
</script>

<style>
	.page{
		background-color: #EEEEEE;
		padding-bottom:12%
	}
	uni-page-body{
		height: 100%;
		background-color: #EEEEEE;
	}
	navigator{
		width: 100%;
	}
	.topBox{
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #3F4552;
		color: #fff;
		padding: 9% 2%;
	}
	.topLeft{
		width: 35%;
		text-align: right;
		padding-right: 4%;
	}
	.topLeft image{
		width: 180upx;
		height: 180upx;
	}
	.topCenter{
		width: 45%;
		display: flex;
		flex-direction: column;
	}
	.topRight{
		width: 20%;
		text-align: right;
		padding-right: 4%;
	}
	.topRight image{
		width: 30upx;
		height: 50upx;
	}
	uni-view{
		line-height: 1.5;
	}
	.userName{
		text-overflow: ellipsis;
		overflow:hidden;
		line-height: 2;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		font-size: 18px;
	}
	.grade{
		border: 1px solid #fff;
		border-radius: 10upx;
		width: 140upx;
		text-align: center;
		font-size: 13px;
		height: 40upx;
		line-height: 40upx;
	}
	.flex-item {
		width: 33.3%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.green{
		color: #2AB795;
		line-height: 1.8;
		font-weight: 600;
		font-size: 33upx;
	}
	.padding-height{
		padding: 3% 0;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.padding-height1{
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		background-color: #fff;
		margin-top: 5%;
	}
	.padding-height2{
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.flex-item1,.flex-item2{
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 2.5;
		padding: 3% 0 0 0;
	}
	.flex-item1 image{
		width: 48upx;
		height: 52upx;
	}
	.flex-item2{
		width: 25%;
	}
	.flex-item2 image{
		width: 48upx;
		height: 52upx;
	}
	.listBox{
		margin-top: 3%;
		margin-bottom: 3%;
	}
	.listItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx 30upx;
		position: relative;
	}
	.left-item{
		display: flex;
		align-items: center;
	}
	.left-item image{
		width: 52upx;
		height: 52upx;
		margin-right: 18upx;
	}
	.left-item text{
		font-size: 16px;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
	}
	.listItem:after{
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		-ms-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.fontSize{
		color: #666666;
	}
	.right-item{
		display: flex;
		align-items: center;
	}
</style>
