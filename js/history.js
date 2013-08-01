$(document).ready(function(){
	
	initdatas();
	
  $(".order-item").live("click",function(e){
    $(this).next().toggle();
  });

  $(".list-title").live("click",function(){
    $(".order-list").show();
    $(".analysis-list").hide();
  });

  $(".analysis-title").live("click",function(){
	  
	  $.post("enter.php"
			,{ 
			act:6}
			,function(data){
				if (data.e == 100) alert("链接数据库错误");
        		else if (data.e == 101) alert("插入数据库失败");
        		else if (data.e == 200) {
        		// alert("查询菜谱成功");
        		// alert(data.m[5].color+data.m[3].name);
  					// alert(data.name_high);
  					// alert(data.name_low);
  					// alert(data.m[0].name);
  					// alert(data.m[1].name);
  					// alert(data.y_name_high);
  					// alert(data.y_name_low);
  					// alert(data.y_m[0].name);
  					// alert(data.y_m[1].name);
          $(".popfood img").attr("src", "pic/" + data.y_name_high + ".jpg");
          $(".popfood .fodd-name").html(data.y_name_high);

          $(".downfood img").attr("src", "pic/" + data.y_name_low + ".jpg");
          $(".downfood .fodd-name").html(data.y_name_low);

   				$(".order-list").hide();
   				$(".analysis-list").show();
        }
			},"json");
});   
  
function initdatas(){
	$.post("enter.php",{
			act:4
    },
    function(data){
			if (data.e == 100) alert("链接数据库错误");
      		else if (data.e == 101) alert("插入数据库失败");
      		else if (data.e == 200) {	
			/*	alert("查询菜谱成功");
  			alert(data.m[0].time);
  			alert(data.n[0].name);
  			alert(data.n[1].price);
  			alert(data.s);*/
			var count=data.count;
			var count_n=data.count_n;
			var ccc=ddd=0;
			for(var i=0;i<count;i++)
			{
				ccc='<tr class="order-item"><td class="place">'+data.m[i].place+'</td><td class="count">'+data.m[i].dnum+'道菜</td><td class="person-num">'+data.m[i].pnum+'人</td><td class ="money">'+data.m[i].sum+'元</td><td class ="time">'+data.m[i].time+'</td></tr>';
				
				ddd='<tr class="order-detail"><td colspan="5"><ul>';	
				for(var j=0;j<count_n;j++)
				{
					
					if(data.n[j].time==data.m[i].time){
						//alert(data.n[j].time+","+data.n[j].name+","+data.n[j].price+","+data.m[i].time);
						ddd=ddd+'<li class="food"><img src="pic/'+data.n[j].name+'.jpg" alt="" class="food-img"><p class="food-tip"><span class="fodd-name">'+data.n[j].name+'</span><span class="food-price">'+data.n[j].price+'元</span></p></li>';
					}	
				}
				ddd=ddd+'</ul></td></tr>';
				$(".order-list").append(ccc+ddd);
			}
    }
		},"json");
  }
});
