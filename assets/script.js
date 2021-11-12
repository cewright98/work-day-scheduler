var currentDay = document.querySelector("#currentDay");
var textInputs = {};

currentDay.textContent = moment().format("LL");

var checkTime = function() {
    for (var i = 9; i < 18; i++) {
        var hourBlock = document.querySelector("#text-box" + i);
        if (moment().isBefore(moment({hour:i}))) {
            hourBlock.classList.add("future");
        } else if (moment().isAfter(moment({hour:i})) && (moment().isBefore(moment({hour:i+1})))) {
            hourBlock.classList.add("present");
        } else {
            hourBlock.classList.add("past");
        }
    }
};

var loadTextInputs = function(textBoxId) {
    for (i = 9; i < 18; i++) {
        document.querySelector("#text-box" + i).textContent = localStorage.getItem(i);
    }
};

$("button").click(function(event) {
    var textBoxId = event.target.previousElementSibling.id;
    var textBoxNumber = textBoxId.split("x");
    console.log(textBoxNumber);
    var textContent = document.getElementById(textBoxId).value;
    
    localStorage.setItem(textBoxNumber[2], textContent);
});

loadTextInputs();

checkTime();