  //day.js current day
  var today = dayjs();
  $('#currentDay').text(today.format('[Today is] MMM D, YYYY, h:mm:ss a'));

  //save to local storage
  $(document).ready(function () {
   $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.time-block').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
   })
  });
 
 //adds/removes past present future class
 var currentHour = dayjs().hour();
 $(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1];
    
  if (currentHour == timeBlock) {
    $(this).addClass("present");
  } else if (currentHour < timeBlock) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeBlock) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});


  //get from local storage
  $("hour-8 .time-block").val(localStorage.getItem("hour-8"));
  $("hour-9 .time-block").val(localStorage.getItem("hour-9"));
  $("hour-10 .time-block").val(localStorage.getItem("hour-10"));
  $("hour-11 .time-block").val(localStorage.getItem("hour-11"));
  $("hour-12 .time-block").val(localStorage.getItem("hour-12"));
  $("hour-13 .time-block").val(localStorage.getItem("hour-13"));
  $("hour-14 .time-block").val(localStorage.getItem("hour-14"));
  $("hour-15 .time-block").val(localStorage.getItem("hour-15"));
  $("hour-16 .time-block").val(localStorage.getItem("hour-16"));
  $("hour-17 .time-block").val(localStorage.getItem("hour-17"));

