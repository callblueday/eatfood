$(document).ready(function(){
  $(".order-item").click(function(){
    $(".order-detail").toggle();
  });

  $(".list-title").click(function(){
    $(".order-list").show();
    $(".analysis-list").hide();
  });

  $(".analysis-title").click(function(){
    $(".order-list").hide();
    $(".analysis-list").show();
  });

});