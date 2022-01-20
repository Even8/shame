(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("even", [], factory);
	else if(typeof exports === 'object')
		exports["even"] = factory();
	else
		root["even"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
console.log('我是a模块')
function a() {return '111'}
a();
/******/ 	return __webpack_exports__;
/******/ })()
;
});