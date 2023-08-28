const nameInput = document.querySelector("#name-input");
const saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set to ${name}`);
  });
});

chrome.storage.sync.get(["name"], (result) => {
  console.log("name gotten is ", result);
  if (result?.name) {
    nameInput.value = result?.name;
  }
});
