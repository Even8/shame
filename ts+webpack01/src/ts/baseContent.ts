
/**
 * @desc Typescript 定义全局变量
 * 1. 需要定义Window接口
 */
interface Window{
  // 基本常量
  actCodeUUID:string,
  actHost:string,
  activitycore:string,
  baseUrl:string,
  maskLoading: any,
  errortip:any,
  isApp:boolean,
  isWeChat:boolean,
  jsspdb: any,
  webkit: any,
  Login:any,
  // 页面所需变量
  
  // 接口
  apiGetAct:()=>Promise<Response>,
  apiDrawPrize:(sceneCodeUUID:string,teamCode:string)=>Promise<Response>,
  showAlert:(msg?:string,cb?:()=>void)=>void,
  webToast:(msg?:string,time?:number)=>void,
  getQueryStr:(str:string)=>any,
  loadTokenSuccess:(obj:any) =>any,
  loadTokenFail:(obj:any) =>any,
  loginSucces:() =>void,

}
// 定义jquery
declare var $:any;
window.actCodeUUID = process.env.actCodeUUID as string;
window.actHost = window.location.protocol + "//" + window.location.host;
window.activitycore = "/pfhd-external-gateway/pfhd-external-core/v1";
window.baseUrl = window.actHost + window.activitycore;
window.isApp = /spdb/i.test(navigator.userAgent);
window.isWeChat = /MicroMessenger/i.test(navigator.userAgent);
