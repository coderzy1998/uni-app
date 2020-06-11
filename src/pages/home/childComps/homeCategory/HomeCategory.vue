<template>
	<scroll-view scroll-y enable-flex class="home-category">
		<view class="category-item" v-for="(item,index) in category" :key="index" @click="itemClick(item.id)">
			<image :src="item.cover" mode="aspectFill" lazyLoad></image>
			<view class="category-name">{{item.rname}}</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				category: []
			}
		},
		methods: {
			itemClick(id) {
				uni.navigateTo({
					url: `/pages/imgCategory/ImgCategory?id=${id}`,
				})
			}
		},
		mounted() {
			this.request({
				url: "http://157.122.54.189:9088/image/v1/vertical/category"
			}).then(res => {
				this.category = res.res.category;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.home-category {
		display: flex;
		flex-wrap: wrap;
		height: calc(100vh - 92rpx);

		.category-item {
			width: 33.33%;
			border: 5rpx solid #fff;
			position: relative;

			image {
				height: 240rpx;
			}

			.category-name {
				position: absolute;
				display: flex;
				align-items: center;
				width: 100%;
				height: 50rpx;
				bottom: 0;
				left: 0;
				color: #FFFFFF;
				// css3渐变色
				background-image: linear-gradient(to right top, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
				font-size: 40rpx;
				padding-left: 20rpx;
			}
		}
	}
</style>
