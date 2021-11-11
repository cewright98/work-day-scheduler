var currentDay = document.querySelector("#currentDay");

currentDay.textContent = moment().format("LL");

var checkTime = function() {
    for (var i = 9; i < 18; i++) {
        var hourBlock = document.querySelector("#text-box" + i);
        if (moment().isBefore(moment({hour:i}))) {
            hourBlock.classList.add("past");
        } else if (moment().isAfter(moment({hour:i})) && (moment().isBefore(moment({hour:i+1})))) {
            hourBlock.classList.add("present");
        } else {
            hourBlock.classList.add("future");
        }
    }
};

var saveText = function() {
    console.log("saved");
};

$("button").click(function() {
    alert("clicked");
});

checkTime();