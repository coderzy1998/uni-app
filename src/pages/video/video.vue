<template>
	<view class="video">
		<video-navbar @navClick="navClick" :index="index"></video-navbar>
		<video-content :current="index" @currentChange="currentChange"></video-content>
	</view>
</template>

<script>
	import VideoNavbar from "./childComps/VideoNavbar.vue";
	import VideoContent from "./childComps/VideoContent.vue";
	export default{
		components:{
			VideoNavbar,
			VideoContent
		},
		data() {
			return {
				index: 0
			}
		},
		methods:{
			navClick(index){
				this.index=index;
			},
			currentChange(index){
				this.index=index;
			}
		},
	}
</script>

<style lang="scss">
</style>
