var currentDay = moment();
var currentTime = moment();

$('#currentDay').text(currentDay.format('dddd, MMM Do, YYYY'));

function updateTime(){
$('#currentTime').text(currentTime.format('h:mm:ss a'));
}


updateTime();
setInterval(function(){
   updateTime();
},1000);