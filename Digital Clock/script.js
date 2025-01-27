let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.display = "flex";
    mn.style.display = "flex";
    sc.style.display = "flex";
    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = (h > 12 ? h - 12 : h);
    h = (h <= 9 ? '0' + h : h);
    s = (s <= 9 ? '0' + s : s);
    m = (m <= 9 ? '0' + m : m);
    am = (h >= 11 ? 'AM' : 'PM');

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    let date = document.getElementById("dd");
    let month = document.getElementById("mm");
    let year = document.getElementById("yy");
    let weekDay = document.getElementById("day");

    let dd = new Date().getDate();
    let mon = new Date().getMonth();
    let yr = new Date().getFullYear();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(typeof(day.getDay()));  //returning value will be in number
    let wkdy = week[day.getDay()];
    dd = dd < 10 ? "0" + dd : dd;
    mon = mon < 10 ? "0" + mon : mon;
    weekDay.innerHTML = wkdy;
    date.innerHTML = dd;
    month.innerHTML = mon;
    year.innerHTML = yr;
    // let mn = new Date().getMonth();12345678901
}, 1000); //function get executed after 1 seconds