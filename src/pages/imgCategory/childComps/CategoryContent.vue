<template>
	<swiper :current="current" circular @change="currentChange">
		<swiper-item>
			<scroll-view class="content" scrollY @scrolltolower="scrolltolower" @scroll="scroll" :scroll-top="top_num"
			 scroll-with-animation>
				<new-category :newList="vertical"></new-category>
				<uni-icons type="arrowthinup" color="#fff" size="26" class="back-top" @click="toTop" v-if="showBackTop"></uni-icons>
			</scroll-view>
		</swiper-item>
		<swiper-item>
			<scroll-view class="content" scrollY @scrolltolower="scrolltolower" @scroll="scroll" :scroll-top="top_num"
			 scroll-with-animation>
				<hot-category :hotList="vertical"></hot-category>
				<uni-icons type="arrowthinup" color="#fff" size="26" class="back-top" @click="toTop" v-if="showBackTop"></uni-icons>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
	import newCategory from "./newCategory/NewCategory.vue";
	import hotCategory from "./hotCategory/HotCategory.vue";
	import {
		uniIcons
	} from "@dcloudio/uni-ui";

	import {
		backTopMixin
	} from "@/utils/mixin.js";
	export default {
		components: {
			newCategory,
			hotCategory,
			uniIcons
		},
		data() {
			return {
				vertical: [],
				params: {
					limit: 30,
					skip: 0,
					order: 'new'
				},
				hasMore: true
			}
		},
		props: {
			current: {
				type: Number,
				default: 0
			},
			cid: {
				type: String,
				default: ''
			}
		},
		methods: {
			getList() {
				this.request({
					url: `http://157.122.54.189:9088/image/v1/vertical/category/${this.cid}/vertical`,
					data: this.params
				}).then(res => {
					if (res.res.vertical.length === 0) {
						this.hasMore = false;
						uni.showToast({
							title: "我也是有底线的！",
							icon: "none"
						});
						return;
					}
					this.vertical = [...this.vertical, ...res.res.vertical];
				})
			},
			scrolltolower() {
				if (this.hasMore) {
					this.params.skip += this.params.limit;
					this.getList();
				} else {
					uni.showToast({
						title: "我也是有底线的！",
						icon: "none"
					})
				}
			},
			currentChange(e) {
				this.$emit("currentChange", e.detail.current);
			}
		},
		watch: {
			current(newCurrent) {
				if (newCurrent == 0) {
					this.params.order = "new";
					this.params.skip = 0;
					this.vertical = [];
					this.hasMore = true;
					this.getList();
				} else if (newCurrent == 1) {
					this.params.order = "hot";
					this.params.skip = 0;
					this.vertical = [];
					this.hasMore = true;
					this.getList();
				}
			}
		},
		mixins: [backTopMixin],
		mounted() {
			if (this.cid != '') {
				this.getList('new');
			}
		}
	}
</script>

<style scoped lang="scss">
	swiper {
		height: calc(100vh - 92rpx);
	}

	.content {
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
