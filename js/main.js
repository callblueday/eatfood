var mark = 1;
var orderInfo = {};
var m_dish=new Array();
var m_num=new Array();
var tip = null;
var totalPrice = 0;
var dishCount = 0;
var analysisMark = {};
analysisMark.su = 0;
analysisMark.hun = 0;
analysisMark.color = 0;

$(document).ready(function(){

  // $("li.myorder-item").live("click",function(){
  //   alert($(this).offset().left + '-'+ $(this).offset().top); // 2334,127
  // });

  initLayout();

  orderEvents();

  analysisEvents();

  buttonEvents();

  initdatas(); //初始化菜单数据

  dragItemdAnimate();
});

function initdatas() {
  var colorList = ['white.png','yellow.png','green.png','red.png','purple.png','black.png'];
  $.post("enter.php"
	,{ 
	act:3}
	,function(data){
		if (data.e == 100) console.log("链接数据库错误");
        else if (data.e == 101) console.log("插入数据库失败");
        else if (data.e == 200) {
       /* 
	   数据格式：-----------------数据的使用-----------------
	   	console.log(data.m[0].name);
        console.log(data.m[0].price);		
        console.log(data.m[0].meat);		
        console.log(data.m[0].color);
        console.log(data.m[0].name+".jpg");*/
		//console.log(data.count);
		var a=b=c=d=i=0;
		d=data.count;
    $(".order-item").css("visibility","hidden");
		while(i<d)
		{
      $(".order-item:eq("+i+") .order-name").css("backgroundImage", "url(images/color/"+colorList[data.m[i].color]+")");
      $(".order-item:eq("+i+") .order-name").attr("data-meat", data.m[i].meat);
      $(".order-item:eq("+i+") .order-name").attr("data-color", data.m[i].color);

      if(data.m[i].meat==2)
      {  
				$(".dahun .order-item:eq("+a+") .order-name").html(data.m[i].name);
				$(".dahun .order-item:eq("+a+") .order-price").html(data.m[i].price+"￥");
				$(".dahun .order-item:eq("+a+")").css("visibility","visible");
				a=a+1;
			}
			if(data.m[i].meat==1)
			{
				$(".hun .order-item:eq("+b+") .order-name").html(data.m[i].name);
				$(".hun .order-item:eq("+b+") .order-price").html(data.m[i].price+"￥");
        $(".hun .order-item:eq("+b+")").css("visibility","visible");
				b=b+1;
			}
			if(data.m[i].meat==0)
			{
				$(".su .order-item:eq("+c+") .order-name").html(data.m[i].name);
				$(".su .order-item:eq("+c+") .order-price").html(data.m[i].price+"￥");
        $(".su .order-item:eq("+c+")").css("visibility","visible");
				c=c+1;
			}
			i=i+1;
		}
		//$(".dahun .order-item:eq(0) .order-name").html(data.m[0].name);
		//$(".dahun .order-item:eq(0) .order-price").html(data.m[0].price+"￥");
     }
	}
	,"json");
}

