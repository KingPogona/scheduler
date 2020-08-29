

var currentTime = moment();
var formattedTime = moment(currentTime).format('LLLL');
$("#currentDay").text(formattedTime);
colorCode(currentTime);

setInterval(function () {
    formattedTime = moment().format('LLLL');
    $("#currentDay").text(formattedTime);

    // call function here to set colors based on time of day
    colorCode(currentTime);

    // console.log("ran interval")
}, (1000 * 60) * .1);





function colorCode(cTime) {

    cTime = moment(cTime).format("HH");
    // console.log(cTime);

    $(".time-block-content").each(function () {
        var testContent = $(this).parent().children(".hour").text().trim().toLowerCase();
        let pmMatch = testContent.match(/pm/);
        let timeValue = parseInt(testContent);
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











$(".container").on("blur", ".textArea", function () {

    let text = $(this).parent().children(".textArea")
        .val()
        .trim();

    // let currentClass = $(this)
    //     .attr("class");

    // currentClass = currentClass.replace("col-10", "")
    // currentClass = currentClass.relplace("textArea", "")

    let textInput = $("<div>")
        .addClass("col-10 pt-2 time-block-content")
        .text(text);

    $(this).parent().children(".textArea").replaceWith(textInput);

    colorCode(currentTime);
});

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

$(".container").on("click", ".saveBtn", function () {

    // let text = $(this).parent().children(".textArea")
    //     .val()
    //     .trim();

    // let currentClass = $(this)
    //     .attr("class");

    // currentClass = currentClass.replace("col-10", "")
    // currentClass = currentClass.relplace("textArea", "")

    // let textInput = $("<div>")
    //     .addClass("col-10 pt-2 time-block-content")
    //     .text(text);

    // $(this).parent().children(".textArea").replaceWith(textInput);

    // colorCode(currentTime);

    // $(this).closest(".textArea").replaceWith(textInput);




    // var test = $(this).parent().attr('id');
    // var test2 = $(this).closest(".textArea").val();
    // var text = $(this)
    //   .text()
    //   .trim();
    // var textInput = $("<textarea>")
    //   .addClass("col-10 bg-light")
    //   .val(text);
    // $(this).replaceWith(textInput);



    // textInput.trigger("focus");
    // console.log("clicked")
    // console.log(text)
    // console.log(textInput)
    // console.log(this);
    // console.log("next row is text area");
    // console.log($(this).closest("textarea"));
    // console.log(event);
    // console.log(test);
    // console.log(test2);
});