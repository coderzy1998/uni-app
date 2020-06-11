<template>
	<view class="album-detail">
		<!-- 顶部图片 -->
		<detail-bg :album="album"></detail-bg>
		<!-- 作者信息 -->
		<detail-author :album="album"></detail-author>
		<!-- 图片列表 -->
		<detail-list :list="wallpaper"></detail-list>
	</view>
</template>

<script>
	import DetailBg from "./childComps/DetailBg.vue";
	import DetailAuthor from "./childComps/DetailAuthor.vue";
	import DetailList from "./childComps/DetailList.vue";
	import SwiperAction from "../../components/swiperAction/SwiperAction.vue";
	export default {
		data() {
			return {
				params: {
					limit:"30",
					order:"new",
					skip:0,
					first:1
				},
				id:-1,
				album:{},
				wallpaper:[],
				hasMore:true
			}
		},
		components:{
			DetailBg,
			DetailAuthor,
			DetailList,
			SwiperAction
		},
		methods:{
			getList(){
				this.request({
					url:`http://157.122.54.189:9088/image/v1/wallpaper/album/${this.id}/wallpaper`,
					data:this.params
				}).then(res =>{
					if(Object.keys(this.album).length === 0){
						this.album=res.res.album;
					};
					if(res.res.wallpaper.length === 0){
						this.hasMore=false;
						uni.showToast({
							title:"我也是有底线的",
							icon:"none"
						});
						return;
					}
					this.wallpaper=res.res.wallpaper;
				})
			}
		},
		onLoad(options) {
			// this.id="5d5f8e45e7bce75ae7fb8278";
			this.id=options.id;
			this.getList();
		},
		// 上拉加载下一页
		onReachBottom() {
			if(this.hasMore){
				this.params.skip+=this.params.limit;
				this.params.first=0;
				this.getList();
			}else{
				uni.showToast({
					title:"我也是有底线的",
					icon:"none"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
