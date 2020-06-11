<template>
	<scroll-view class="album" scroll-y @scrolltolower="handleTolower" @scroll="scroll" :scroll-top="top_num"
	 scroll-with-animation>
		<!-- 专辑轮播图 -->
		<album-swiper :banner="banner"></album-swiper>
		<!-- 专辑列表 -->
		<album-list :list="album"></album-list>
		<uni-icons type="arrowthinup" color="#fff" size="26" class="back-top" @click="toTop" v-if="showBackTop"></uni-icons>
	</scroll-view>
</template>

<script>
	import AlbumSwiper from './childComps/AlbumSwiper.vue';
	import AlbumList from './childComps/AlbumList.vue';
	import {
		uniIcons
	} from "@dcloudio/uni-ui";
	import {
		backTopMixin
	} from "@/utils/mixin.js";
	export default {
		data() {
			return {
				params: {
					limit: 30,
					order: "new",
					skip: 0
				},
				//轮播图数据
				banner: [],
				// 专辑数据
				album: [],
				hasMore: true
			}
		},
		components: {
			AlbumSwiper,
			AlbumList,
			uniIcons
		},
		methods: {
			getList() {
				this.request({
					url: "http://157.122.54.189:9088/image/v1/wallpaper/album",
					data: this.params
				}).then(res => {
					if (this.banner.length === 0) {
						this.banner = res.res.banner;
					}
					if (res.res.album.length === 0) {
						this.hasMore = false;
						uni.showToast({
							title: "没有更多了",
							icon: "none"
						});
						return;
					}
					this.album = [...this.album, ...res.res.album];
				})
			},
			handleTolower() {
				if (this.hasMore) {
					this.params.skip += this.params.limit;
					this.getList();
				} else {
					uni.showToast({
						title: "没有更多了",
						icon: "none"
					})
				}
			}
		},
		//修改页面标题
		mounted() {
			this.getList();
		},
		mixins: [backTopMixin]
	}
</script>

<style lang="scss" scoped>
	.album {
		height: calc(100vh - 92rpx);
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
