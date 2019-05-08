<template>
	<view class="page">
		<radio-group @change="radioChange">
			<view class="yt-box" v-for="(item, index) in items" :key="item.value">
				<view class="yt-main">
					<text class="yt-name">{{item.name}}</text>
					<text>{{item.phone}}</text>
				</view>
				<view class="yt-color">{{item.url}}</view>
				<view class="yt-nav">
					<view class="yt-nav-left">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>设为默认</view>
					</view>
					<view class="yt-nav-right">
						<image @click="clickurl" src="../../../static/u2603.svg"></image>
						<text @click="clickurl">编辑</text>
						<image src="../../../static/u2607.svg"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</radio-group>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items: [{
						value: 'cheer1',
						name: 'cheer1',
						phone:'18798808980',
						url:"广东省深圳市南山区科兴科学园",
						checked: 'true',
						id:'1'
					},
					{
						value: 'cheer2',
						name: 'cheer2',
						url:"广东省深圳市南山区科兴科学园",
						phone:'18798808980',
						id:'2'
					},
					{
						value: 'cheer3',
						name: 'cheer3',
						url:"广东省深圳市南山区科兴科学园",
						phone:'18798808980',
						id:'3'
					},
					{
						value: 'cheer4',
						name: 'cheer4',
						url:"广东省深圳市南山区科兴科学园",
						phone:'18798808980',
						id:'4'
					},
					{
						value: 'cheer5',
						name: 'cheer5',
						url:"广东省深圳市南山区科兴科学园",
						phone:'18798808980',
						id:'5'
					},
					{
						value: 'cheer6',
						name: 'cheer6',
						url:"广东省深圳市南山区科兴科学园",
						phone:'18798808980',
						id:'6'
					},
				],
				current: 0
			}
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			clickurl(){
				uni.navigateTo({
					url: '../addmanagementUrl/addmanagementUrl',
				});
			}
		}
	}
</script>

<style>
	.page{
		background-color: #EEEEEE;
		padding-bottom:3%
	}
	uni-page-body{
		height: 100%;
		background-color: #EEEEEE;
	}
	.yt-box{
		background-color: #fff;
		position: relative;
		width: 95%;
		display: flex;
		flex-direction: column;
		border-top:1px solid #ccc;
		color: #333;
		margin: 0 auto 5% auto;
		border-radius: 20upx;
	}
	.yt-main{
		display: flex;
		font-size: 36upx;
		text-overflow: ellipsis;
		overflow:hidden;
		line-height: 2;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		padding: 2%;
		justify-content: space-between;
	}
	.yt-name{
		padding: 0 2%;
	}
	.yt-defult{
		margin-left: 13%;
		border: 1px solid #FD994B;
		color: #FD994B;
		font-size: 28upx;
		border-radius: 10upx;
		line-height: 1.5;
		padding: 0 3%;
	}
	.yt-color{
		color: #666;
		padding: 0 2% 4% 4%;
		border-bottom: 1px solid #ccc;
	}
	.yt-nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3%;
		border-bottom: 1px solid #ccc;
	}
	.yt-nav-left{
		width: 40%;
		display: flex;
		align-items: center;
	}
	.yt-nav-right{
		width:45%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.yt-nav-right image{
		width: 46upx;
		height: 44upx;
	}
	.yt-nav-right text{
		color: #666;
	}
	radio .uni-radio-input-checked{
		background-color: #2AB795;
		border-color: #2AB795;
	}
</style>
