<template>
	<view class="img-category">
		<category-navbar @itemClick="itemClick" :index="index"></category-navbar>
		<category-content :current="index" :cid="id" @currentChange="currentChange"></category-content>
	</view>
</template>

<script>
	import CategoryNavbar from "./childComps/CategoryNavbar.vue";
	import CategoryContent from "./childComps/CategoryContent.vue";
	export default {
		components:{
			CategoryNavbar,
			CategoryContent
		},
		data() {
			return {
				index: 0,
				id:0
			}
		},
		methods:{
			itemClick(index){
				this.index=index;
			},
			currentChange(index){
				this.index=index;
			}
		},
		onLoad(options) {
			// console.log(options);
			this.id=options.id;
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
