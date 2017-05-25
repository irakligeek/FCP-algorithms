//change icon based on icon code passed
function setIcon(wheaterCode){
  var url = "http://openweathermap.org/img/w/";
  url += wheaterCode + ".png";
  $(".wheater-icon").attr("src", url);
}
//converts temp untis
function tempConverter(temp,  unit){
  unit = unit || 'f'; 
  if(unit.toLowerCase() === 'c'){
    var c = temp-273.15;
    return c.toFixed();
  }
  var f = ((temp-273.15)*1.8)+32;
  return f.toFixed();
}

$(document).ready(function(){
  //get user location data
  $.ajax({
        method: 'GET',
        url: 'http://ip-api.com/json',
        error: function(e) {  
          console.log(e.message);
        },
        success: function(location){
          //set city
          $(".city").html(" "  + location.city + ", " + location.countryCode);
          //Get wheater data based on location coordinates
          $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            method: 'GET',
            data : {
              APPID : "6d67560d92324b4289bfa7c27d7d4f2d",
              lat : location.lat,
              lon : location.lon,
              unit : 'Fahrenheit'
            },
            error : function(e) {  
                console.log(e.message);
            },
            success : function(wheaterData){
              //set temperature
              $(".temp").html(tempConverter(wheaterData.main.temp, 'f'));
              //change icons based on wheater icon code from api
              setIcon(wheaterData.weather[0].icon);
              //toggle between temperature units
              $(".switch").click(function(e){
                e.preventDefault();
                if( $(this).attr("id") === 'c'){
                   $(".temp").html(tempConverter(wheaterData.main.temp, 'c'));
                }else{
                   $(".temp").html(tempConverter(wheaterData.main.temp, 'f'));
                }
              });
            }
          });//ajax 2
        }
  });//ajax 1
});

