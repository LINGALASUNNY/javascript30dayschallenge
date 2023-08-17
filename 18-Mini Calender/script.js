
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


let d=new Date();

document.getElementById("date").innerHTML=d.getDate();
document.getElementById("day").innerHTML=days[d.getDay()];
document.getElementById("year").innerHTML=months[d.getMonth()];
document.getElementById("month").innerHTML=d.getFullYear();