var $slider=$("#slider");var $sliderImg=$("#slider img");var str=1;var imgCent=$("#slider_cent span");var imgArr=["sliderO","sliderA","sliderB","sliderC","sliderD"];function imgsFn(){console.log("??");$slider.css("transition","1s");$slider.attr("class",imgArr[str]);str++;if(str==5){$slider.attr("class",imgArr[5]);setTimeout(function(){str=1;$slider.css("transition","0s");$slider.attr("class",imgArr[0]);console.log("????")},1000)}bol=!bol}var cenNum=0;var bol=true;setInterval(function(){if(bol){cenNum+=2;imgCent.each(function(i){if(i==str-1){imgCent.eq(str-1).css("width",cenNum+"%")}else{imgCent.eq(i).css("width","0%")}});if(cenNum>=100){imgsFn();cenNum=0;bol=!bol}}},100);console.log(imgCent);var sliderCentLi=$("#slider_cent li");sliderCentLi.each(function(i){console.log($(this));$(this).on("click",function(){str=i})});
