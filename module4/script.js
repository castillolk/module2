(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var fLetter = names[i].charAt(0).toLowerCase();
  if (fLetter === 'j') {
     GoodBye.sayGoodBye(fLetter, names[i]);
  } 
  else {
     Hello.sayHello(fLetter , names[i]);   
   }
}
})();
