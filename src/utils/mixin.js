import {uniIcons} from "@dcloudio/uni-ui";

export const backTopMixin={
	components:{
		uniIcons
	},
	data(){
		return {
			top_num:0,
			old:{
				scrollTop:0
			},
			showBackTop:false
		}
	},
	methods:{
		scroll(position){
			let top=position.detail.scrollTop;
			this.old.scrollTop=top;
			let flag=top >= 300;
			if(this.showBackTop != flag){
				this.showBackTop=flag;
			}
		},
		async toTop(){
			this.top_num=await this.old.scrollTop;
			this.top_num=await 0;
		}
	}
}