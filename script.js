

var currentTime = moment().format('LLLL');
$("#currentDay").text(currentTime);

setInterval(function () {
    currentTime = moment().format('LLLL');
    $("#currentDay").text(currentTime);

    // call function here to set colors based on time of day

    // \/ get rid of this before completing \/
    console.log("ran interval")
}, (1000 * 60) * 1);


$(".container").on("click", ".time-block-content", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("col-10 bg-light textArea")
        .val(text);
    $(this).replaceWith(textInput);



    textInput.trigger("focus");
    console.log("clicked");
    console.log(text);
    console.log(textInput);
    console.log(this);
    console.log(event);
});

$(".container").on("click", ".saveBtn", function () {

    var test = $(this).parent().children(".textArea")
        .val()
        .trim();

    var textInput = $("<div>")
        .addClass("col-10 bg-light pt-2 time-block-content")
        .text(test);

    $(this).parent().children(".textArea").replaceWith(textInput);

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
    console.log(this);
    // console.log("next row is text area");
    // console.log($(this).closest("textarea"));
    // console.log(event);
    // console.log(test);
    // console.log(test2);
});


