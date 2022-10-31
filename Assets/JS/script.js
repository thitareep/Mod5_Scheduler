// To display current day at top of calendar //
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// Timeblocks are color-coded to indicate if it's the past, present, or future //
function tbColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future")
        }
    })
};

// To color code each hour //
tbColor();

var saveBtn = $(".saveBtn");
// Click event for save button. Save description to local storage

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

// Make saved events persist after refreshing page
function descriptionSave () {
    $(".hour").each(function() {

        var hour = $(this).text();
        var description = localStorage.getItem(hour);

        if(description !== null) {
            $(this).siblings(".description").val(description);
        };
    });
}

// So saved events persist even after refreshing page //
descriptionSave();