alert("Welcome to Hannah's website!")

var flip = 1;
function flip () {
  if (flip == 1) {
    document.getElementById ("toggle").src = "maine coon cat.jpg";
    flip = 2;
  }
  else {
    document.getElementById ("toggle2").src = "scottish fold.jpg";
    flip = 1;
  }
}
