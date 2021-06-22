var date = moment().format('dddd, MMMM Do YYYY');
var currentDay = $('#currentDay');
currentDay.text(date);

var scheduleEvents = $('.description');
var currentHour = moment().format('HH');
var hours = $('.hour');
var compare;

var saveButton = $('.saveBtn');

for (i = 0; i < scheduleEvents.length; i++) {
  let selectedEl = scheduleEvents[i];
  compare = selectedEl.dataset.time;
  if (currentHour === compare) {
    selectedEl.classList.add('present');
  }
  else if (currentHour > compare) {
    selectedEl.classList.add('past');
  }
  else if (currentHour < compare) {
    selectedEl.classList.add('future');
  }
}

function save(id) {
  let schedule = $(id);
  let eventText = schedule[0].value;
  localStorage.setItem(id, eventText);
}

scheduleEvents.each(function() {
  var savedId = "#" + this.id;
  $(this).attr('placeholder', localStorage.getItem(savedId));
})
