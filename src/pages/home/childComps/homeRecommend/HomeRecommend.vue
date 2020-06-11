<template>
	<scroll-view class="home-recommend" scroll-y @scrolltolower="handleToLower" enable-flex @scroll="scroll" :scroll-top="top_num"
	 scroll-with-animation>
		<!-- 推荐开始 -->
		<recommend-wrap :recommend="recommend"></recommend-wrap>
		<!-- 月份开始 -->
		<recommend-month :monthes="monthes"></recommend-month>
		<!-- 热门 -->
		<recommend-hot :hots="hots"></recommend-hot>
		<uni-icons type="arrowthinup" color="#fff" size="26" class="back-top" @click="toTop" v-if="showBackTop"></uni-icons>
	</scroll-view>
</template>

<script>
	import RecommendWrap from './childComps/RecommendWrap.vue';
	import RecommendMonth from './childComps/RecommendMonth.vue';
	import RecommendHot from './childComps/RecommendHot.vue';
	import {
		uniIcons
	} from "@dcloudio/uni-ui";

	import {
		backTopMixin
	} from "@/utils/mixin.js";

	import moment from 'moment';
	export default {
		components: {
			RecommendWrap,
			RecommendMonth,
			RecommendHot,
			uniIcons
		},
		data() {
			return {
				//推荐的数据
				recommend: [],
				//月份的数据
				monthes: {},
				//热门的数据
				hots: [],
				params: {
					// 获取多少条
					limit: "30",
					// 关键字
					order: "hot",
					// 跳过多少
					skip: 0
				},
				// 判断还有没有数据
				hasMore: true,

			}
		},
		//修改页面标题
		mounted() {
			this.getList()
		},
		methods: {
			//获取数据
			getList() {
				this.request({
					url: "http://157.122.54.189:9088/image/v3/homepage/vertical",
					data: this.params
				}).then(res => {
					// 第一次请求数据
					if (this.recommend.length == 0) {
						// 推荐的数据
						this.recommend = res.res.homepage[1].items;
						// 月份数据
						this.monthes = res.res.homepage[2];
						// 格式化时间
						this.monthes.MM = moment(this.monthes.stime).format("MM");
						this.monthes.DD = moment(this.monthes.stime).format("DD");
					}
					// 判断还有没有数据
					if (res.res.vertical.length == 0) {
						this.hasMore = false;
						uni.showToast({
							title: "没有更多了",
							icon: "none"
						});
						return;
					}
					//热门的数据
					this.hots = [...this.hots, ...res.res.vertical];
				})
			},
			//下拉加载更多
			handleToLower() {
				if (this.hasMore) {
					this.params.skip += this.params.limit;
					this.getList();
				} else {
					uni.showToast({
						title: "没有更多了",
						icon: "none"
					})
				}
			},

		},
		mixins: [backTopMixin]
	}
</script>

<style lang="scss" scoped>
	.home-recommend {
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
