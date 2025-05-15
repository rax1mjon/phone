let dateSpan = document.querySelector(".date span");
let dateNow = document?.querySelector(".alarm-body_now h3");
let closeBtn = document?.querySelector(".close");
let allBtn = document.querySelectorAll("button");
let inputTime = document?.querySelector('[type="time"]');
let alarmValue;
let alarmMusic = document?.querySelector("audio");

allBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let NowDate;
function getTime() {
  NowDate = new Date().toLocaleTimeString().slice(0, 5);
  dateSpan.innerHTML = NowDate;
}
getTime();

if (inputTime) inputTime.value = NowDate;

function getSecountTime() {
  if (dateNow) dateNow.innerHTML = new Date().toLocaleTimeString();
}

getSecountTime();

setInterval(() => {
  getSecountTime();

  if (alarmValue == NowDate && alarmMusic) {
    alarmMusic.play();
    document.querySelector(".alarm-control").classList.add("show-alarm");
    alarmValue = "";
  }
}, 1000);

setInterval(() => {
  getTime();
}, 6000);

let watch = document.querySelectorAll(".alarm-btn");

watch.forEach((el) => {
  el.addEventListener("click", () => {
    location.href = "alarm.html";
  });
});

function getAlarmItem(el) {
  return `
  <li class="alarm-item">
    <div class="alarm-item_body">
      <h4>el<sub>AM</sub></h4>
      <span>alarm</span>
    </div>
    <label class="switch">
      <input checked="" type="checkbox">
      <div class="slider">
        <div class="circle">
          <svg class="cross" xml:space="preserve" style="enable-background:new 0 0 512 512"
            viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path data-original="#000000" fill="currentColor"
                d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0">
              </path>
            </g>
          </svg>
          <svg class="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512"
            viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path class="" data-original="#000000" fill="currentColor"
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z">
              </path>
            </g>
          </svg>
        </div>
      </div>
    </label>
  </li>`;
}

closeBtn?.addEventListener("click", () => {
  history.go(-1);
});

// *********** batary *************
let batteryText = document.querySelector(".batary span");

navigator.getBattery().then((bObj) => {
  let batteryLevel = bObj.level * 100;
  batteryText.innerHTML = batteryLevel + "%";
});

setInterval(() => {
  let batteryBackground = document.querySelector(`.rect-bg`);

  navigator.getBattery().then((bObj) => {
    let batteryLevel = bObj.level * 100;

    batteryBackground.style = `width: ${batteryLevel - 25}%; fill: white;`;

    batteryLevel = bObj.level * 100;

    if (navigator.onLine) {
      if (batteryLevel > 20) {
        batteryText.style = `
      color:rgba(37, 31, 31, 0.79);
      `;
        batteryBackground.style = `
      width: ${batteryLevel - 25}%;
      fill: rgb(0, 255, 26);
      `;
      } else {
        batteryText.style = `
          color:rgba(255, 0, 0, 0.71);
         `;
      }
    } else {
      if (batteryLevel <= 20) {
        batteryText.style = `
      color:rgba(255, 255, 255, 0.79);
      `;
        batteryBackground.style = `
      width: ${batteryLevel - 25}%;
      fill: rgb(255, 0, 0);
      `;
      } else {
        batteryText.style = `
          color:rgba(0, 0, 0, 0.71);
         `;
        batteryBackground.style = `
      width: ${batteryLevel - 25}%;
      fill: rgb(255, 255, 255);
      `;
      }
    }
    batteryText.innerHTML = batteryLevel + "%";
  });
}, 1000);

// ********** location to camera ***************

let cameraIcon = document.querySelector(`[src="./images/App Icon-13.svg"]`);

cameraIcon?.addEventListener("click", () => {
  location.href = "camera.html";
});

