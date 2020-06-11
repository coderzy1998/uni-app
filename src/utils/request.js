export function request(params){
	uni.showLoading({
		mask:true,
		title:"加载中"
	});
	return new Promise((resolve,reject) =>{
		uni.request({
			...params,
			success(res){
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading();
			}
		})
	})
}