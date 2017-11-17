// 8) What is node.js? Node.js is used to code the server-side using javascript. it is leand and fast ,uses Google V8 javascript engine. We created our portfolios using node.js.

// 9) What is an example of the usage of an http session? In other words, what are http sessions for? these sessions allow Web servers to maintain user identity and to store user-specific data during multiple request/response interactions between a client application and a Web application. A typical session consist of 3 phases TCP connection is established by the client then the client sends a request and waits for the answer. Then te server will process that request and send it back to the user. The GET and POST method are both examples of that.

// 10. Opportunity for bonus points: mention and explain 2 things which you learned in this course. You may explain by narrative or with an example. Some examples may be: arrow functions, filter, map, reduce, the difference betweem const, let and var, rest parameters, spread operator, modules, etc. 

//1) ive learned how to write less code using the arror function.
//Example//
function add (x,y) {
    return x + y;
  }
  
  var add = function (x,y) {
    return x + y;
  }

  var add = function (x,y) {
    return x + y;
  }
  
  var add = (x,y) => {
    return x + y;
  }

  // 2) Ive always learned the difference between Const and Let.
  //Const will always refer to the same object whereas Let is to use when rebinding is needed. Const should be used by default.