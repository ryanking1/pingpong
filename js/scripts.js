    // business logic for spec tests
  var pingPong = function(userNumber){
   if (userNumber === "0") {  //if statement appends an error statement if user enters zero
      $("#appendList").append("Please enter a number greater than zero...");
      } else { //if not zero this loop runs
          for (i = 1; i <= userNumber; i++) {
            if (i % 15 === 0) { // 15 is checked first, otherwise 3 or 5 will match the userNumber and output wrong result
              $("#appendList").append("<li> pingpong </li>"); 
            } else if (i % 3 === 0) { //multiples of 3
              $("#appendList").append("<li> ping </li>");
            } else if (i % 5 === 0) { //multiples of 5
              $("#appendList").append("<li> pong </li>");
            } else {  //appends any number not a multiple of 3,5, or 15
              $("#appendList").append("<li>" + i + "</li>");
            }
          }
        }
};
// USER INTERFACE LOGIC

$(function() {
   $("#getNumber").submit(function() { 
    var userNumber = $("#userNumber").val();
    $("#appendList").empty();
    pingPong(userNumber);
    event.preventDefault();
  });
 });
