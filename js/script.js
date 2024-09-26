let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function update() {
    let now = new Date();
    date.innerText = now.getDate();
    day.innerText = days[now.getDay()];
    month.innerText = months[now.getMonth()];
    year.innerText = now.getFullYear();
}

document.body.onload = () => {
    setInterval(update, 1000);
    setTimeout(() => {
        document.getElementsByClassName("content")[0].style.height = "260px";
        document.getElementsByClassName("card")[0].style.color = "#fff";
    }, 500);
};