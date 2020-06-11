<template>
	<view class="hot" v-if="hotList.length > 0">
		<view class="hot-item" v-for="(item,index) in hotList" :key="index">
			<image :src="item.thumb" mode="widthFix" lazyLoad></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			hotList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
	.hot{
		display: flex;
		flex-wrap: wrap;
		.hot-item{
			width: 33.33%;
			border: 5rpx solid #FFFFFF;
		}
	}
</style>
