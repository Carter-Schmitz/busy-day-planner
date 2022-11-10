var currentDay = moment();
var currentTime = moment();
var workHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
var timeBlocks = $('.timeBlocks');

$('#currentDay').text(currentDay.format('dddd, MMM Do, YYYY'));

function updateTime() {
    $('#currentTime').text(currentTime.format('h:mm:ss a'));
}
// function createSlots() {
//     for (let index = 0; index < workHours.length; index++) {
//         var timeSlot = $('<li>')
//         var hour = $('<p>')
//         var block = $('<input>')
//         var saveBtn = $('<button>')

//         timeSlot.addClass('row')
//         hour.addClass('hour col-1')
//         block.addClass('block past col-10')
//         saveBtn.addClass('saveBtn col-1')

//         hour.text(workHours[index])

//         timeBlocks.append(timeSlot)
//         timeSlot.append(hour)
//         timeSlot.append(block)
//         timeSlot.append(saveBtn)
//     }
// };

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".block").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})


    $("#hour1 .block").val(localStorage.getItem("hour1"));
    $("#hour2 .block").val(localStorage.getItem("hour2"));
    $("#hour3 .block").val(localStorage.getItem("hour3"));
    $("#hour4 .block").val(localStorage.getItem("hour4"));
    $("#hour5 .block").val(localStorage.getItem("hour5"));
    $("#hour6 .block").val(localStorage.getItem("hour6"));
    $("#hour7 .block").val(localStorage.getItem("hour7"));
    $("#hour8 .block").val(localStorage.getItem("hour8"));
    $("#hour9 .block").val(localStorage.getItem("hour9"));

// createSlots();

updateTime();
setInterval(function () {
    updateTime();
}, 1000);