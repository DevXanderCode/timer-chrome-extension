const timeElement = document.querySelector("#time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("Finished setting badge text");
  }
);
