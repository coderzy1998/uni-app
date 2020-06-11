<template>
	<view class="download">
		<view class="download-btn" @click="handleDownload">下载图片</view>
	</view>
</template>

<script>
	export default {
		props: {
			downloadPath: {
				type: String,
				default: ''
			}
		},
		methods: {
			// 点击下载
			async handleDownload() {
				await uni.showLoading({
					title: "下载中"
				});
				// 1.先将图片暂存到微信的临时地址
				// uni.downloadFile({})
				const res1 = await uni.downloadFile({
					url: this.downloadPath
				});
				// 2.将暂存的图片保存到本地
				// uni.saveImageToPhotosAlbum({})
				const res2 = await uni.saveImageToPhotosAlbum({
					filePath: res1[1].tempFilePath
				});
				uni.hideLoading();
				await uni.showToast({
					title: "下载成功",
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.download {
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.download-btn {
			height: 80%;
			width: 95%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			font-size: 50rpx;
			color: #FFFFFF;
			background-color: $color;
		}
	}
</style>
