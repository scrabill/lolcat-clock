var noon = 12;
var evening = 18;
var partyTime = 0;
var napTime = 15;
var lunchTime = 13;
var wakeupTime = 8;

var updateClock = function() {
	// add everythin?
	var time = new Date().getHours();
	// get to and change message
	var messageText = "Hi!";
	var message = document.getElementById("timeEvent");
// get to and change image
	var lolcat = document.getElementById("lolcat");
	var image = "https://bighugelabs.com/img/lolcat-sample.jpg"
	

	if ( time == partyTime ) {
	messageText = "Woo! Time to party!"
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
	}

	else if ( time == napTime ) {
	messageText = "Eugh. Nap time!"
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg"
	}

	else if ( time == lunchTime ) {
	messageText = "Nom nom nom! Lunch time!"
	}

	else if ( time == wakeupTime ) {
	messageText = "Rise and shine!"
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"
	}
	else if ( time < 12 ) {
	messageText = "Good morning!"
	}
	else if ( time > 18 ) {
	messageText = "Good evening!"
	}
	else {
	messageText = "Good afternoon!"
	}
	
	message.innerText = messageText;
	lolcat.src = image;
	showCurrentTime();
};

var showCurrentTime = function() {

     // display the string on the webpage

     var clock = document.getElementById("clock");

     

     var currentTime = new Date();

     var hours = currentTime.getHours();

     var minutes = currentTime.getMinutes();

     var seconds = currentTime.getSeconds();

     var meridian = "AM";

 

     // Set Hours

     if (hours >= noon){

          meridian = "PM";

     }

 

     if (hours > noon){

          hours = hours - 12;

     }

 

     // Set Minutes

     if (minutes < 10){

          minutes = "0" + minutes;

     }

 

     // Set Seconds

     if (seconds < 10){

          seconds = "0" + seconds;

     }

 

     // put together the string that displays the time

     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

 

     clock.innerText = clockTime;

};

 

updateClock();

 

var oneSecond = 1000;

 

setInterval( updateClock, oneSecond);

// party time button

var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var partyEvent = function() {
   
   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "Party Time";
	  partyTimeButton.style.backgroundColor = "#222222";
   }
};

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
	
var napEvent = function()
{
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click',partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);