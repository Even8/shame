"use strict";
// get请求封装；
function get(_a) {
    var url = _a.url, _b = _a.isShow, isShow = _b === void 0 ? false : _b;
    isShow && window.maskLoading.show();
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: url,
            contentType: "application/json;charset=utf-8",
            async: true,
            success: function success(resp) {
                resolve(resp);
            },
            error: function error(err) {
                reject(err);
            }
        });
    });
}
// post请求封装
function post(_a) {
    var url = _a.url, isShow = _a.isShow, data = _a.data;
    isShow && window.maskLoading.show();
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json;charset=utf-8",
            async: true,
            success: function success(resp) {
                resolve(resp);
            },
            error: function error(err) {
                reject(err);
            }
        });
    });
}
