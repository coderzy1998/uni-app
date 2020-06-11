<template>
	<view class="new" v-if="newList.length > 0">
		<view class="new-item" v-for="(item,index) in newList" :key="index">
			<image :src="item.thumb" mode="widthFix" lazyLoad></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			newList:{
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
	.new{
		display: flex;
		flex-wrap: wrap;
		.new-item{
			width: 33.33%;
			border: 5rpx solid #FFFFFF;
		}
	}
</style>
