// To display current day at top of calendar //
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// Timeblocks are color-coded to indicate if it's the past, present, or future //
function tbColor() {
    // Current time //
    var currentHour = moment().hours();

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));

        // if in the past //
        if (hour < currentHour) {
            $(this).addClass("past");
        // if in the present
        } else if (hour === currentHour) {
            $(this).addClass("present");
        // or if in the future
        } else {
            $(this).addClass("future");
        }
    });
}

// To color code each hour //
tbColor();

// Click event for save button. Save description to local storage
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings("description").val();

    localStorage.setItem(time, plan);
});

// Make saved events persist after refreshing page
function descriptionSave () {
    $(".hour").each(function() {

        var hour = $(this).text();
        var description = localStorage.getItem(hour);

        if(description !==null) {
            $(this).siblings(".description").val(description);
        };
    });
}

// Call function so saved events persist even after refreshing page //
descriptionSave();