//needed to seamlessly make ajaxrequests (couldn't find any other solution)
var proxy = 'https://cors-anywhere.herokuapp.com/';
//main api endpoint
var apiUrl = 'https://en.wikipedia.org/w/api.php';
//full article url when id is added
var listingUrl = 'http://en.wikipedia.org/?curid='

//add various effects when searhing
$('.search-field').on('focus', function(e){
  $('.form-control').animate({
              "height": "80px",
              "font-size": "2em"
              });
  $('#dim').css("display", "block");
});
$('.search-field').on('blur', function(e){
  $('.form-control').animate({
              "height": "40px",
              "font-size": "1em"
  });
  $('#dim').css("display", "none");
});

//when search is executed
function executeSearch( field ){
  $('#dim').css("display", "none");
  var squery = $(".search-field").val();//test
  if(!squery){
    //alert for empty string
    alert("Please enter your query");
  }else{
    //clean previus search result
    $(".list-unstyled").empty();
    //perform search
    console.log( "Search query is: " + $(".search-field").val() );
    //make ajax call
  $.ajax({
        url: proxy + apiUrl,
        method: 'GET',
        data : {
          action: 'query',format: 'json',prop: 'extracts|pageimages',
          continue: '||pageprops|info', generator: 'search',
          utf8: 1, ascii: 1, exchars: 250, exlimit:10, exintro: 1, explaintext: 1,
          exsectionformat: 'plain', piprop: 'thumbnail', pithumbsize: 100, pilimit: 6,
          pilicense: 'any', gsrsearch: squery, gsrlimit: 10, gsrwhat: 'text'
        },
        error: function(e){
          console.log(e);//show error
        },
        complete: function(e){
          //check if results have query object
          if(!e.responseJSON.hasOwnProperty('query')){
            alert('Nothing Found... Please try a different query');  
          }
        },
        success: function(data){
          // console.log(data);//test
          var queryRestuls = data.query;
          //loop through the results
          $.each(queryRestuls, function(index) {
            var results = queryRestuls[index];
            $.each(results, function(index) {
              var result = results[index];
              //create article url with unique pageid
              var url = listingUrl + result.pageid;
              //if we have thumbnail image add it as well
              if(result.hasOwnProperty('thumbnail')){
                var thumbnail = result.thumbnail;
                //create results html wth thumbnail
                $('.list-unstyled').append(
                '<li><div class="panel panel-default"><div class="panel-heading"><a href="'+ url +'" target="_blank"><h4>' + result.title +'</h4></a></div><div class="panel-body"><img src="'+ thumbnail.source +'" alt="article Image" /><p>'+ result.extract +'</p></div></div></li>'
              );
              }else{//create results html wthout thumbnail
                $('.list-unstyled').append(
                '<li><div class="panel panel-default"><div class="panel-heading"><a href="'+ url +'" target="_blank"><h4>' + result.title +'</h4></a></div><div class="panel-body"><p>'+ result.extract +'</p></div></div></li>');
              }
            });//innder each
          });//outer each
        }//success
    });//ajax 1
  }//end else
}//executeSearch function

