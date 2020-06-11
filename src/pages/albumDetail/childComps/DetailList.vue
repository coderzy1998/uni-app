<template>
	<view class="album-list" v-if="list.length != 0">
		<view class="album-list-item" v-for="(item,index) in list" :key="index">
			<go-detail :list="list" :index="index">
				<image :src="item.thumb + item.rule.replace('$<Height>',360)" mode="aspectFill" lazyLoad></image>
			</go-detail>
		</view>
	</view>
</template>

<script>
	import GoDetail from "@/components/goDetail/GoDetail.vue"
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoDetail
		}
	}
</script>

<style lang="scss" scoped>
	.album-list{
		display: flex;
		flex-wrap: wrap;
		.album-list-item{
			width: 33.33%;
			border: 3rpx solid #fff;
			image{
				height: 160rpx;
			}
		}
	}
</style>