function buttonEvents() {
  $(".step1").click(function(){
    var number = $(".person-num").val();
    var time = $(".time").val();
    if(number == null) {
      number = 1;
    }
    else {
      orderInfo.personNumber = parseInt(number);
      orderInfo.arriveTime = new Date(time);
      setSmoothScroll('#makeorder');
      $("nav").css("backgroundImage","url(images/step2.png)");
    }

  });

  $(".step2").click(function(){
    setSmoothScroll('#welcome');
    $("nav").css("backgroundImage","url(images/step1.png)");
  });

  $(".step3").click(function(){
	  getInfo();
    if(dishCount == 0 ) {
      $(".nodish").css("opacity",1);
      $(".nodish").css("marginTop", "-50px");
      $(".nodish").fadeIn(1500);
      setTimeout(function(){
        $(".nodish").animate({marginLeft:'-50px', marginTop:'50px', opacity:0}, 1500)
      },1500);

      return false;
    }
    else {
      setSmoothScroll('#success');
      $("nav").css("backgroundImage","url(images/step3.png)");
    }

	  //数据提取自当前菜单 -------------------数据来源-----------------
	  $.post("enter.php"
			,{
			act:2,
      pretime:$(".time").val(),
			sum: totalPrice,
			pnum: orderInfo.personNumber,
			dnum: dishCount, 
			place:"利佳餐馆",
			dish1:m_dish[0],
			num1:m_num[0],
			dish2:m_dish[1],
			num2:m_num[1],
			dish3:m_dish[2],
			num3:m_num[2],
			dish4:m_dish[3],
			num4:m_num[3],
			dish5:m_dish[4],
			num5:m_num[4],
			dish6:m_dish[5],
			num6:m_num[5],
			dish7:m_dish[6],
			num7:m_num[6],
			dish8:m_dish[7],
			num8:m_num[7],
			dish9:m_dish[8],
			num9:m_num[8],
			dish10:m_dish[9],
			num10:m_num[9],
			dish11:m_dish[10],
			num11:m_num[10],
			dish12:m_dish[11],
			num12:m_num[11],
			dish13:m_dish[12],
			num13:m_num[12],
			dish14:m_dish[13],
			num14:m_num[13],
			dish15:m_dish[14],
			num15:m_num[14]}
			,function(data){
				if (data.e == 100) console.log("链接数据库错误");
        		else if (data.e == 101) console.log("插入数据库失败");
        		else if (data.e == 200) {
            $.ajax({
              type: "post",
			  url: data.m,
              // url:"enter.php", //xu ni di zhi
              success: function(msg){
				        setSmoothScroll('#success');
                $("nav").css("backgroundImage","url(images/step3.png)");
              },
              error:function(msg){
                console.log(msg);
                setSmoothScroll('#success');
                $("nav").css("backgroundImage","url(images/step3.png)");                
              }
            }); 
        		}
      },"json");
  });

  $(".step4").click(function(){
    setSmoothScroll('#welcome');
    $("nav").css("backgroundImage","url(images/step1.png)");
  });

  $("#makeorder .reset").click(function(){
    $(".order-detail-ul").children().remove();
    setTimeout(function(){
      $(".tip").html("");},500);
  });

  //eats choose
  $(".eatsarea").change(function(){
    alert($(".eatsarea").val());
    $(".tel").val("12132424");
  });

}

function setSmoothScroll(target) {
  $.smoothScroll({
    direction: 'left',
    scrollTarget: target,
    beforeScroll: function() {

    },
    afterScroll: function() {
      
    }
  });
}

function initLayout() {
    var w = document.body.offsetWidth + 'px';
    $(".pane").css("width", w);
}

function orderEvents() {
//	var id=new Array();-------------改为全局数据--------------
//	var i=0;


  //order-item click events
  $(".order-item").click(function(){
    // alert($(this).offset().left);
    // // alert($(this).offset().top);

    $("#slideitem").css("margin-left", $(this).offset().left-1420);
    $("#slideitem").css("margin-top", $(this).offset().top-30);
    $("#slideitem").html($(this).html());
    $("#slideitem").addClass("order-item");

    var left = 2334 - $(this).offset().left;
    var top = 147 - $(this).offset().top;

    $("#slideitem").animate({
      top: top, 
      left:left,
      opacity:'0'
    }, 1500); 

    var value = $(this).text();
    var el = $(this).html();
    var color = $(this).attr("data-color");
    var meat = $(this).attr("data-meat");

    var item = document.createElement("li");
    $(item).append(el);
    $(item).append($("<div class='delete'></div>"));
    $(item).addClass("myorder-item");

    $(".order-detail-ul").prepend($(item));
  });

  //auto-send
  $(".autosend").click(function(){
   //获取server数据
	$.post("enter.php"
			,{ 
			act:5}
			,function(data){
				if (data.e == 100) console.log("链接数据库错误");
        		else if (data.e == 101) console.log("插入数据库失败");
        		else if (data.e == 200) {
        			//console.log("查询菜谱成功");
        			//console.log(data.m[5].color+data.m[3].name);
					$(".order-detail-ul").children().remove();
    				for(var i=0; i<6; i++){
     				var item = document.createElement("li");
      				var itemName = document.createElement("span");
     				$(itemName).addClass("order-name").html(data.m[i].name);
     				var itemPrice = document.createElement("span");
      				$(itemPrice).addClass("order-price").html(data.m[i].price+"￥");
      				$(item).append($(itemName));
      				$(item).append($(itemPrice));
      				$(item).append($("<div class='delete'></div>"));
      				$(item).addClass("myorder-item");
      				$(".order-detail-ul").append($(item));
    				}
        		}
			}
			,"json");
  });

  $(".myorder-item").live("mouseover", function(){
     $(this).children()[2].style.display = "block";
  });
  $(".myorder-item").live("mouseout", function(){
    $(this).children()[2].style.display = "none";
  });

  // delete click events
  $(".delete").live("click",function(){
    $(this).parent().remove();
  });
}

