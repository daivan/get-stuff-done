let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.runtime.onInstalled.addListener((reason) => {
  //if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'onboarding.html'
    });
  //}
});


   // Save it using the Chrome extension storage API.
   chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
    console.log('Settings saved');
  });

  // Read it using the storage API
  chrome.storage.sync.get(['foo', 'bar'], function(items) {
    console.log('Settings retrieved', items);
  });
