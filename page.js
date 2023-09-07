
let cDay = document.getElementById('day');

const date = new Date();

const f = new Intl.DateTimeFormat("en-us",{dateStyle : "full"});

cDay.innerText = f.format(date);


let cTime = document.getElementById('time');

const time = new Date();

const t = new Intl.DateTimeFormat("en-us",{timeStyle : "full"});

cTime.innerText = t.format(time);