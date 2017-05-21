//twitter url
var _href = "https://twitter.com/intent/tweet?text=";

$('#get-quote').on('click', function(e) {
    e.preventDefault();

  //generate random color
  var color = "#" + Math.floor(Math.random()*16777215).toString(16);
  //retrieve random quote json date with ajax
    $.ajax({
      headers : {
        "X-Mashape-Key" : "Z93P4wynBsmshOqrzRC5sMqsqntWp1O3tjMjsnib82vDM3P6sy",
      },
      "content-type": "application/json",
      url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
      success  : function(data){
        //hide current quote first
        $("#quote h3").animate({ opacity: 0 }, 500, function() { 
          $(this).animate({ opacity: 1 }, 300); //show new quote
           $(this).css({"color" : color,
                        "font-style": "italic" 
                       });//apply color and font style
           
          $("#quote h3").html("<q>" + data.quote + "</q>");//displey new quote
        }); 
        //show twitter button append current quote to it's href
        $(".twitter img").animate({width: "200px"}, 400,function(){
          $("#twitter-btn").attr("href", _href + data.quote);  
        });
      }


    });//ajax
  
});//click