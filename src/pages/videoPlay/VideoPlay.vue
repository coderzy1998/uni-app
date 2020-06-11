<template>
	<view class="video-play">
		<image :src="videoObj.img" mode=""></image>
		<view class="video-icon">
			<uni-icons type="sound" color="white" size="26" class="icon" @click="handleMuted"></uni-icons>
			<uni-icons type="redo" color="white" size="26" class="icon">
				<button open-type="share"></button>
			</uni-icons>
		</view>
		<view class="video-warp">
			<video :src="videoObj.video" objectFit="fill" :muted="muted"></video>
		</view>
		<view class="downlaod">
			<view class="download-icon" @click="handleDownload">下载视频</view>
		</view>
	</view>
</template>

<script>
	import {
		uniIcons
	} from "@dcloudio/uni-ui";
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				videoObj: {},
				muted: false
			}
		},
		methods: {
			handleMuted() {
				this.muted = !this.muted;
			},
			async handleDownload() {
				await uni.showLoading({
					title: "下载中"
				});
				const {
					tempFilePath
				} = (await uni.downloadFile({
					url: this.videoObj.video
				}))[1];
				await uni.saveVideoToPhotosAlbum({
					filePath: tempFilePath
				});
				uni.hideLoading();
				await uni.showToast({
					title: "下载成功！"
				});
			}
		},
		onLoad() {
			this.videoObj = getApp().globalData.video;
		}
	}
</script>

<style lang="scss" scoped>
	.video-play {
		position: relative;

		image {
			position: absolute;
			width: 100vh;
			height: 100vh;
			z-index: -1;
			// css3滤镜
			filter: blur(20px);
		}

		.video-icon {
			display: flex;
			justify-content: flex-end;

			.icon {
				padding: 20rpx;
				margin-right: 20rpx;
				margin-top: 20rpx;
				background-color: rgba(0, 0, 0, .6);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;

				button {
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0;
				}
			}
		}

		.video-warp {
			display: flex;
			height: 70vh;
			justify-content: center;
			align-items: center;

			video {
				width: 360rpx;
				height: 600rpx;
			}
		}

		.downlaod {
			display: flex;
			justify-content: center;

			.download-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 360rpx;
				height: 80rpx;
				border-radius: 40rpx;
				color: #fff;
				border: 3rpx solid #fff;
				background-color: rgba(0, 0, 0, .6);

				.icon {}
			}
		}
	}
</style>
