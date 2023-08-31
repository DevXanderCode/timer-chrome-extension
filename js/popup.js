const timeElement = document.querySelector("#time");
const nameElement = document.querySelector("#name");
const timerElement = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

function updateTimeElements() {
  // console.log("Logging popup");

  chrome.storage.local.get(["timer"], (res) => {
    const time = res?.timer ?? 0;
    timerElement.textContent = `Timer is at: ${time} seconds`;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is: ${currentTime}`;
}
updateTimeElements();
setInterval(updateTimeElements, 1000);

chrome.storage.sync.get(["name"], (result) => {
  const name = result?.name ?? "???";

  nameElement.textContent = `Your name is: ${name}`;
});

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
});
