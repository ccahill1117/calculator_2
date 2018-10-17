// Nusiness (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#add-numbers").submit(function(event) {
    event.preventDefault();

  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());

  var result = add(number1, number2);

  $("#add-output").text(result);
  });

  // subtraction
  $("form#sub-numbers").submit(function(event) {
    event.preventDefault();

  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());

  var result = subtract(number1, number2);

  $("#sub-output").text(result);
  });

  // multiply
  $("form#mult-numbers").submit(function(event) {
    event.preventDefault();

  var number1 = parseInt($("#mult1").val());
  var number2 = parseInt($("#mult2").val());

  var result = multiply(number1, number2);

  $("#mult-output").text(result);
  });

  // Divide
  $("form#div-numbers").submit(function(event) {
    event.preventDefault();

  var number1 = parseInt($("#div1").val());
  var number2 = parseInt($("#div2").val());

  var result = divide(number1, number2);

  $("#div-output").text(result);
  });
});
