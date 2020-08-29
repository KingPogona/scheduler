// define variables
var fieldContents = [];
// console.log(fieldContents);

var currentTime = moment();
var formattedTime = moment(currentTime).format('LLLL');


// ********** save and loading functions **********
// loads from local storage
function loadContent() {
    loadedContents = JSON.parse(localStorage.getItem("workdaySchedule"));
    // console.log(loadedContents);

    if (!loadedContents) {
        loadedContents = Array(9).fill("");
    };

    fieldContents = loadedContents;

    $(".time-block-content").each(function () {

        let rowNumber = $(this).parent().attr("id")
        rowNumber = parseInt(rowNumber.replace("row-", ""));
        $(this).text(fieldContents[rowNumber]);
    });
};
// run load content
loadContent();

// saves to local storage
function saveContent() {
    localStorage.setItem("workdaySchedule", JSON.stringify(fieldContents));
};


//  ********** time related functions **********
// colors the content divs according to relative time of day
function colorCode(cTime) {

    cTime = moment(cTime).format("HH");
    // console.log(cTime);

    $(".time-block-content").each(function () {
        let testContent = $(this).parent().children(".hour").text().trim().toLowerCase();
        let pmMatch = testContent.match(/pm/);
        let timeValue = parseInt(testContent);

        let currentClass = $(this).attr("class");
        currentClass = currentClass.replace("past", "");
        currentClass = currentClass.replace("present", "");
        currentClass = currentClass.replace("future", "");

        $(this).attr("class", currentClass);

        if (pmMatch && timeValue != 12) {
            // console.log(testContent + " is in the afternoon")
            timeValue += 12
        }

        if (timeValue < cTime) {
            // console.log("timeValue is less than cTime (24Hour)")
            $(this).addClass("past");
        }
        else if (timeValue == cTime) {
            // console.log("timeValue is equal to cTime (24Hour)")
            $(this).addClass("present");
        }
        else {
            // console.log("timeValue is greater than cTime (24Hour)")
            $(this).addClass("future");
        }
    });

    $(".textArea").each(function () {
        let testContent = $(this).parent().children(".hour").text().trim().toLowerCase();
        let pmMatch = testContent.match(/pm/);
        let timeValue = parseInt(testContent);

        let currentClass = $(this).attr("class");
        currentClass = currentClass.replace("past", "");
        currentClass = currentClass.replace("present", "");
        currentClass = currentClass.replace("future", "");

        $(this).attr("class", currentClass);

        if (pmMatch && timeValue != 12) {
            // console.log(testContent + " is in the afternoon")
            timeValue += 12
        }

        if (timeValue < cTime) {
            // console.log("timeValue is less than cTime (24Hour)")
            $(this).addClass("past");
        }
        else if (timeValue == cTime) {
            // console.log("timeValue is equal to cTime (24Hour)")
            $(this).addClass("present");
        }
        else {
            // console.log("timeValue is greater than cTime (24Hour)")
            $(this).addClass("future");
        }

        // var testContent = $(this).text().trim();
        // console.log(testContent);
        // console.log(timeValue);
    });
}

// run color code before the loop to insure it runs on page load
$("#currentDay").text(formattedTime);
colorCode(currentTime);

// one minute loop that updates time and runs colorCode()
setInterval(function () {
    formattedTime = moment().format('LLLL');
    $("#currentDay").text(formattedTime);

    // call function here to set colors based on time of day
    colorCode(currentTime);

    // console.log("ran interval")
}, (1000 * 60) * 1);



// ********** click handlers **********
// handles when the user clicks out of focus textarea
// converts active textarea back to div
$(".container").on("blur", ".textArea", function () {

    let text = $(this).parent().children(".textArea")
        .val()
        .trim();

    let textInput = $("<div>")
        .addClass("col-10 pt-2 time-block-content")
        .text(text);

    $(this).parent().children(".textArea").replaceWith(textInput);

    colorCode(currentTime);
});

// handles when user clicks on timeblock content div
// converts it to a textarea for text entry
$(".container").on("click", ".time-block-content", function () {
    let text = $(this)
        .text()
        .trim();

    let currentClass = $(this)
        .attr("class");

    currentClass = currentClass.replace("col-10 pt-2 time-block-content", "")

    let textInput = $("<textarea>")
        .addClass("col-10 textArea")
        .addClass(currentClass)
        .val(text);
    $(this).replaceWith(textInput);
    $(".textArea").trigger("focus");


});

// handles when the user clicks on the save button
// gets the text content of that row and runs the save function
$(".container").on("click", ".saveBtn", function () {

    let rowNumber = $(this).parent().attr("id")

    rowNumber = parseInt(rowNumber.replace("row-", ""));

    let text = $(this).parent().children(".time-block-content")
        .text()
        .trim();

    // console.log(rowNumber);
    fieldContents[rowNumber] = text;
    // console.log(fieldContents);

    saveContent();
});









