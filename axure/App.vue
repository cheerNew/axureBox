<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	view{
		box-sizing: border-box;
	}
	.uni-page-head-btn-red-dot:after{
		right: 5px;
		top: 4px;
	}
</style>
