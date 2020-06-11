<template>
	<view class="album-swiper" v-if="banner.length">
		<!-- indicator-dot:显示指示点
		autoplay：自动滚动
		interval：自动切换时长
		circular：是否衔接 -->
		<swiper indicator-dots autoplay :interval="3000" circular>
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image :src="item.thumb" lazyLoad></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.album-swiper{
		swiper{
			height: calc(750rpx / 2.3);
		}
		image{
			height: 100%;
		}
	}
</style>
