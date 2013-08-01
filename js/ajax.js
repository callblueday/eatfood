$(document).ready(function(){
	
	//$("#button").click(function(){alert("here")})
	
	//菜品录入
	$("#button_1").click(function(){
	
	//alert("1");
		$.post("enter.php"
			,{ 
			act:1,
			name:$("#name").attr("value"),
			price:$("#price").attr("value"),
			//pic:$("#pic").attr("value"),
			meat:$("#meat").attr("value"),
			color:$("#color").attr("value")}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) alert("菜品插入成功");
        		}
        	,"json"); 
        	
	//alert("2");
	})
	
	
	
	
	//提交订单
	$("#button_2").click(function(){
	
	alert("1");
		$.post("enter.php"
			,{ 
			act:2,
			sum:64,
			pnum:3,
			dnum:4,
			place:"利佳餐馆",
			dish1:"家常豆腐",
			num1:2,
			dish2:"干锅包菜",
			num2:2,
			dish3:"酸菜鱼",
			num3:2,
			dish4:"肉末涨蛋",
			num4:2}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) {
        		
        		alert("订单插入成功1");
        		alert(data.m);
        		alert(encodeURI(data.m));
        		
        		window.location.href=data.m;
        		
        		alert("订单插入成功2");
        		}
        		}
        	,"json"); 
        	
	alert("3");
	})
	
	
	
	
	//查询所有菜谱
	$("#button_3").click(function(){
	
	alert("1");
		$.post("enter.php"
			,{ 
			act:3}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) {
        		
        			alert("查询菜谱成功");
        			var str="";
        			for (var i = 0; i < 1000; i++) {

                 		if (data.m[i].name == 0) {
                    	break;
                  		}else{
                  		str=str+data.m[i].name+data.m[i].price+data.m[i].meat+data.m[i].color+data.m[i].id;
                  		}
        			}
        			alert (str);
        		}
			}
			,"json");
	alert("3");
	})
	//查询历史
	$("#button_4").click(function(){
	
	alert("1");
		$.post("enter.php"
			,{ 
			act:4}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) {	
				/*	alert("查询菜谱成功");
        			alert(data.m[0].time);
        			alert(data.n[0].name);
        			alert(data.n[1].price);
        			alert(data.s);*/
        		}
			}
			,"json");
	//alert("3");
	})
	//推荐菜单
	$("#button_5").click(function(){
	
	//alert("1");
		$.post("enter.php"
			,{ 
			act:5}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) {
        		
        			alert("查询菜谱成功");
        			alert(data.m[5].color+data.m[3].name);
        			
        		}
			}
			,"json");
	//alert("3");
	})
})