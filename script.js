var dateDisplayEl = $("#current-day");
var timeBlock = $(".time-block");
var saveButton = $('.saveBtn');
var todayDate = dayjs().format('dddd, MMMM D');
var nowHour = dayjs().format('HH');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  saveButton.on('click', saveEvent);

  function init() {
    var localStorageObj = localStorage
    var arryLocalStorageObj = Object.entries(localStorageObj) // return array of object
  
    for (var i = 0; i < arryLocalStorageObj.length; i++) {
      var localStoragePair = arryLocalStorageObj[i]
      var key = localStoragePair[0]
      var value = localStoragePair[1]
  
     
      if (key) {
        $('#' + key).children(".description").val(value)
      }
    }
  
    var listOfParentContainer = $("div[id^=hour-")
  
    for (var i = 0; i < listOfParentContainer.length; i++) {
  
      var replacedNum = listOfParentContainer[i].id.replace('hour-', "")
  
      var eventDescriptionInputEl = $("#" + listOfParentContainer[i].id).children("textarea.description")
      if (replacedNum == nowHour) {
        eventDescriptionInputEl.addClass('present')
      } else if (replacedNum > nowHour) {
        console.log(replacedNum, nowHour, replacedNum > nowHour)
        eventDescriptionInputEl.addClass('future')
      } else {
        eventDescriptionInputEl.addClass('past')
      }
  
      
    }
  }

  function saveEvent(event) {
    event.preventDefault();
    var parentContainerID = $(event.target).parent()[0].id
    var parentContainer = $(event.target).parent()
    var eventDescriptionInputEl = parentContainer.children('textarea').val();
    if (parentContainerID) {
      localStorage.setItem(parentContainerID, eventDescriptionInputEl);
    }
  }

  function displayDay() {
    dateDisplayEl.text(todayDate);
  }
  
  displayDay();

  init();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});