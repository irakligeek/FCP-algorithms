
(function(){
//users who regularly stream
var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
var html;
var isOnline = false;
var statusDetails = '';
var online = [];
//loop through the twitchers array
$.each(twitchers ,function(index, value){
    //get channels info
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+ value +'?callback=?', function(data) {
        var html = '<a href="'+ data['url'] + '" target="_blank" id="'+ value +'" class="list-group-item thumbnail"><img src="'+ data['logo'] +'"/><h3 class="list-group-item-heading">'+ data['display_name'] +'</h3><p class="list-group-item-text"><span class="status-details">Offline</span></p></a>';
    $('#status').append(html);

      //get stream details
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ value +'?callback=?', function(data) {
        if(data['stream']){ //if currently streaming
          statusDetails = data['stream']['game'];
          //display stream details
          $('#' + value + ' .status-details').html(statusDetails);
          $('#' + value).addClass('online');
          //add online streamers to online array
          online.push(value);
        }
      });//end inner getJSON
    });//end getJSON
  });//end each loop
  
  //display all channel on clicking All button
  $('#show-all').click(function(e){
    $('.list-group-item').show();
  });
  //display online channels only when clicking online button
  $('#show-online').click(function(e){
    //first show all streams
     $('.list-group-item').show();
    $.each(online, function(index, value){
      var online = value;
      $.each(twitchers, function(index, value){
        //hide all streams that are not online
        if(value !== online){
          $('#' + value).hide();
        }
      });
    });
  });
  
  //display offline channels only
  $('#show-offline').click(function(e){
    //first show all streams
     $('.list-group-item').show();
    $.each(online, function(index, value){
      $('#' + value).hide();
    });
  });
  
  //perform search
  $('#search-box').on("input", function() {
    //show all twitchers first
    $('.list-group-item').show();
    var input = this.value;
    //loop through array of twitchers
    $.each(twitchers, function(index, value){
        if(input.toLowerCase() === value.toLowerCase()){
          //first show all twitchers
          $('.list-group-item').hide();
          //show only twitcher matched search criteria
          $('#' + value).show();
        }
        
    });
});

  
  
})();//end self calling function

