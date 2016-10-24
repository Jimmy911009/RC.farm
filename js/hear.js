
// 图片轮播
var $slider = $("#slider");

var $sliderImg = $("#slider img");
var str = 1;
//获取图片文字
var imgCent	 = $("#slider_cent span");

//获取图片宽度保存到数组
var imgArr = ["sliderO","sliderA","sliderB","sliderC","sliderD"];


function imgsFn(){
	console.log("却换");
	$slider.css("transition","1s");
	$slider.attr('class',imgArr[str]);
	str++;
	if(str == 5){
		$slider.attr('class',imgArr[5]);
		setTimeout(function(){
			str =1;
			$slider.css("transition","0s");
			$slider.attr('class',imgArr[0]);
			// bol = !bol;
			console.log("完成却换");			
		},1000);
	}
	bol = !bol;
}

//创建一个定时器累加时间
var cenNum = 0;
//定义BOL值控制事件调取
var bol = true;
setInterval(function(){
	console.log(str);
	if(bol){

		cenNum +=2;
		// imgCent.eq(str-1).css("width",cenNum+"%").siblings().css("width","0%");
		imgCent.each(function(i){
			if(i == str-1){
				console.log('a');
				imgCent.eq(str-1).css("width",cenNum+"%");
			}else{
				imgCent.eq(i).css("width","0%");
			}
		});
		if(cenNum >= 100){
			imgsFn();
			cenNum = 0;
			bol = !bol;
		}		
	}

},100);

