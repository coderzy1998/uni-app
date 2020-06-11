<template>
	<view class="album-list" v-if="list.length != 0">
		<view class="album-item" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
			<view class="album-image">
				<image :src="item.cover" mode="aspectFill" lazyLoad></image>
			</view>
			<view class="album-info">
				<view class="info-title">{{item.name}}</view>
				<view class="info-desc">{{item.desc}}</view>
				<view class="info-btn">
					<view class="info-attention">+ 关注</view>
				</view>
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
		},
		methods:{
			toDetail(id){
				uni.navigateTo({
					url:`/pages/albumDetail/albumDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.album-list{
		padding: 10rpx;
		.album-item{
			display: flex;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #ccc;
			.album-image{
				flex: 1;
				image{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.album-info{
				flex: 2;
				overflow: hidden;
				padding: 0 20rpx;
				.info-title{
					font-size: 28rpx;
					color: #000;
				}
				.info-desc{
					font-size: 24rpx;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					padding: 10rpx 0;
				}
				.info-btn{
					display: flex;
					justify-content: flex-end;
					padding: 10rpx 0;
					.info-attention{
						padding: 10rpx;
						border: 1rpx solid $color;
						color: $color;
					}
				}
			}
		}
	}
</style>
