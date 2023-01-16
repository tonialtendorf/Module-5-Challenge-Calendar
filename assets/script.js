  //day.js current day
  var today = dayjs();
  $('#currentDay').text(today.format('[Today is] MMM D, YYYY, h:mm:ss a'));

  //save to local storage
  $(document).ready(function () {
   $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
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
  $("hour-8 .description").val(localStorage.getItem("08"));
  $("hour-9 .description").val(localStorage.getItem("09"));
  $("hour-10 .description").val(localStorage.getItem("10"));
  $("hour-11 .description").val(localStorage.getItem("11"));
  $("hour-12 .description").val(localStorage.getItem("12"));
  $("hour-13 .description").val(localStorage.getItem("13"));
  $("hour-14 .description").val(localStorage.getItem("14"));
  $("hour-15 .description").val(localStorage.getItem("15"));
  $("hour-16 .description").val(localStorage.getItem("16"));
  $("hour-17 .description").val(localStorage.getItem("17"));

