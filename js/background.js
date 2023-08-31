chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"], (res) => {
    // console.log("Logging background");
    const time = res?.timer ?? 0;
    const isRunning = res?.isRunning ?? true;

    if (!isRunning) {
      return;
    }
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });

    chrome.storage.sync.get(["notificationTime"], (result) => {
      const notificationTime = result?.notificationTime ?? 1000;
      if (time % notificationTime === 0) {
        self.registration.showNotification("Chrome Timer Extension", {
          body: `${notificationTime} second has passed!`,
          icon: "../icon.png",
        });
      }
    });

    // chrome.notifications.create({
    //   type: "basic",
    //   iconUrl: "icon.png",
    //   title: "this is title",
    //   message: "Some message",
    // });
  });
});
