<template>
	<view class="recommend-wrap" v-if="recommend.length">
		<view class="recommend-item" v-for="(item,index) in recommend" :key="index" @click="itemClick(item.target)">
			<image :src="item.thumb" mode="widthFix" lazyLoad></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			itemClick(id){
				uni.navigateTo({
					url:`/pages/albumDetail/albumDetail?id=${id}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recommend-wrap {
		display: flex;
		flex-wrap: wrap;
	
		.recommend-item {
			width: 50%;
			border: 5rpx solid #fff;
		}
	}
</style>
