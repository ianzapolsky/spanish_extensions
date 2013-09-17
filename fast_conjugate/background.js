// background for fast_conjugate
// by Ian Zapolsky (09.17.13)

// quick omnibox extension that links any query directly to a query
// on spanishdict, my favorite online conjugator


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + "saltar", description: " spanish verb: saltar"},
      {content: text + "jump", description: " english verb: jump"},
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    var url = "http://www.spanishdict.com/conjugate/"+text;
    chrome.tabs.create({ url:url });
  });
