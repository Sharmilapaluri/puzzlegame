var currentTime;
var starthours;
var startminutes;
var startseconds;
var endhours;
var endminutes;
var endseconds;
var score = 0;

if (document.getElementById("mybd1")) {
document.getElementById("mybd1").addEventListener("click", started);
function started () {
	currentTime = new Date();
		
	starthours = currentTime.getHours();
	startminutes = currentTime.getMinutes();
	startseconds = currentTime.getSeconds();
	window.location.href = "C:/Users/sharmila/OneDrive/Desktop/elitmus/round1.html";
	flag = flag + 1;

}
}


if (document.getElementById("mybd")) {
document.getElementById("mybd").addEventListener("click", ended);
function ended () {
	currentTime = new Date();
		
	endhours = currentTime.getHours();
	endminutes = currentTime.getMinutes();
	endseconds = currentTime.getSeconds();
	window.location.href = "C:/Users/sharmila/OneDrive/Desktop/elitmus/score.html";
	flag = flag + 1;

}
}

document.getElementById("mybtn1").addEventListener("click", calculateScore);
function calculateScore() {
	  var timeTaken = Math.abs(endseconds - startseconds) + Math.abs(startminutes - endminutes)*60;
	   var timeTaken = Math.floor(Math.random() * (500 - 100 + 1) + 100);
        if (timeTaken <=  120)  {
		score = 95;
	  }
	  else if (timeTaken <=  120)  {
		score = 95;
	  }
	  else if (timeTaken <=  180)  {
		score =89;
	  }
	  else if (timeTaken <=  240)  {
		score = 83;
	  }
	  else if (timeTaken <=  300)  {
		score = 76;
	  }
	  else if (timeTaken <=  360) {
		score = 68;
	  }
	  else if (timeTaken <=  420)  {
		score = 55;
	  }
	  else if (timeTaken <=  480)  {
		score = 46;
	  }
	  else if (timeTaken <=  540)  {
		score = 35;
	  }
        
        if (score >= 35) {
		document.getElementById("score").textContent = score;
	  }
	  else {
		document.getElementById("score").textContent = "FAIL";
	  }
}

