jQuery(function($){

    $(".sort li").click(function(){

      // 1. store data-type attribute
      var color = $(this).attr("data-type"); 

      // 2. hide all matched elements
      $('.objects li').hide(); 

      // 3. if 'color' is not defined hide/show all elements ("show all" button), if color IS defined show elemtnts that match color variable
      (!color) ? $('.objects li').hide().fadeIn(625)  : $('li[data-type="' + color + '"]').fadeIn(625);
      $('.active').removeClass('active'); 
      $(this).addClass('active'); 
    });
    var count = 0;
  
    $('li').hover(
      function(){
        $(this).fadeTo('fast', .75)},
      function(){
        $(this).fadeTo('fast', 1);
    })

    $('li').on('click', function(){
      $(this).return("a")
    });

    $('.drop-box').on('click', function(){
      count++;

      var isEven = function(someNumber){return (someNumber % 2 === 0) ? true : false;
    };   
   if(isEven(count) === false){
      $('.nav').animate({
           height: '+=200px'
       });
   } else if (isEven(count) === true){     
       $('.nav').animate({
           height: '-=200px'
       });
   } 
      
  });
  function glassify(){
  $('.glass').each( function( index ) {
    $(this).before("<div class='glass2' id='glass"+index+"'></div>");
    var h=$(this).outerHeight();
    $('#glass'+index).css('height', (h) + 'px');
    var w=$(this).outerWidth();
    $('#glass'+index).css('width', (w) + 'px');
    var homeOffset=$(this).offset();
    $('#glass'+index).offset({ top: homeOffset.top, left: homeOffset.left });
  });
};

  });