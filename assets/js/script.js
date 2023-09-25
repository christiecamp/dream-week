//current date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//saveBtn click listener and nearby values in JQuery
$(document).ready(function(){
  $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //saving text in local storage using above variables
    localStorage.setItem(time,text);
})
  function timeTracker() {
  //variable for current time
    var timeNow = moment().hour();

  //function to loop and distinguish current time
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
        if (blockTime < timeNow) { //if time is in the past
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {//if time is in the present
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");//if time is in the future
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
  }

  //items in local storage
  $("#hour00.description").val(localStorage.getItem("hour00"));
  $("#hour01.description").val(localStorage.getItem("hour01"));
  $("#hour02.description").val(localStorage.getItem("hour02"));
  $("#hour03.description").val(localStorage.getItem("hour03"));
  $("#hour04.description").val(localStorage.getItem("hour04"));
  $("#hour05.description").val(localStorage.getItem("hour05"));
  $("#hour06.description").val(localStorage.getItem("hour06"));
  $("#hour07.description").val(localStorage.getItem("hour07"));
  $("#hour08.description").val(localStorage.getItem("hour08"));
  $("#hour09.description").val(localStorage.getItem("hour09"));
  $("#hour10.description").val(localStorage.getItem("hour10"));
  $("#hour11.description").val(localStorage.getItem("hour11"));
  $("#hour12.description").val(localStorage.getItem("hour12"));
  $("#hour13.description").val(localStorage.getItem("hour13"));
  $("#hour14.description").val(localStorage.getItem("hour14"));
  $("#hour15.description").val(localStorage.getItem("hour15"));
  $("#hour16.description").val(localStorage.getItem("hour16"));
  $("#hour17.description").val(localStorage.getItem("hour17"));
  $("#hour18.description").val(localStorage.getItem("hour18"));
  $("#hour19.description").val(localStorage.getItem("hour19"));
  $("#hour20.description").val(localStorage.getItem("hour20"));
  $("#hour21.description").val(localStorage.getItem("hour21"));
  $("#hour22.description").val(localStorage.getItem("hour22"));
  $("#hour23.description").val(localStorage.getItem("hour23"));


timeTracker();

})