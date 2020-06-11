<template>
	<view class="detail-author" v-if="Object.keys(album).length != 0">
		<view class="author-info">
			<image :src="album.user.avatar" mode="widthFix"></image>
			<view class="author-name">{{album.user.name}}</view>
		</view>
		<view class="author-desc">
			<text>{{album.desc}}</text>
		</view>
	</view>
</template>

<script>
	export default{
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
	.detail-author {
		padding: 10rpx;
	  .author-info {
			padding: 10rpx 0;
			display: flex;
	    image {
				width: 50rpx;
	    }
	
	    .author-name {
				color: #000;
				margin-left: 20rpx;
	    }
	  }
	
	  .author-desc {
	    text {
	
	    }
	  }
	}
</style>
