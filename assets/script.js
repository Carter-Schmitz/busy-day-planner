var currentDay = moment();
var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var timeBlocks = $('.timeBlocks');

// sets the currentDay element to the current day
$('#currentDay').text(currentDay.format('dddd, MMM Do, YYYY'));

// Sets the currentTime element to display the current time
function updateTime() {
    $('#currentTime').text(moment().format('h:mm:ss a'));
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

// Prepares the DOM then creates the following functions
$(document).ready(function () {

    // Save button functionality. Saves input field to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // Compares the current hour from moment to the ids assigned to the input fields. Then adds or removes classes depending on past, present and future
    function timeTracker() {
        var timeNow = moment().hour();
        console.log(timeNow);

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    timeTracker();
});

// pulls values from local storage for the timeblock input fields
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// createSlots();

// sets current time to update every second
updateTime();
setInterval(function () {
    updateTime();
}, 1000);