var browser = browser || chrome;

browser.storage.local.get({
}, function(items) {
  var url = 'https://minsomai.github.io/typali/';
  document.querySelector("#transliteration").src= url;
});
