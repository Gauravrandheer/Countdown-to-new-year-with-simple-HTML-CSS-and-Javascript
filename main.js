const newyear = new Date('jan 1, 2022 00:00:00').getTime();

const days = document.getElementById('days');
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function Countd(){
  var d  = new Date().getTime();
  var gap = newyear-d;
  var second = 1000;
  var minute = second*60;
  var hour = minute*60;
  var day = hour*24;


  var d = Math.round(gap/day);
  var h = Math.round((gap%day)/hour)
  var m = Math.round((gap%hour)/minute)
  var s = Math.round((gap%minute)/second)

  console.log(s,m,h,d);
  if(h<10){
    h = "0"+h;
  }
  if(s<10){
    s = "0"+s;
  }
  if(m<10){
    m = "0"+m;
  }
  if(d<10){
    d = "0"+d;
  }

  seconds.innerHTML=s;
  minutes.innerHTML=m;
  hours.innerHTML=h;
  days.innerHTML=d;

}
setInterval(Countd, 1000);
