(function (window) {
  var  Hello = {};
  var speakWord = " Hello ";
   Hello.sayHello = function (aa,bb) {
    console.log(aa +speakWord  + bb);
  }
  window.Hello =  Hello;
})(window);
