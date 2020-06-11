<template>
	<scroll-view class="main" scrollY enable-flex 
	@scrolltolower="handleScrolltolower" 
	@scroll="scroll" 
	:scroll-top="top_num"
	scroll-with-animation 
	v-if="videowp.length">
		<view class="item" v-for="(item,index) in videowp" :key="index" @click="toVideoPlay(item)">
			<image :src="item.img" mode="widthFix" lazyLoad></image>
		</view>
		<uni-icons type="arrowthinup" color="#fff" size="26" class="back-top" @click="toTop" v-if="showBackTop"></uni-icons>
	</scroll-view>
</template>

<script>
	import {
		uniIcons
	} from "@dcloudio/uni-ui";

	import {
		backTopMixin
	} from "@/utils/mixin.js";
	export default {
		components:{
			uniIcons
		},
		props: {
			urlObj: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				videowp: [],
				hasMore: true
			}
		},
		methods: {
			getList() {
				this.request({
					url: this.urlObj.url,
					data: this.urlObj.params
				}).then(res => {
					if (res.res.videowp.length === 0) {
						this.hasMore = false;
						uni.showToast({
							title: "我也是有底线的",
							icon: "none"
						});
						return;
					}
					this.videowp = [...this.videowp, ...res.res.videowp];
				})
			},
			handleScrolltolower() {
				if (this.hasMore) {
					this.urlObj.params.skip += this.urlObj.params.limit;
					this.getList();
				} else {
					uni.showToast({
						title: "我也是有底线的",
						icon: "none"
					})
				}
			},
			toVideoPlay(item) {
				getApp().globalData.video = item;
				uni.navigateTo({
					url: "/pages/videoPlay/VideoPlay",
				})
			}
		},
		watch: {
			urlObj() {
				this.videowp = [];
				this.hasMore = true;
				this.showBackTop=false;
				this.getList();
			}
		},
		mixins: [backTopMixin],
		mounted() {
			this.getList();
		}
	}
</script>

<style scoped lang="scss">
	.main {
		height: calc(100vh - 92rpx);
		display: flex;
		flex-wrap: wrap;

		.item {
			width: 33.33%;
			border: 5rpx solid #FFFFFF;
		}
	}

	.back-top {
		background-color: #307aff;
		padding: 15rpx;
		position: fixed;
		bottom: 30rpx;
		right: 20rpx;
		border-radius: 50%;
	}
</style>
