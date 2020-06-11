<template>
	<swiper class="home-swiper" :current="current" @change="swiperChange" circular duration="200">
		<swiper-item>
			<home-recommend></home-recommend>
		</swiper-item>
		<swiper-item>
			<home-category></home-category>
		</swiper-item>
		<swiper-item>
			<home-new></home-new>
		</swiper-item>
		<swiper-item>
			<home-album></home-album>
		</swiper-item>
	</swiper>
</template>

<script>
	import HomeRecommend from "./homeRecommend/HomeRecommend.vue";
	import HomeCategory from "./homeCategory/HomeCategory.vue";
	import HomeNew from "./homeNew/HomeNew.vue";
	import HomeAlbum from "./homeAlbum/HomeAlbum.vue";

	export default {
		props: {
			current: {
				type: Number,
				default: 0
			}
		},
		components: {
			HomeRecommend,
			HomeCategory,
			HomeNew,
			HomeAlbum,
		},
		methods: {
			swiperChange(event) {
				this.$emit("currentChange", event.detail.current);
			}
		},
		watch: {
			current(newValue) {
				switch (newValue) {
					case 0:
						uni.setNavigationBarTitle({
							title: "推荐"
						});
						break;
					case 1:
						uni.setNavigationBarTitle({
							title: "分类"
						});
						break;
					case 2:
						uni.setNavigationBarTitle({
							title: "最新"
						});
						break;
					case 3:
						uni.setNavigationBarTitle({
							title: "专辑"
						});
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-swiper {
		height: calc(100vh - 92rpx);
	}
</style>
