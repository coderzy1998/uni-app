<template>
  <view class="home">
    <home-nav-bar @navClick="navClick" :index="current"></home-nav-bar>
    <home-content :current="current" @currentChange="currentChange"></home-content>
  </view>
</template>

<script>
import HomeNavBar from './childComps/HomeNavBar.vue'
import HomeContent from './childComps/HomeContent.vue'
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    navClick(index){
			this.current=index
		},
		currentChange(event){
			this.current=event;
		}
  },
  components: {
		HomeNavBar,
		HomeContent
  },
  onLoad() {
  
  },
  
};
</script>

<style lang="scss" scoped>
  
</style>
