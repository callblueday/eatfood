$(document).ready(function(){

  initLayout();

  orderEvents();


  $(".step1").click(function(){
    setSmoothScroll('#makeorder')
  });

  $(".step2").click(function(){
    setSmoothScroll('#welcome')
  });

  $(".step3").click(function(){
    setSmoothScroll('#success')
  });

  $(".step4").click(function(){
    setSmoothScroll('#makeorder')
  });

  $(".step5").click(function(){
    
  }); 

});

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

function getInfo() {

}

function orderEvents() {
  //order-item click events
  $(".order-item").click(function(){
    alert('niaho');
  });

  //auto-send
  $(".autosend").click(function(){
    alert("autosend");
  });

  // delete click events
  $(".delete").click(function(){
    alert("delete");
  });


}