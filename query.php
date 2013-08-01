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
$db_pass="030038";
$db_name="order";
$table_menu="menu";
$table_ourmenu="ourmenu";
//$_POST["act"]==1----添加菜品
//$_POST["act"]==1----添加菜品
//$_POST["act"]==1----添加菜品
//$_POST["act"]==1----添加菜品
//使用mysql_connet()函数对服务器进行连接，如果出错返回相应的信息
$link=mysql_connect($db_host,$db_user,$db_pass) or die("不能连接到服务器".mysql_error());
mysql_query("SET NAMES UTF-8",$link);//指定编码

if(!mysql_select_db($db_name,$link))
{
	$response['e']=1;
	//echo "连接失败";
}

if($_POST["act"]==1)//添加菜品
{
	//echo "开始添加";
	$name=$_POST["name"];
	$price=$_POST["price"];
	$pic=$_POST["pic"];
	//$active=$_POST["active"];
	$meat=$_POST["meat"];
	$color=$_POST["color"];
	if(!mysql_query("INSERT INTO $table_menu( name, price, pic, meat, color)VALUES ('$name', $price, '$pic', $meat, $color)")) $response['e']=200;
	else 
	{
		$response['e']=101;
		//$response['id']=mysql_insert_id();
		
		//echo "添加失败";
	}
}
else if($_POST["act"]==2)//查帖
{
	$post_id=$_POST["post_id"];
	$result=mysql_query("select * from $table_post where id=$post_id");		
		if($row=mysql_fetch_assoc($result))
		{
			$response['m'][]=array
			(
				"time"=>date("Y-m-d H:i:s",$row['time']),
				"color"=>$row[color],
				"content"=>$row[content],
				"title"=>$row[title],
				"email"=>$row[email],
				"name"=>$row[name]
			);
			$result_1=mysql_query("select * from $table_reply where id=$post_id ORDER BY time DESC");
			while($row=mysql_fetch_assoc($result_1))
			{
				$response['m'][]=array
				(
				"time"=>date("Y-m-d H:i:s",$row['time']),
				"color"=>$row[color],
				"content"=>$row[content],
				"email"=>$row[email],
				"name"=>$row[name],
				"uid"=>$row[uid]
				);
			}
			$response['m'][]=array
				(
				"time"=>1
				);
			$response['e']=3;
		}else $response['e']=4;
}
else if($_POST["act"]==3)//回复
{
	$id=$_POST["id"];
	$nick=$_POST["nick"];
	$email=$_POST["email"];
	$ttttt=$_POST["ttttt"];
	$color=$_POST["color"];
	$time=time();
	if(!mysql_query("INSERT INTO $table_reply(id, time, name, color, content, email)VALUES ($id, '$time', '$nick', '$color', '$ttttt', '$email')")) $response['e']=2;
	else 
	{
		$response['e']=5;
	}
}
else if($_POST["act"]==4)//刷新列表
{
	$result_2=mysql_query("select * from $table_post ORDER BY time DESC");
			while($row=mysql_fetch_assoc($result_2))
			{
				$response['m'][]=array
				(
				"time"=>date("Y-m-d H:i:s",$row['time']),
				"color"=>$row[color],
				"name"=>$row[name],
				"id"=>$row[id],
				"title"=>$row[title]
				);
				$response['e']=6;
			}
			$response['m'][]=array
				(
				"time"=>0
				);
}
else if($_POST["act"]==5)//管理员登陆
{
	$id=$_POST["id"];
	$pass=$_POST["pass"];
	if($id=="123"&&$pass=="123")$response['e']=3;
	else $response['e']=1;	
}
else if($_POST["act"]==6)//删帖
{
	$id=$_POST["id"];
	$pass=$_POST["pass"];
	$tiezi_id=$_POST["tiezi_id"];
	if($id=="123"&&$pass=="123"){
		if(mysql_query("DELETE FROM $table_post WHERE id=$tiezi_id"))
		{
			mysql_query("DELETE FROM $table_reply WHERE id=$tiezi_id");
			$response['e']=3;
		}
	}
	else $response['e']=2;
}
else if($_POST["act"]==7)//删帖
{
	$id=$_POST["id"];
	$pass=$_POST["pass"];
	$uid=$_POST["uid"];
	if($id=="123"&&$pass=="123"){
		if(mysql_query("DELETE FROM $table_reply WHERE uid=$uid"))$response['e']=3;
	}else $response['e']=2;
}
mysql_close($link);
echo json_encode($response);

//100--链接数据库错误
//101--插入数据库失败
//200--成功
//404--没有数据
?>


