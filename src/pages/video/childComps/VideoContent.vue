<template>
	<view class="content">
		<swiper circular :current="current" @change="currentChange" duration="200">
			<swiper-item v-for="(item,index) in items" :key="index">
				<video-main :urlObj="{url:items[current].url,params:items[current].params}" v-if="index < 4"></video-main>
				<video-category v-if="index == 4"></video-category>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import VideoCategory from "./videoCategory/VideoCategory.vue";
	import VideoMain from "./videoMain/VideoMain.vue";
	export default {
		components:{
			VideoMain,
			VideoCategory
		},
		props:{
			current:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				items: [{
					url:"http://157.122.54.189:9088/videoimg/v1/videowp/featured",
					params:{limit:30,skip:0,order:"hot"}
				},{
					url:"http://157.122.54.189:9088/videoimg/v1/videowp/category/59b25abbe7bce76bc834198a",
					params:{limit:30,skip:0,order:"new"}
				},{
					url:"http://157.122.54.189:9088/videoimg/v1/videowp/videowp",
					params:{limit:30,skip:0,order:"new"}
				},{
					url:"http://157.122.54.189:9088/videoimg/v1/videowp/videowp",
					params:{limit:30,skip:0,order:"hot"}
				},{
					url:"http://157.122.54.189:9088/videoimg/v1/videowp/category",
					params:{}
				}]
			}
		},
		methods:{
			currentChange(e){
				this.$emit("currentChange",e.detail.current);
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		swiper{
			height: calc(100vh - 92rpx);
		}
	}
</style>
