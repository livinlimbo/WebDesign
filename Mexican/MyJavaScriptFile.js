function validateName() {
		let x = document.forms["myForm"]["username"].value;
		if (x == "") {
			alert("Name must be filled out");
		return false;
			}
		}
		
function validatePass() {
		let x = document.forms["myForm"]["password"].value;
		if (x == "" || x.length<="10") {
			alert("Password must be exactly 11 characters in length");
		return false;
			} else {
		alert("Thanks, your password is 11 character, sign in succesfull");
			}
		}
	
function myFunction() {
  let x = document.getElementById("numb").value;
  if (isNaN(x) || x < 1 || x > 100000) {
    alert("Please enter a valid number");
  } else {
    alert("Thanks, we will prepare for you " + x + " buritos");
  }
}

function myDiscount() {
  var x = document.getElementById("disc").value;
  if ( x == "mextexgood" ) {
    alert("Discount code OK, you got discount 13.5% ");
  } else {
    alert("Discount code not valid");
  }
}

function choice3(select) {
     alert(select.options[select.selectedIndex].text + " is not much healty");
}
