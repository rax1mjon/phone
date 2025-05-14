let SetAlarm = document.querySelector(".SetAlarm");
let setAlarmForm = document.querySelector(".setAlarmForm");
let playList = document.querySelectorAll(".play");
let stopAudio = document.querySelector(".stop");
let x = document.querySelector(".X");

SetAlarm.addEventListener("click", function (e) {
  alarmValue = inputTime.value;
});

playList.forEach((el) => {
  el.addEventListener("click", () => {
    alarmMusic.play();
  });
});

stopAudio.addEventListener("click", () => {
  alarmMusic.pause();
});

x.addEventListener("click", () => {
  document.querySelector(".alarm-control").classList.remove("show-alarm");
});
