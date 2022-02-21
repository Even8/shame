//<------------------------------------------基本js方法--------------------------------------------->
window.getQueryStr = function getQueryStr(str: string) {
  var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)");
  var r: any = window.location.search.substr(1).match(reg);
  if (r != null) {
    return r[2];
  } else {
    return null;
  }
};

//<------------------------------------------alert--------------------------------------------->
window.showAlert = function showAlert(msg?: string, cb?: () => void) {
  $(".window").remove();
  $(".cont").addClass("touchmovedis");
  var tmpl: any = $(
    '<div class="dialogAlert showAlert showAlertMain" >' +
      '<div class="misk"></div>' +
      '<div class="dialog">' +
      '<img class="showalertbg" src="images/img-fri.png" />' +
      '<div class="contentcont">' +
      '<div class="content"><p>' +
      msg +
      "</p></div>" +
      '<div class="close"><img src="images/win-close.png" class="two"/></div>' +
      "</div>" +
      "</div>" +
      "</div>"
  );
	if(cb){
		cb && tmpl.find(".two").click(function(){
			$(".cont").removeClass("touchmovedis");
			tmpl.remove();
			cb();
		});
	}else{

		tmpl.find(".two").click(function(){
			$(".cont").removeClass("touchmovedis");
			tmpl.remove();
		});
	}
	tmpl.find(".misk").on("touchmove",function(e:any){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	$("body").append(tmpl);
};

//<------------------------------------------webToast--------------------------------------------->
window.webToast = function webToast(msg, time = 2000) {
  let temp: any = $('<div class="miskeWebToast">' + msg + "</div>");
  $("body").append(temp);
  $(".miskeWebToast").fadeIn();
  setTimeout(function() {
    $(".miskeWebToast").fadeOut();
  }, time);
};

//<------------------------------------------mask--------------------------------------------->
interface IMask {
  cursorStyle: string;
  zIndex: number;
  speed: number;
  newNum: number;
  context: any;
  canvas: HTMLCanvasElement;
  maskEle: HTMLElement;
  show: () => void;
  initCanvas: (n: number, g: number) => HTMLCanvasElement;
  drawFrame: () => void;
}
class Mask implements IMask {
  public context: any = "";
  public speed: number = 0;
  public newNum: number = 0;
  public maskEle: HTMLElement = document.createElement("div");
  public canvas: HTMLCanvasElement = this.initCanvas();
  constructor(public cursorStyle: string = "wait", public zIndex: number = 10) {
    this.cursorStyle = cursorStyle;
    this.zIndex = zIndex;
  }
  initCanvas() {
    this.maskEle.classList.add("loadingcircle");
    this.maskEle.style.cssText += `display:none;zIndex:${this.zIndex}`;
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 80;
    canvas.height = 80;
    canvas.classList.add("mask_content");
    this.maskEle.appendChild(canvas);
    this.maskEle.addEventListener("click", (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    this.maskEle.addEventListener("touchmove", (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    return canvas;
  }

  //绘制圆弧
  blueCircle(n: number, g: number) {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement, //获取canvas元素
      context: any = canvas.getContext("2d"), //获取画图环境，指明为2d
      centerX: number = canvas.width / 2, //Canvas中心点x轴坐标
      centerY: number = canvas.height / 2, //Canvas中心点y轴坐标
      rad: number = (Math.PI * 2) / 100; //将360度分成100份，那么每一份就是rad度
    context.save();
    context.strokeStyle = "rgb(250,250,250)"; //设置描边样式
    context.lineWidth = 3; //设置线宽
    context.beginPath(); //路径开始
    //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
    context.arc(
      centerX,
      centerY,
      18,
      -Math.PI / 2 + g,
      -Math.PI / 2 + n * rad + g,
      false
    );
    context.stroke(); //绘制
    context.closePath(); //路径结束
    context.restore();
    this.context = context;
    return canvas;
  }

  drawFrame() {
    let $maskEle = $(".loadingcircle");
    if ($maskEle.css("display")) {
      let that = this;
      window.requestAnimationFrame(function() {
        that.drawFrame();
      });
    } else {
      return;
    }
    //清除canvas绘图空间，重新绘制圆弧
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.blueCircle(this.speed, this.newNum);
    if (this.speed > 100) {
      //弧度超过一周,重新画弧;
      this.newNum += 0.5;
      this.speed = 0;
    }
    this.speed += 1.5;
  }

  show() {
    let $maskEle = $(".loadingcircle");
    let lcl: number = $maskEle.length;
    if (lcl > 0) {
      $maskEle.show();
      return false;
    } else {
      document.body.appendChild(this.maskEle);
      let $maskEle = $(".loadingcircle");
      $maskEle.show();
      this.blueCircle(this.speed, this.newNum);
      this.drawFrame();
    }
  }

  close() {
    let $maskEle = $(".loadingcircle");
    if ($maskEle) {
      $maskEle.css("cursor", "default");
      $maskEle.hide();
    }
  }
}
window.maskLoading = new Mask();
