<template>
  <view class="comment" v-if="list.length > 0">
		<view class="comment-title">✨最新评论</view>
		<view class="comment-item" v-for="(item,index) in list" :key="index">
			<view class="comment-user">
				<view class="user-avatar">
					<image :src="item.user.avatar" mode="aspectFill" lazyLoad></image>
				</view>
				<view class="user-info">
					<view class="user-name">{{item.user.name}}</view>
					<view class="ctime">{{item.atime | cTime}}</view>
				</view>
			</view>
			<view class="comment-info">
				<view class="comment-content">{{item.content}}</view>
				<view class="size">👍{{item.size}}</view>
			</view>
		</view>
	</view>
</template>

<script>
import moment from "moment";
export default {
	props:{
		list:{
			type:Array,
			default (){
				return []
			}
		},
	},
	computed:{
		
	},
	filters:{
		cTime(time){
			return moment(time * 1000).fromNow();
		}
	}
}
</script>

<style lang="scss" scoped>
.comment {
  .comment-title {
    font-size: 30rpx;
    font-weight: 600;
    padding: 20rpx 10rpx;
  }

  .comment-item {
    padding: 10rpx;
    border-bottom: 10rpx solid #eee;
    .comment-user {
      display: flex;

      .user-avatar {
        width: 15%;
        image {
          width: 110rpx;
          height: 110rpx;
        }
      }

      .user-info {
        flex: 1;
        padding-left: 10rpx;
        .user-name {

        }

        .ctime {
          font-size: 24rpx;
          color: #ccc;
          margin-top: 10rpx;
        }
      }
    }

    .comment-info {
      display: flex;
      margin-left: 17%;
      padding: 20rpx 0;
      justify-content: space-between;
      .comment-content {
        color: #000;
      }

      .size {
        
      }
    }
  }
}
</style>