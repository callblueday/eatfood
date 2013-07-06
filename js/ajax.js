$(document).ready(function(){
	$("#button_1").click(function(){
	
	//alert("1");
		$.post("http://localhost/order/enter.php"
			,{ 
			act:1,
			name:$("#name").attr("value"),
			price:$("#price").attr("value"),
			pic:$("#pic").attr("value"),
			meat:$("#meat").attr("value"),
			color:$("#color").attr("value")}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) alert("菜品插入成功");
        		
        		//alert(data.m.name);
        		
        		
        		
        		}
        	,"json"); 
        	
	//alert("2");
	})
})