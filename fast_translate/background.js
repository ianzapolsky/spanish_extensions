// background for fast_translate
// by Ian Zapolsky (09.10.13)

// quick omnibox extension that links any query directly to a query
// on linguee, my favorite online translator


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + "hola", description: " spanish word: hola"},
      {content: text + "hello", description: " english word: hello"},
      {content: text + "como estás", description: " spanish phrase: como estás"},
      {content: text + "how are you", description: " english phrase: how are you"}
    ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    var url = "http://www.linguee.es/espanol-ingles/search?source=auto&query="+text;
    chrome.tabs.create({ url:url });
  });
