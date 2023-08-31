chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("Logging alarm", self);
  chrome.storage.local.get(["timer"], (res) => {
    const time = res?.timer ?? 0;
    console.log("Timer", time);
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });

    self.registration.showNotification("Chrome Timer Extension", {
      body: "1 second has passed!",
      icon: "icon.png",
    });
    // chrome.notifications.create({
    //   type: "basic",
    //   iconUrl: "icon.png",
    //   title: "this is title",
    //   message: "Some message",
    // });
  });
});
