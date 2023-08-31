const nameInput = document.querySelector("#name-input");
const timeInput = document.querySelector("#time-input");
const saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({ name, notificationTime });
});

chrome.storage.sync.get(["name", "notificationTime"], (result) => {
  console.log("name gotten is ", result);
  nameInput.value = result?.name ?? "???";
  timeInput.value = result?.notificationTime ?? 1000;
});
