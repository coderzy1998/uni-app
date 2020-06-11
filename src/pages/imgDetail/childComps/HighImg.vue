<template>
	<view class="high-img" v-if="Object.keys(list).length > 0">
		<image :src="list.thumb" mode="widthFix"></image>
		<view class="user-rank">
			<view class="rank">
				<text>👍{{list.rank}}</text>
			</view>
			<view class="collect">⭐收藏</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-rank {
		display: flex;
		height: 88rpx;
		border-bottom: 5rpx solid #eee;
	  .rank {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
	    text {
	
	    }
	  }
	
	  .collect {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
	  }
	}
</style>
