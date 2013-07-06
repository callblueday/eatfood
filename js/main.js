$(document).ready(function(){

  initLayout();

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
  // console.log(document.body.offsetWidth + '-'+ 
  //  document.body.offsetHeight);

    var w = document.body.offsetWidth + 'px';
    $(".pane").css("width", w);
}