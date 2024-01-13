(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      // Call byeSpeaker speak method for names starting with 'j'
      byeSpeaker.speak(names[i]);
    } else {
      // Call helloSpeaker's speak method for other names
      helloSpeaker.speak(names[i]);
    }
  }
})();
