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
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const updated = document.querySelectorAll('.deadline_format h4')

let tempDate = new Date();
let tempYear =tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const futureDate = new Date(tempYear, tempMonth, tempDay+9, 23, 59, 59);
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()

giveaway.innerHTML = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}`;

const futureTime = futureDate.getTime();
function getRemainingTime () {
    const today = new Date().getTime()
    const t = futureTime - today
    console.log(t);

    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000

    let days = Math.floor(t/oneDay)
    let hours = Math.floor((t%oneDay)/oneHour)
    let mins = Math.floor((t%oneHour)/oneMinute)
    let secs = Math.floor((t%oneMinute)/1000)

    function format(item){
        if(item<10){
            return(`0${item}`)
        }
        return item;
    }

    let values = [days, hours, mins, secs]
    updated.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })

    if(t<0){
        clearInterval(countdown)
        deadline.innerHTML = `,<h4>unfortunately, the giveaway has expired. too late</h4>`
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()