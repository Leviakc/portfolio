const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

const countDown = document.querySelector("[data-date]");

if (!countDown) {
  throw new Error("No launch date provided");
}

const launchDate = countDown.getAttribute("data-date");
const $days = document.querySelector("[data-days]");
const $hours = document.querySelector("[data-hours]");
const $minutes = document.querySelector("[data-minutes]");
const $seconds = document.querySelector("[data-seconds]");

if (typeof launchDate === null) {
  throw new Error("Invalid launch date");
}
const formatTime = (time: number) =>
  Math.floor(time).toString().padStart(2, "0");

const updateTime = () => {
  const diff = Number(launchDate) - Date.now();
  const days = formatTime(diff / DAYS);
  const hours = formatTime((diff % DAYS) / HOURS);
  const minutes = formatTime((diff % HOURS) / MINUTES);
  const seconds = formatTime((diff % MINUTES) / SECONDS);

  if ($days instanceof HTMLElement) {
    $days.innerText = days;
  }

  if ($hours instanceof HTMLElement) {
    $hours.innerText = hours;
  }

  if ($minutes instanceof HTMLElement) {
    $minutes.innerText = minutes;
  }

  if ($seconds instanceof HTMLElement) {
    $seconds.innerText = seconds;
  }
};

updateTime();

setInterval(() => {
  updateTime();
}, 1000);