// dynamic listen myorder items content change
function analysisEvents() {
  $('.order-detail-ul').live('DOMNodeInserted', function(e) {
    setTimeout(function(){ 
      addMark();
      setAnalysisResult(); 
    }, 500);
  });
  $('.order-detail-ul').live('DOMNodeRemoved', function(e) {
    setTimeout(function(){
      reduceMark();
      setAnalysisResult(); 
    }, 500);
  });
}

// add mark
function addMark() {
  mark ++;
}

// reduce mark
function reduceMark() {
  if(mark <= 0) {
    mark = 0;
  }
  else {
    mark --;
  }
}

// get info
function getInfo() {
  totalPrice = 0;
  m_dish = [];
  dishCount = $(".order-detail-ul li").length;
  analysisMark.color = 0;
  analysisMark.su = 0;
  analysisMark.hun = 0;

  for(var i = 0; i < dishCount; i++)
  {
    m_dish[i] = $(".order-detail-ul li:eq(" + i +") .order-name").text();
    var price = $(".order-detail-ul li:eq(" + i +") .order-price").text();
    
    var meat = parseInt($(".order-detail-ul li:eq(" + i +") .order-name").attr("data-meat"));
    if(meat == 0) {
      analysisMark.su = analysisMark.su + meat;
    }
    else {
      analysisMark.hun = analysisMark.hun + meat;
    }
    var color = parseInt($(".order-detail-ul li:eq(" + i +") .order-name").attr("data-color"));
    if(color === 0) { analysisMark.color = analysisMark.color + 7}
    if(color === 1) { analysisMark.color = analysisMark.color + 5}
    if(color === 3) { analysisMark.color = analysisMark.color + 12}
    if(color === 2) { analysisMark.color = analysisMark.color + 5}
    if(color === 4) { analysisMark.color = analysisMark.color + 2}
    if(color === 5) { analysisMark.color = analysisMark.color + 2}

    totalPrice = totalPrice + parseInt(price.split("￥")[0]);
    m_num[i]=1;
  }
  tip = "您一共点了<span class='stress'>" + dishCount + "道菜</span>,共计<span class='stress'>" +  totalPrice +"￥</spa n>";
  console.log(m_dish);
  console.log(tip);
  console.log(analysisMark);
}

// setAnalysisResult
function setAnalysisResult() { 
  getInfo();
  var stateImg = {
    "sucai": "images/emotion/sucai.png",
    "youni": "images/emotion/youni.png",
    "rou": "images/emotion/rou.png",
    "zhaicai": "images/emotion/zhaicai.png",
    "yanse": "images/emotion/yanse.png",
    "nice": "images/emotion/nice.png"
  };
  var stateTip = {
    "sucai": "强烈要求吃蔬菜",
    "youni": "太油腻了，要多吃蔬菜哦！",
    "rou": "我还要吃肉肉~",
    "zhaicai": "斋菜太多了，肉！肉在哪里",
    "yanse": "荤素合理搭配外，还有注意颜色搭配哦~",
    "nice": "搭配不错，今天有口福了~~"
  };

  if(analysisMark.hun/analysisMark.su > 1){
    if(analysisMark.color <= 2){
      $(".order-state .people").css("backgroundImage","url("+stateImg.sucai + ")");
      $(".order-state .tip").html(stateTip.sucai);
    }else{
      $(".order-state .people").css("backgroundImage","url("+stateImg.youni + ")");
      $(".order-state .tip").html(stateTip.youni);
    }
  }
  else if(analysisMark.hun/analysisMark.su < 1/3){
    if(analysisMark.color <= 2){
        $(".order-state .people").css("backgroundImage","url("+stateImg.rou + ")");
        $(".order-state .tip").html(stateTip.rou);
    }else{
        $(".order-state .people").css("backgroundImage","url("+stateImg.zhaicai + ")");
        $(".order-state .tip").html(stateTip.zhaicai);
    }
  }
  else{
    if(analysisMark.color <= 2){
          $(".order-state .people").css("backgroundImage","url("+stateImg.yanse + ")");
          $(".order-state .tip").html(stateTip.yanse);
      }else{
          $(".order-state .people").css("backgroundImage","url("+stateImg.nice + ")");
          $(".order-state .tip").html(stateTip.nice);
      }
  }

  $("p.dishtip").remove();
  $(".order-state .tip").append($("<p class='dishtip'>"+tip+"</p>"));
}

function dragItemdAnimate() {

}