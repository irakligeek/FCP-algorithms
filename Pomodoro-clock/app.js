(function(){
  var sessionLength, breakLength, timer = null, currentLength = null, color = '#ff3b30', massage = 'session';
  
  $('#start').on('click', function(){
    //disable start button and input fields
    $('#start').css({ 'pointer-events': 'none', 'color': '#ff3b30', 
                      'background': '#3d1614'});
    $(".controls").hide();
    // start the session
    sessionLength = parseInt ( $("#session-time").val() );
    breakLength   = parseInt( $("#break-time").val() );
    currentLength = sessionLength; //always starts with a session
    startSession('session');
  });
  
  //displays time
  $('#session-time').on("change", displayTime);
  function displayTime(){
    var minutes = parseInt ( $("#session-time").val() );
    //display input values
    var hours = 0;
    while(minutes > 60){
      hours++;
      minutes = minutes - 60;
    }
    $(".time-display").html( hours + "h : " + minutes + "m" + ": 00s");
  }
  
  //reset values on clicking reset button
  $('#reset').on('click', function(){
    resetValues();
  });
  
  function startSession(current){
    //progress bar color
    color = current === 'session' ? '#ff3b30' : '#19351e';
    //update progress bar
    updateProgressBar( currentLength, color );
    //display massage
    displayMassage(current);
    //covert minutes to seconds
    currentLength = currentLength * 60;
    
    //start timer
    timer = setInterval(function(){
      // Get currnet date and time
      var now = new Date().getTime();
      //add length(minutes) to current time
      var countDown = now + (currentLength * 1000);
      // Find the distance between now an the countdown  date
      var distance =  countDown - now;
      // Time calculations for hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      currentLength--; //countdown seconds
      
      //Output the result in an element with id="demo"
      $(".time-display").html( hours + "h : " + minutes + "m : "  + seconds + "s " );
      
      //if count down is over, switch to another session
      if (currentLength < 0){
        //set current timer to "break" if it's "session" or "session" if it's "break"
          if ( current === 'session'){
            current = 'break';
            currentLength = breakLength;
          }else{
            current = 'session';
            currentLength = sessionLength;
          }
          clearInterval(timer);//clear current timer
          startSession(current);//switch to another session
      }
      
    }, 1000);//timer
  }//startSession

  function updateProgressBar(length, color){
    var progressBarWidth = $('.progressBar').width();
    $('.progressBar').css({'background': color, 'width' : "100%"});
    var animLength = length * 1000 * 60;//seconds to milliseconds
    animLength = animLength+1000;
    $('.progressBar').animate({
            width: 0
     }, animLength, 'linear');
  }
  
  //reset values on reset button click
  function resetValues() {
    clearInterval(timer);
    $('.time-display').html('00:00:00');
    //disable start button and input fields
    $('#start').css({ 'pointer-events': 'auto', 'color': '#fff', 
                      'background': '#19351e'});
    $("#break-time").prop("disabled", false);
    $("#session-time").prop("disabled", false);
    //reset input fields
    $('#session-time').val(1);
    $('#break-time').val(1);
    $('.progressBar').css('width', "100%").stop();//reset progress bar
    $('.massage').hide();
    $(".controls").show();
  }
  
  function displayMassage(message){
    if(message === 'session'){message = 'work'};
    $('.massage').html(message);
    $('.massage').show();
    //hide massage
    setTimeout(function(){
      $('.massage').hide();
    }, 1000);
  }

})();

