<template>
	<view @touchstart="handleTouchStart" @touchend="handleTouchEnd">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startTime: 0,
				startX:0,
				startY:0
			}
		},
		methods: {
			handleTouchStart(e) {
				this.startTime=Date.now();
				this.startX=e.changedTouches[0].clientX;
				this.startY=e.changedTouches[0].clientY;
			},
			handleTouchEnd(e) {
				const endTime=Date.now();
				const endX=e.changedTouches[0].clientX;
				const endY=e.changedTouches[0].clientY;
				if((endTime-this.startTime) > 2000){
					return ;
				}
				let direction='';
				if(Math.abs(endX-this.startX)>10 && Math.abs(endY-this.startY)<10){
					//合法滑动
					direction=endX-this.startX>0?'right':'left';
				}else{
					return;
				}
				this.$emit('swiperAction',{direction})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
