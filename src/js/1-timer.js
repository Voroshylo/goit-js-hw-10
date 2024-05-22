import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate = null;
let timerInterval = null;

const startButton = document.querySelector('button[data-start]');
const datePickerInput = document.getElementById('datetime-picker');

const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      showMessage('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      clearMessage();
      startButton.disabled = false;
    }
  },
};

flatpickr(datePickerInput, options);

startButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  datePickerInput.disabled = true;
  startButton.disabled = true;

  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const timeDifference = userSelectedDate - currentTime;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      datePickerInput.disabled = false;
      startButton.disabled = true;
      showMessage('Countdown finished!');
    } else {
      updateTimerDisplay(timeDifference);
    }
  }, 1000);
});

function updateTimerDisplay(timeDifference) {
  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
 }

function showMessage(message) {
  messageDiv.textContent = message;
}

function clearMessage() {
  messageDiv.textContent = '';
}