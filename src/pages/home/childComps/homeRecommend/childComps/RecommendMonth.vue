<template>
	<view class="month-warp" v-if="Object.keys(monthes).length>0">
		<view class="month-title">
			<view class="month-title-info">
				<view class="month-info">
					<text>{{monthes.DD}}</text>/{{monthes.MM}} 月
				</view>
				<view class="month-text">{{monthes.title}}</view>
			</view>
			<view class="month-title-more">更多 > </view>
		</view>
		<view class="month-content">
			<view class="month-items" v-for="(i,index) in monthes.items" :key="i.id">
				<go-detail :list="monthes.items" :index="index">
					<image :src="i.thumb+i.rule.replace('$<Height>',360)" mode="aspectFill" lazyLoad></image>
				</go-detail>
			</view>
		</view>
	</view>
</template>

<script>
	import GoDetail from "@/components/goDetail/GoDetail.vue";
	export default{
		props:{
			monthes:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		components:{
			GoDetail
		}
	}
</script>

<style lang="scss" scoped>
	.month-warp{
		.month-title{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			.month-title-info{
				display: flex;
				color: $color;
				font-size: 30rpx;
				font-weight: 600;
				.month-info{
					text{
						font-size: 36rpx;
					}
				}
				.month-text{
					color: #666;
					font-size: 34rpx;
					margin-left: 30rpx;
				}
			}
			.month-title-more{
				font-size: 24rpx;
				color: $color;
			}
		}
		.month-content{
			display: flex;
			flex-wrap: wrap;
			.month-items{
				width: 33.33%;
				border: 5rpx solid #fff;
			}
		}
	}
</style>
