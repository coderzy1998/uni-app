<template>
	<view class="img-detail">
		<!-- 用户信息 -->
		<user-info :list="imgDetail"></user-info>
		<!-- 高清大图 -->
		<swiper-action @swiperAction="swiperAction">
			<high-img :list="imgDetail"></high-img>
		</swiper-action>
		<!-- 专辑 -->
		<album-info :list="album"></album-info>
		<!-- 最新评论 -->
		<comment :list="comment"></comment>
		<!-- 下载开始 -->
		<down-load :downloadPath="imgDetail.img"></down-load>
	</view>
</template>

<script>
	import UserInfo from "./childComps/UserInfo.vue";
	import HighImg from "./childComps/HighImg.vue";
	import AlbumInfo from "./childComps/AlbumInfo.vue";
	import Comment from "./childComps/Comment.vue";
	import DownLoad from "./childComps/DownLoad.vue";
	import SwiperAction from "../../components/swiperAction/SwiperAction.vue";
	export default {
		data() {
			return {
				imgDetail: {},
				// 专辑信息
				album: [],
				// 热门评论
				hot: [],
				// 最新评论
				comment: [],
				//当前的索引
				imgIndex: 0
			}
		},
		components: {
			UserInfo,
			HighImg,
			AlbumInfo,
			Comment,
			SwiperAction,
			DownLoad
		},
		methods: {
			getData() {
				const {
					imgList
				} = getApp().globalData;
				this.imgDetail = imgList[this.imgIndex];
				this.getComments(this.imgDetail.id);
			},
			getComments(id) {
				this.request({
					url: `http://157.122.54.189:9088/image/v2/wallpaper/wallpaper/${id}/comment`,
				}).then(res => {
					this.album = res.res.album;
					this.hot = res.res.hot;
					this.comment = res.res.comment;
				})
			},
			swiperAction(e) {
				const {
					imgList
				} = getApp().globalData;
				if(e.direction == 'left' && this.imgIndex<imgList.length-1){
					this.imgIndex++;
					this.getData();
				}else if(e.direction == 'right' && this.imgIndex > 0){
					this.imgIndex--;
					this.getData();
				}else {
					uni.showToast({
						title:"没有数据了",
						icon:'none'
					})
				}
			}
		},
		onLoad() {
			const {imgIndex} = getApp().globalData;
			this.imgIndex = imgIndex;
			this.getData();
		}
	}
</script>

<style scoped lang="scss">

</style>
