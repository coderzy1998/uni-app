<template>
	<view class="user-info" v-if="list.user.name">
		<view class="user-avatar">
			<image :src="list.user.avatar" mode="widthFix"></image>
		</view>
		<view class="info">
			<view class="user-name">{{list.user.name}}</view>
			<view class="user-time">{{time}}</view>
		</view>
	</view>
</template>

<script>
	import moment from "moment";
	// 设置语言
	moment.locale("zh-cn");
	export default {
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			time(){
				// 时间格式化:xxx年前
				return moment(this.list.atime * 1000).fromNow();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-info {
		display: flex;
		padding: 20rpx;
	  .user-avatar {
			padding: 0 20rpx;
	    image {
				width: 88rpx;
				border-radius: 50%;
	    }
	  }
	
	  .info {
	    .user-name {
				color: #000;
				font-weight: 600;
				
	    }
	
	    .user-time {
				font-size: 24rpx;
				color: #ccc;
				padding: 10rpx 0;
	    }
	  }
	}
</style>
