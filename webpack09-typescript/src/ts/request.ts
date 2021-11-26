
// get请求封装；
function get({url,isShow=false}:{url:string,isShow?:boolean}) {
  isShow && window.maskLoading.show();
	return new Promise(function (resolve, reject) {
		$.ajax({
			type: "get",
			url: url,
			contentType: "application/json;charset=utf-8",
			async: true,
			success: function success(resp:any) {
				resolve(resp);
			},
			error: function error(err:any) {
				reject(err);
			}
		});
	});
}

// post请求封装
function post({url,isShow,data}:{url:string,isShow?:boolean,data?:object}) {
	isShow && window.maskLoading.show();
	return new Promise(function (resolve, reject) {
		$.ajax({
			type: "POST",
			url: url,
			data: JSON.stringify(data),
			contentType: "application/json;charset=utf-8",
			async: true,
			success: function success(resp:any) {
				resolve(resp);
			},
			error: function error(err:any) {
				reject(err);
			}
		});
	});
}

