<?php
/*
 * Created on 2013��7��5��
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
?>
<?
$db_host="localhost";
$db_user="root";
$db_pass="12345";
$db_name="order";
$table_menu="menu";
$table_orderlist="orderlist";
$table_orderdetail="orderdetail";
$UID="byh0205";
$KEY="d791c07ccdfbf255f253";
//$smsMob="13291282213";//byh
// $smsMob="18795880137,15105183121";//test
// $smsMob="18795880137";//zm
//$smsMob="18707190159"; //pf
//$smsMob="15800016566"; //ty
//$smsMob="15105183121"; //hjh
//$smsMob="15868724421"; //xb
$smsMob="13913974462";//利佳餐馆

$smsText="你好，我们中午来吃饭，点下面几个菜：";
//$_POST["act"]==1----添加菜品 
//$_POST["act"]==1----添加菜品
//$_POST["act"]==1----添加菜品
//$_POST["act"]==1----添加菜品
//使用mysql_connet()函数对服务器进行连接，如果出错返回相应的信息
date_default_timezone_set('Asia/Shanghai');
$link=mysql_connect($db_host,$db_user,$db_pass) or die("不能连接到服务器".mysql_error());
mysql_query("SET NAMES UTF-8",$link);//指定编码

if(!mysql_select_db($db_name,$link))
{
  $response['e']=1;
  //echo "连接失败";
}else{
  mysql_query("SET NAMES 'utf8'");
  mysql_query("SET CHARACTER_SET_CLIENT=utf8");
  mysql_query("SET CHARACTER_SET_RESULTS=utf8");
}

if($_POST["act"]==1)//添加菜品
{
  //echo "开始添加";
  $name=$_POST["name"];
  $price=(int)$_POST["price"];
  //$pic=$_POST["pic"];
  //$active=$_POST["active"];
  $meat=(int)$_POST["meat"];
  $color=(int)$_POST["color"];
  if(!mysql_query("INSERT INTO $table_menu( name, price, meat, color)VALUES ('$name', $price, $meat, $color)")) $response['e']=101;
  else 
  {
    $response['e']=200;
  }
}
else if($_POST["act"]==2)//录入订单
{
  //echo "开始添加";
  
  $sum=(int)$_POST["sum"];
  $t=time();
  $place=$_POST["place"];
  $pnum=(int)$_POST["pnum"];
  $dnum=(int)$_POST["dnum"];
  mysql_query("INSERT INTO $table_orderlist ( time0, sum, pnum, dnum, place)VALUES ( $t, $sum, $pnum, $dnum, '$place')");
  
  $n1=1;
  $n2="dish".$n1;
  $n3="num".$n1;
  while($n1 <= $dnum){
    $dish=$_POST[$n2];
    $num=(int)$_POST[$n3];
    
    mysql_query("INSERT INTO $table_orderdetail( time0,amount,name)VALUES ($t,$num,'$dish')");
      $smsText=$smsText.$dish.";";
      $n1++;
      $n2="dish".$n1;
      $n3="num".$n1;
    
  };
  $pretime=$_POST["pretime"];
  if($smsText)
  {
  $smsText=$smsText."人数：".$pnum.",预计到达时间：".$pretime;
  //$str=$str1.$str2.$str3;
  $response['m']="http://utf8.sms.webchinese.cn/?Uid=".$UID."&Key=".$KEY."&smsMob=".$smsMob."&smsText=".$smsText; 
  //if(mysql_query($str))
  $response['e']=200;
  //else $response['e']=101;
	}else $response['e']=101;
  
}
else if($_POST["act"]==3)//查询菜谱
{
  $count=0;
    $result0=mysql_query("SELECT * FROM $table_menu ORDER BY meat DESC");
      while($row=mysql_fetch_assoc($result0))
      {
        $response['m'][]=array
        (
        "name"=>$row[name],
        "price"=>$row[price],
        "meat"=>$row[meat],
        "color"=>$row[color],
        "id"=>$row[id],
        "meat"=>$row[meat]
        );
        $count++;
        $response['e']=200;
      }
      $response['count']=$count;
      /*$response['m'][]=array
        (
        "name"=>0
        );*/
}
else if($_POST["act"]==4)//查询历史菜单
{
  $result1=mysql_query("select * from  $table_orderlist ORDER BY time0 DESC");
  $kkk=0;
  $kkk_n=0;
      while($row=mysql_fetch_assoc($result1))
      {
        $response['m'][]=array
        (
        "time"=>date("Y-m-d H:i:s",$row[time0]),
        "sum"=>$row[sum],
        "place"=>$row[place],
        "pnum"=>$row[pnum],
        "dnum"=>$row[dnum]
        );
        $response['e']=200;
        $kkk++;
        
      }
      $response['count']=$kkk;
  $result2=mysql_query("select * from  $table_orderdetail ORDER BY time0 DESC");
  
      
      while($row=mysql_fetch_assoc($result2))
      {
        
        $response['n'][]=array
        (
        "time"=>date("Y-m-d H:i:s",$row[time0]),
        "name"=>$row[name],
        "amount"=>$row[amount]
        );
        $kkk_n++;
      }
      $response['count_n']=$kkk_n;  
    $a=0; 
    while($a<count($response['n']))
    {
      $w=$response['n'][$a][name];
      $result3=mysql_query("select * from $table_menu where name = '$w'");
      if($row=mysql_fetch_assoc($result3))
      {
        //$response['n'][$a][price]=$row[price];
        $response['n'][$a][price]=$row[price];
        //$response['s']=$row[price];
      }
      $a++;
    
    }
    
        $response['e']=200;
      
}
else if($_POST["act"]==5)//推荐菜单
{
  $ttt=0;
  $result5=mysql_query("select * from  $table_orderlist ORDER BY time0 DESC limit 6");
  
      
      while($row=mysql_fetch_assoc($result5))
      {
        $ttt=$row[time0];//倒数第五条或最后一条
      }
  $result6=mysql_query("select * from  $table_orderdetail where time0 > $ttt");
      
      $no1=$no2=$no3=$no4=$no5=$no6=$no7=$no8=$no9=$no10=$no11=$no12=$no13=$no14=0;
      
      
      while($row=mysql_fetch_assoc($result6))
      {
        switch ($row[name])
        {
          case "家常豆腐":
            $no1++;
          break;
          case "清炒土豆丝":
            $no2++;
          break;
          case "麻婆豆腐":
            $no3++;
          break;
          case "干锅包菜":
            $no4++;
          break;
          case "韭菜炒鸡蛋":
            $no5++;
          break;
          case "韭菜豆腐丝":
            $no6++;
          break;
          case "丝瓜炒鸡蛋":
            $no7++;
          break;
          case "香菇青菜":
            $no8++;
          break;
          case "干煸四季豆":
            $no9++;
          break;
          case "西红柿炒鸡蛋":
            $no10++;
          break;
          case "肥肠鱼":
            $no11++;
          break; 
          case "酸菜鱼":
            $no12++;
          break; 
          case "雪菜香干炒肉丝":
            $no13++;
          break; 
          case "肉末涨蛋":
            $no14++;
          break; 
        }     
      }
      
      
      if($no1>$no2)$no[0]="家常豆腐";else $no[0]="清炒土豆丝";
      if($no01>$no3)$no[0]=$no[0];else $no[0]="麻婆豆腐";
      if($no01>$no4)$no[0]=$no[0];else $no[0]="干锅包菜";
      
      if($no5>$no6)$no[1]="韭菜炒鸡蛋";else $no[1]="韭菜豆腐丝";
      if($no02>$no7)$no[1]=$no[1];else $no[1]="丝瓜炒鸡蛋";
      
      if($no8>$no9)$no[2]="香菇青菜";else $no[2]="干煸四季豆";
      
      $no[3]="西红柿炒鸡蛋";
      
      if($no11>$no12)$no[4]="肥肠鱼";else $no[4]="酸菜鱼";
      
      if($no813>$no14)$no[5]="雪菜香干炒肉丝";else $no[5]="肉末涨蛋";
      
      /*
      $response['e']=200;
      $response['s']=$no[3];*/
      
      
      for($ii=0;$ii<6;$ii++)
      {
      $nnn=$no[$ii];
      $result7=mysql_query("select * from $table_menu where name='$nnn'");
      while($row=mysql_fetch_array($result7))
      {
        $response['m'][]=array
        (
        "name"=>$row[name],
        "price"=>$row[price],
        "meat"=>$row[meat],
        "color"=>$row[color],
        "id"=>$row[id],
        "meat"=>$row[meat]
        );
      }
      /*$response['m'][]=array
        (
        "name"=>0
        );*/
        $response['e']=200;
        //$response['s']=$no[0].$no[1];
      }
  
  
  
  
}
else if($_POST["act"]==6)//综合分析
{
  

  
  //统计最受欢迎
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 7");
      if($row=mysql_fetch_array($result10))
      {
        $response['name_high']=$row[name];
        $response['e']=200;
      }
  //统计最冷门
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 7");
      while($row=mysql_fetch_array($result10))
      {
        $response['name_low']=$row[name];
        $response['e']=200;
      }
  //最受欢迎排序
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 7");
      $mmm=2;
      while($row=mysql_fetch_array($result10))
      {
        $response['m'][]=array
        (
        "name"=>$row[name]
        );
        $mmm--;
        if($mmm==0)break;
      }
      
      //-------------------周统计----------------------------------
//-----------------------------------------------------------------------------------------------------------------
      //-------------------月统计----------------------------------
  
  
  
  //统计最受欢迎
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 30");
      if($row=mysql_fetch_array($result10))
      {
        $response['y_name_high']=$row[name];
        $response['e']=200;
      }
  //统计最冷门
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 30");
      while($row=mysql_fetch_array($result10))
      {
        $response['y_name_low']=$row[name];
        $response['e']=200;
      }
  //最受欢迎排序
      $result10=mysql_query("SELECT *, count( * ) AS count FROM $table_orderdetail GROUP BY name ORDER BY count DESC LIMIT 30");
      $mmm=0;
      while($row=mysql_fetch_array($result10))
      {
        $response['y_m'][]=array
        (
        "name"=>$row[name]
        );
        
        $mmm--;
        if($mmm==0)break;
      }
}
mysql_close($link);
echo json_encode($response);

//100--链接数据库错误
//101--插入数据库失败
//200--成功
//404--没有数据
?>


