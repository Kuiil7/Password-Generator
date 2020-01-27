
//Create a user name in the input field that cannot be left blank
function checkForm(form){
  if(form.username.value == "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
  //Username must contain certain criteria - letters and numbers.
  re = /^\w+$/;
  if(!re.test(form.username.value)) {
    alert("Error: Username must contain only letters and numbers.");
    form.username.focus();
    return false;
  }

  //8 to 128 characters required
  if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if(form.pwd1.value.length < 8) {
      alert("Error: Password must contain at least eight characters!");
      form.pwd1.focus();
      return false;
    }
      if(form.pwd1.value.length >128) {
        alert("Error: Password must contain at least eight to 128 characters.");
        form.pwd1.focus();
        return false;
      }
//password criteria requires numbers
    re = /[0-9]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      form.pwd1.focus();
      return false;
    }
  //password criteria requires lower case

    re = /[a-z]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      form.pwd1.focus();
      return false;
    }
    //password criteria requires upper case

    re = /[A-Z]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      form.pwd1.focus();
      return false;
    }
  } 
  //input fields cannot be left blank or wihtout confirming in the second input box
  else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form.pwd1.focus();
    return false;
  }
//confirms a valid password entered
  alert("You entered a valid password: " + form.pwd1.value);
  return true;
}


//random password generator
function generate(){

  //set password length/complexity between 8 to 128 characters
  let complexity = document.getElementById("slider").value;

  //character password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose password characters
  for(var i = 0; i <= complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to textbox/display area
  document.getElementById("display").value = password;


}

//set default length display of 8 - 128 characters
document.getElementById("length").innerHTML = "Length: 8 - 28";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

  if(document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
      document.getElementById("length").innerHTML = "Length: 1";
  }

}

//function to copy password to clipboard
function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");

}
 