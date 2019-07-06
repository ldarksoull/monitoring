function updateCalendar() {
    if (event.target.closest("[data-calendar]")) {
        var calendar = document.querySelector('.calendar');
        calendar.hidden = false;
    } else {
        var calendars = document.querySelectorAll('.calendar');
        if (calendars.length > 0) {
            for (let i = 0; i < calendars.length ; i++) {
                calendars[i].hidden = true;
            }
        }
    }
}
function updateCalendar2() {
    if (event.target.closest("[data-calendar2]")) {
        var calendar = document.querySelector('.calendar-2');
        calendar.hidden = false;
    } else {
        var calendars = document.querySelectorAll('.calendar-2');
        if (calendars.length > 0) {
            for (let i = 0; i < calendars.length ; i++) {
                calendars[i].hidden = true;
            }
        }
    }
}
function updateCalendar3() {
    if (event.target.closest("[data-calendar3]")) {
        var calendar = document.querySelector('.calendar-3');
        calendar.hidden = false;
    } else {
        var calendars = document.querySelectorAll('.calendar-3');
        if (calendars.length > 0) {
            for (let i = 0; i < calendars.length ; i++) {
                calendars[i].hidden = true;
            }
        }
    }
}
function updateCalendar4() {
    if (event.target.closest("[data-calendar4]")) {
        var calendar = document.querySelector('.calendar-4');
        calendar.hidden = false;
    } else {
        var calendars = document.querySelectorAll('.calendar-4');
        if (calendars.length > 0) {
            for (let i = 0; i < calendars.length ; i++) {
                calendars[i].hidden = true;
            }
        }
    }
}

document.addEventListener('click',  updateCalendar, true);
document.addEventListener('touched', updateCalendar, true);
document.addEventListener('click', updateCalendar2, true);
document.addEventListener('touched', updateCalendar2, true);
document.addEventListener('click', updateCalendar3, true);
document.addEventListener('touched', updateCalendar3, true);
document.addEventListener('click', updateCalendar4, true);
document.addEventListener('touched', updateCalendar4, true);
