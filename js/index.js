
window.onload = function(){
  search();
  secondkill();
    scrollpic();

}	
 var search = function(){
 	/*搜索框对象,这里为什么加[0]，主要是因为这个类名可能多个元素起，所以就会形成一个数组*/
 	// elements别忘了加s，因为得到的是一个数组
 	var search = document.getElementsByClassName('jd_header_box')[0];
 	 /*banner对象*/
 	var banner = document.getElementsByClassName('jd_banner')[0];
 	// 获取高度
 	var height = banner.offsetHeight;
 	window.onscroll = function(){
 		var top = document.body.scrollTop;
 		/*当滚动高度大于banner的高度时候颜色不变*/
 	  if(top > height){
 	  	search.style.background = "rgba(201,21,35,0.85)";
 	  }else{
 	  	var op = top/height*0.85;
 	  	search.style.background = "rgba(201,21,35,"+op+")";
 	  }

    }

 }
 // 秒杀区时间函数 倒计时
 var secondkill = function(){
 	var sktime = document.getElementsByClassName("sk_time")[0];
 	var timelist = sktime.getElementsByClassName("num");
 	// var timelist = sktime.getElementsByClassName("num");当把document换成sktime时
 	// 没想到还能这样写
 	var times = 7*60*60;
 	var timer;
 	timer = setInterval(function(){//js有些时间没用了，都有点忘了，setInterval(fn(),1000);
 		times--;//这一步是关键，能保证时间一直走
 		// 小时
 	var h = Math.floor(times/60/60);
 	//Math.abs()取整函数，Math.ceil()天花板向上取整，Math.floor()地板向下取整，Math.round()四舍五入函数 
    //分钟
    var m = Math.floor(times/60%60);
    // 秒
    var s = times%60;
    console.log(h+"-"+m+"-"+s);
    timelist[0].innerHTML = h>10?Math.floor(h/10):0;
    timelist[1].innerHTML = h%10;
    timelist[2].innerHTML = m>10?Math.floor(m/10):0;
    timelist[3].innerHTML = m%10;
    timelist[4].innerHTML = s>10?Math.floor(s/10):0;
    timelist[5].innerHTML = s%10;
    if(times <= 0){
           clearInterval(timer);
           // 清除定时器
        }
 	},1000);
 	
 }
  // 轮播图
 var scrollpic = function(){
     // 先获取banner
     var banner = document.getElementsByClassName('jd_banner')[0];
     // 获取banner的宽度
     var width = banner.offsetWidth;
     //图片盒子
     var imgbox = banner.getElementsByTagName('ul')[0];
     //点盒子
     var pointbox = banner.getElementsByTagName('ul')[1];
    // 点列表
     var pointlist = pointbox.getElementsByTagName('li');

     //定义定时器 timer
     var timer;
     var index = 1;
     //增加过渡事件
     var addtransition = function(){
         //记住是大盒子在移动
         imgbox.style.transition = 'all .3s ease 0';
         imgbox.style.webkitTransition = 'all .3s ease 0';
     }
     //移除过渡事件
     var removetransition = function(){
         //记住是大盒子在移动
         imgbox.style.transition = 'none';
         imgbox.style.webkitTransition = 'none';
     }
     //改变位置
     var setTransform = function(t){
     //    记住是大盒子在移动
         imgbox.style.transform = 'translateX('+t+'px)';
         imgbox.style.webkitTransform = 'translateX('+t+'px)';
     }
     timer = setInterval(function(){
         index++;
         addtransition();
         if(index >= 9){
             index = 1;
             removetransition();
         }else if(index <= 0){
             index = 8;
             removetransition();
         }
         setTransform(-index*width);
     },3000);
 }

 


























