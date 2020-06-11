<template>
	<view class="album-bg" v-if="Object.keys(album).length != 0">
		<image :src="album.cover" mode="widthFix"></image>
		<view class="detail-info">
			<view class="info-name">{{album.name}}</view>
			<view class="info-btn">关注专辑</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			album:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.album-bg{
		position: relative;
		image{
			
		}
		.detail-info{
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			height: 80rpx;
			align-items: center;
			color: #fff;
			padding: 0 20rpx;
			.info-name{
				font-size: 40rpx;
			}
			.info-btn{
				background-color: $color;
				width: 152rpx;
				height: 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 10rpx;
			}
		}
	}
</style>
