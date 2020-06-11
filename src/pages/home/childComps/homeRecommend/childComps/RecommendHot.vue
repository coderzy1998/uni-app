<template>
	<view class="hots-wrap" v-if="hots.length">
		<view class="hots-title">
			<text>热门</text>
		</view>
		<view class="hots-content">
			<view class="content-items" v-for="(item,index) in hots" :key="index">
				<go-detail :list="hots" :index="index">
					<image mode="widthFix" :src="item.thumb" lazyLoad></image>
				</go-detail>
			</view>
		</view>
	</view>
</template>

<script>
	import GoDetail from "@/components/goDetail/GoDetail.vue";
	export default {
		props: {
			hots: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {
			GoDetail
		}
	}
</script>

<style lang="scss" scoped>
	.hots-wrap {
		.hots-title {
			padding: 20rpx;

			text {
				border-left: 16rpx solid $color;
				padding-left: 20rpx;
				font-size: 34rpx;
				font-weight: 600;
			}
		}

		.hots-content {
			display: flex;
			flex-wrap: wrap;

			.content-items {
				width: 33.33%;
				border: 5rpx solid #fff;
			}
		}
	}
</style>
