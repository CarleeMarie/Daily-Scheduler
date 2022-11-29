console.log("hello world");
var saveButtonEl = $('.saveBtn');
var saveButtonEl = $('.saveBtn');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
})

var hours = '#hour-13';
hours = hours.split('-');
console.log(hours);
// hours now is an array with hour being 0 and 13 being 1

// use the hours array to store data locally that is specific to each hour
saveButtonEl.on('click', function () {
  console.log("success!");
  function saveEntry() {
    var entry = $(hours[1]).textarea();
    localStorage.setItem("hours[1]", entry());
    $('#hour').children().eq(3).localStorage.setItem("hours[1], entry()");
    
  
  }
});

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //traversing the dom example
   // $('#top').children().eq(4).append($('<li>Classmates</li>'));

  $(".saveBtn").on('click', function(){

  })
  //
  function updateBlocks(){

  }
  // TODO: 1) Add code to apply the past, present, or future class to each time
  dayjs().hour(); // gets current hour (Set to variable)
  console.log(dayjs().hour());
  var timeBlocks = $(".time-block");
  timeBlocks.each(function(){
    if (past) {
      
    } else if (present){

    } else {

    }
  })
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlockHour = $(timeBlocks[i]).attr("id");
    //leverage parseInt (docs) spliting strings
    console.log(timeBlockHour);
  }
// $('DOM OBJECT')
// . calls a function
// .on('click', function(){
//  
// })


dayjs().hour(); // gets current hour
    console.log(dayjs().hour());
  var timeBlocks = $('.time-block');
    for (var i = 0; i < timeBlocks.length; i++) {
     var timeBlockHour = $(timeBlocks[i]).attr('id');
     //leverage parseInt (docs) spliting strings
     console.log(timeBlockHour);

     if (timeBlocks < dayjs().hour()) {
      set CSS class to gray
    } else if (timeBlocks >= dayjs().hour()) {
      set css class to red;
    } else {
      set css class to green;

     if (timeBlocks < dayjs().hour()) {
      set CSS class to gray
    } else if (timeBlocks >= dayjs().hour()) {
      set css class to red;
    } else {
      set css class to green;
    }
    // hours[1]

// function consoleLog(message){console.log(message)}
// .on('click', consoleLog("my message"))
  //block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Adds code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd, MMMM DD');
  $('#currentDay').text(currentDate);
});
