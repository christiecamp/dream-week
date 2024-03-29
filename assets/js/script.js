//current date
var currentDate = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").text(currentDate);


$(document).ready(function () {
    timeBlocks ();
    renderDream ();

});

//click event saves rendered text - daydreams
//saveBtn click listener and nearby values in JQuery
  $(".saveBtn").click(function () {
      var text = $(this).siblings(".description").val();
      console.log(text);
      var time = $(this).parent().attr("id");
      console.log(time);
      //saving text in local storage using above variables
      localStorage.setItem(time, text);

  });
 
  function timeBlocks() {
  //variable for current time
    var currentHour = moment().hour();

  //loop over blocks and distinguish current time - stored in an array
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      //check the time and add the classes for background indicators
        if (blockTime < currentHour) { //if time is in the past
            $(this).addClass("past");
        } else if (blockTime === currentHour) { //if time is in the present
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past"); //if time is in the future
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
  };
  timeBlocks();

  //function to loop over time blocks and render daydream text
  function renderDream () {
    $(".time-block").each(function () {
      var blockTime = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockTime));
    });
  };

  renderDream ();
