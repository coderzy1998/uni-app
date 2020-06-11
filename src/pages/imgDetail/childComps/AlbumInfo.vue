<template>
	<view class="album-info" v-if="list.length > 0">
		<view class="album-title">相关</view>
		<view class="album-item" v-for="(item,index) in list" :key="index">
			<view class="album-left">
				<image :src="item.cover" mode="aspectFill"></image>
			</view>
			<view class="album-right">
				<view class="album">专辑</view>
				<view class="album-name">{{item.name}}</view>
				<view class="album-icon">></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.album-info {
	margin: 20rpx;
	padding: 10rpx 0;
	border-bottom: 10rpx solid #eee;
  .album-title {
		padding: 10rpx 0;
  }

  .album-item {
		display: flex;
		margin-top: 10rpx;
    .album-left {
			flex: 1;
      image {
				width: 190rpx;
				height: 190rpx;
      }
    }

    .album-right {
			flex: 3;
			margin-left: 20rpx;
			position: relative;
      .album {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100rpx;
				height: 50rpx;
				background-color: $color;
				color: #fff;
      }

      .album-name {
				margin-top: 10rpx;
      }

      .album-icon {
				position: absolute;
				top: 50%;
				right: 10%;
				transform: translateY(-50%);
				font-size: 50rpx;
      }
    }
  }
}
</style>
