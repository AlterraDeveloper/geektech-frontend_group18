const timeWrapper = document.getElementById("counterTimer");
const startDate = new Date(2022, 9, 1, 20, 0, 0); // 1 октября 2022

const daysCounterElement = timeWrapper.querySelector("#timer-days-value");
const hoursCounterElement = timeWrapper.querySelector("#timer-hours-value");
const minutesCounterElement = timeWrapper.querySelector("#timer-minutes-value");
const secondsCounterElement = timeWrapper.querySelector("#timer-seconds-value");

function GetDiffDate(date) {
  const dateNow = new Date();
  return date - dateNow;
}

function ExtractDaysFromDiffDate(diffDate) {
  return Math.floor(diffDate / (24 * 60 * 60 * 1000));
}

function ExtractHoursFromDiffDate(diffDate) {
  return Math.floor((diffDate % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
}

function ExtractMinutesFromDiffDate(diffDate) {
  return Math.floor((diffDate % (60 * 60 * 1000)) / (1000 * 60));
}

function ExtractSecondsFromDiffDate(diffDate) {
  return Math.floor((diffDate % (60 * 1000)) / 1000);
}

setInterval(() => {
  daysCounterElement.innerHTML = ExtractDaysFromDiffDate(
    GetDiffDate(startDate)
  );
  hoursCounterElement.innerHTML = ExtractHoursFromDiffDate(
    GetDiffDate(startDate)
  );
  minutesCounterElement.innerHTML = ExtractMinutesFromDiffDate(
    GetDiffDate(startDate)
  );
  secondsCounterElement.innerHTML = ExtractSecondsFromDiffDate(
    GetDiffDate(startDate)
  );
}, 1000);
