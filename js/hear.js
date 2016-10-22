
// 图片轮播
var $slider = $("#slider");

var $sliderImg = $("#slider img");
var str = 1;
//获取图片文字
var imgCent	 = $("#slider_cent span");

function imgsFn(){

		$sliderImg.css({"transform": "scale(0.7)"});
		$slider.css({"transition": "1s"});

		$slider.animate({"marginLeft":-str*100+"%"},1000,"linear",function(){
			setTimeout(function(){
				$sliderImg.css({"transform": "scale(1)"});
				bol = true;			
			},1000);
			if(str > 4){
				setTimeout(function(){
					$slider.css({"marginLeft":"0%","transition": "0s"});		
				},1500);
				 str = 1;
			}
			console.log("还原图片");
		});

		str++;

}

//创建一个定时器累加时间
var cenNum = 0;
//定义BOL值控制事件调取
var bol = true;
setInterval(function(){
	if(bol){
		cenNum +=2;
		// imgCent.eq(str-1).css("width",cenNum+"%").siblings().css("width","0%");
		imgCent.each(function(i){
			if(i == str-1){
				imgCent.eq(str-1).css("width",cenNum+"%");
			}else{
				imgCent.eq(i).css("width","0%");
			}
		});
		if(cenNum >= 100){
			imgsFn();
			cenNum = 0;
			bol = false;
		}		
	}

},100);

