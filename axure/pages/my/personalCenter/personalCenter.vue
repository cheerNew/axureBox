<template>
	<view class="page">
		<view class="topBox">
			<view class="topLeft"><image src="../../../static/u2943.svg"></image></view>
			<view class="topCenter">
				<text class="userName">Cheer</text>
			</view>
		</view>
		<view class="listBox">
			<uni-list>
				<uni-list-item title="个人信息"></uni-list-item>
				<uni-list-item title="修改密码"></uni-list-item>
				<view class="listItem">
					<view class="left-item">
						<text class="centerItem">修改手机</text>
					</view>
					<view class="right-item">
						<text class="fontSize">187*****980</text>
						<text class="uni-icon uni-icon-arrowright" style="color: rgb(187, 187, 187); font-size: 40upx;"></text>
					</view>
				</view>
			</uni-list>
		</view>
		<view class="listBox">
			<uni-list>
				<view class="listItem">
					<view class="left-item">
						<text class="centerItem">我的会员</text>
					</view>
					<view class="right-item">
						<text class="fontSize">普通会员</text>
						<text class="uni-icon uni-icon-arrowright" style="color: rgb(187, 187, 187); font-size: 40upx;"></text>
					</view>
				</view>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default{
		components: {
			uniList,
			uniListItem
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
	.topBox{
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #fff;
		color: #333;
		padding: 6% 2%;
	}
	.topLeft{
		width: 35%;
		text-align: right;
		padding-right: 4%;
	}
	.topLeft image{
		width: 160upx;
		height: 160upx;
	}
	.topCenter{
		width: 45%;
		display: flex;
		flex-direction: column;
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
	.listBox{
		margin-top: 5%;
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
		width: 100%;
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
