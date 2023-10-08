var dateDisplayEl = $("#current-day");
var timeBlock = $(".time-block");
// var eventDescriptionInputEl = $(".description");
var saveButton = $('.saveBtn');
var todayDate = dayjs().format('dddd, MMMM D');
var nowHour = dayjs().format('HH');
// console.log(nowTime);
// var currentHour = $('div').id
// console.log($('div'))

function displayDay() {
  dateDisplayEl.text(todayDate);
}

displayDay();

function init() {
  var localStorageObj = localStorage
  var arryLocalStorageObj = Object.entries(localStorageObj) // return array of object

  for (var i = 0; i < arryLocalStorageObj.length; i++) {
    var localStoragePair = arryLocalStorageObj[i]
    var key = localStoragePair[0]
    var value = localStoragePair[1]

    //TODO check if jqeury found element by key, if NOT skip
    // TODO potential refactor to loop elemtns ONCE and fetch existing data
    if (key) {
      $('#' + key).children(".description").val(value)
    }
  }

  var listOfParentContainer = $("div[id^=hour-")

  for (var i = 0; i < listOfParentContainer.length; i++) {
    // console.log(listOfParentContainer[i].id, nowHour)
    // var parent = listOfParentContainer[i]
    // console.log(parent)
    // var replacedNum = $('#' + listOfParentContainer[i].id).children(".hour").text()
    // console.log(replacedNum)

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


  // for (var [key, value] of Object.entries(localStorage)) {
  //   console.log(`${key}: ${value}`);
  // }
  // var storedEvents = localStorage.getItem("event");
  // var testData = { 'hour-9': "this is some text", "hour-10": 'this is some other text', "hour-11": 'this is more text', "hour-9": "this is more" }
  // console.log(storedEvents);
  // if (storedEvents !== null) {
  //   $("<textarea>").text(storedEvents);
  // }
}

function saveEvent(event) {
  event.preventDefault();
  var parentContainerID = $(event.target).parent()[0].id
  var parentContainer = $(event.target).parent()
  var eventDescriptionInputEl = parentContainer.children('textarea').val();
  if (parentContainerID) {
    localStorage.setItem(parentContainerID, eventDescriptionInputEl);
  }
  // var btnId = event.target.id
  // var timeBlockId = btnId.replace("-button", "");
  // console.log("Testarea", $(timeBlockId + '+ description'))
  // var eventDescription = $(timeBlockId + '+ description').val() // "hour-9 + descrition"
  // console.log(eventDescription);
  // localStorage.setItem("event", eventDescription);
}

saveButton.on('click', saveEvent);

init();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

function changeColor() {
  var currentHour = $('div');
  consolelog(currentHour)
}
// if (currentHour == nowTime) {
//   eventDescriptionInputEl.attr('present')
// }; else if (currentHour > nowTime) {
//   eventDescriptionInputEl.attr('future')
// }; else (currentHour < nowTime) {
//   eventDescriptionInputEl.attr('past')
// };
// }

// var findElement = $(".test")
// if(findElement.length <= 0) {
//   return
// }

//logic to update DOM

// find each parent id
// get current hour from time
//compare parent id with out prefix to current hour
// inject css base on result