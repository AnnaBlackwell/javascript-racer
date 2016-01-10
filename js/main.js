// When the Q key is pressed 
//  iterate through the <td> elements in the Player 1 row. Move the 'active' class to the next square, and return the original square to a class of inactive. 
$("body").on("keydown", function(q) {
  if (q.which == 81) {
    pressedQ()
   }
  }
)
// loop through until find class=active. Make class=inactive. Move to the next item. Make class=active. 
function pressedQ() {
  $("#player1_strip td").each(function(index) {
   if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).addClass("inactive");
    var next = $("td").get(index + 1)
    $(next).removeClass("inactive");
    $(next).addClass("active");
    return false;
   }
  });
}

// When the P key is pressed 
//  iterate through the <td> elements in the Player 2 row. Move the 'active' class to the next square, and return the original square to a class of inactive. 
$("body").on("keydown", function(p) {
  if (p.which == 80) {
    pressedP()
   }
  }
)

function pressedP() {
  $("#player2_strip td").each(function(index) {
   if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).addClass("inactive");
    var next = $("#player2_strip td").get(index + 1)
    $(next).removeClass("inactive");
    $(next).addClass("active");
    return false;
   }
  });
}

// When the class of square id p1square10 is active, and the class of square id p2square10 is inactive
  // alert: Player 1 wins!
if (($("#p1square10").hasClass("active")) && ($("#p2square10").hasClass("inactive"))) {
  alert("Player 1 wins!");
}

// When the class of square id p2square10 is active, and the class of square id p1square10 is inactive
  // alert: Player 2 wins!
if (($("#p2square10").hasClass("active")) && ($("#p1square10").hasClass("inactive"))) {
  alert("Player 2 wins!");
}

// When the reset button is clicked
  // Set the class of the square with id: p1square1 to active,
  // Set the class of the square with id: p2square1 to active, 
  // Set the class of all other squares to inactive,
$("#button").click(function(){
  $("td").removeClass("active");
  $("td").removeClass("inactive");
  $('#p1square1, #p2square1').addClass("active");
  $('#p1square2, #p2square2, #p1square3, #p2square3, #p1square4, #p2square4, #p1square5, #p2square5, #p1square6, #p2square6, #p1square7, #p2square7, #p1square8, #p2square8, #p1square9, #p2square9, #p1square10, #p2square10').addClass("inactive");
});