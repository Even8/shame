import '../css/base.less';
import * as $ from 'jquery';
import {name} from './c';
console.log(11)
let a:number = 12

$('#phone').on('click', function () {
    console.log("sdf");
})

console.log(name)






class CheckResult {
    private stateResolve: Function = () =>{};
    private stateReject: Function = () => {};
    constructor() {}
    aip():Promise<Response> {
      return new Promise((resolve, reject) => {
        this.stateResolve = resolve;
        this.stateReject = reject;
      });
    }
}


class CheckResult01 {
    private stateResolve: (val: unknown) => void = () => {};
    private stateReject: (val: any) => void = () => {};
    constructor() {}
  
    aip() {
      return new Promise((resolve, reject) => {
        this.stateResolve = resolve;
        this.stateReject = reject;
      });
    }
  }