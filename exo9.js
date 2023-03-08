/*
9.1
function div1() {
    var elements = document.getElementsByName("div1");
  
    elements.forEach(function(element) {
      element.innerHTML = "hello";
    });
  }
  */

  /*
  9.2
  function div1() {
    var divs = document.getElementsByTagName('div');
    Array.prototype.forEach.call(divs, function(div) {
      if (div.getAttribute('name') === 'div1') {
        div.innerHTML = 'hello';
      }
    });
  }
    */

  /*
  9.3
    function div1() {
      const elements = document.getElementsByClassName('div1');
      Array.from(elements).forEach(element => {
          element.innerHTML = 'hello';
      });
  }
  */