const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
// const futureDate = new Date(2020, 9, 23, 8, 9, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, mins, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
