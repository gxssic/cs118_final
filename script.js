// Toggle grid padding
function toggleGrid() {
  var x = document.getElementById("myGrid");
  if (x.className === "w3-row") {
    x.className = "w3-row-padding";
  } else {
    x.className = x.className.replace("w3-row-padding", "w3-row");
  }
}
 // Nav menu
function openNav() {
  var x = document.getElementById("nav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// submission confirm
function postMessage() {
  alert("Message sent!\nWe will (not) get back to you soon.");
}
// package selection error
function error() {
  alert("Sorry! We're currently not accepting new bookings\ndue to the current pandemic!");
}
