<template>
  <view class="nav-bar">
		<uni-segmented-control
		  :current="current"
		  :values="items.map(item => item.title)"
		  @clickItem="onClickItem"
		  style-type="text"
		  active-color="#d4237a"
		></uni-segmented-control>
  </view>
  
</template>

<script>
	// 分段器
import { uniSegmentedControl } from "@dcloudio/uni-ui";
export default {
	props:{
		index:{
			type:Number,
			default:0
		}
	},
	data() {
		return {
			items: [
			  {
			    title: "推荐"
			  },
			  {
			    title: "分类"
			  },
			  {
			    title: "最新"
			  },
			  {
			    title: "专辑"
			  }
			],
			current:0
		}
	},
	methods:{
		onClickItem(e){
			if (this.current !== e.currentIndex) {
			  this.current = e.currentIndex;
			};
			this.$emit('navClick',this.current)
		}
	},
	components:{
		uniSegmentedControl
	},
	watch:{
		index(newValue){
			this.current=newValue;
		}
	}
}
</script>

<style lang="scss">
	.nav-bar{
		width: 60%;
		margin: 0 auto;
		padding: 10rpx;
	}
</style>