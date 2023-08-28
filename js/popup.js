const timeElement = document.querySelector("#time");
const nameElement = document.querySelector("#name");
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

chrome.storage.sync.get(["name"], (result) => {
  const name = result?.name ?? "???";

  nameElement.textContent = `Your name is: ${name}`;
});
