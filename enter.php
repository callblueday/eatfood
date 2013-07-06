<html>
<head>
  <title>菜单信息录入</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet/less" href="css/input.less">
  <script src="js/ajax.js"></script>
  <script src="js/jquery-1.7.2.min.js"></script>
  <script src="js/less.js"></script>
</head>

<body>
  <div class="container">
    <form id="entry">
      <div class="content">
        <label class="inner">菜名</label>
      <input type="text" name="name" id="name" placeholder="酸辣大白菜" class="input_height long_width" required />

      <label class="inner">单价</label>
      <input type="text" name="price" id="price" placeholder="10.00" class="input_height long_width" required />元

      <label class="inner">上传图片</label>
      <input type="file" name="pic" id="pic" class="input_height long_width" required/>

      <label class="inner">类型</label>
      <select name="meat" id="meat" class="input_height long_width" required/>
        <option value="0">素菜</option>
        <option value="1">荤菜</option>
        <option value="2">大荤</option>
      </select>

      <label class="inner">颜色</label>
      <select name="color" id="color" class="input_height long_width" required/>
        <option value="0">白</option>
        <option value="1">黄</option>
        <option value="2">红</option>
        <option value="3">绿</option>
        <option value="4">紫</option>
        <option value="5">黑</option>
      </select>
      

      <input type="submit" id="btn"  class="submitbtn"/>

      </div>
    </form>
  </div>
</body>
</html>