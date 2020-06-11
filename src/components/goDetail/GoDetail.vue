<template>
	<view @click="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			index:Number
		},
		methods:{
			handleClick(){
				getApp().globalData.imgList=this.list;
				getApp().globalData.imgIndex=this.index;
				uni.navigateTo({
					url:"/pages/imgDetail/ImgDetail"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
