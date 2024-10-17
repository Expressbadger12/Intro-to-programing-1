 // This function will validate the user input
 function validateForm(){
    // set up nickname/shortcut to our form values
    var firstName = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var zip = document.getElementById("zip").value;

    // create a new string that concatenates first name + " " + last name
    var fullName = firstName + " " + lastname;

    console.log("first name = " + firstName);
    console.log("last name = " + lastname);
    console.log("zipCode = " + zip);
    console.log("full name = " + fullName);

    // check to make sure that the full name is 20 characters or fewer
    if (fullName.length > 20 || fullName.length == 1){
        document.getElementById("loginStatus").innerHTML = "please enter a valid name that is less than 20 characters";
    }
    else if(zip.length != 5){
        document.getElementById("loginStatus").innerHTML = "Please enter a 5 digit zip code";
    }
    else{
        document.getElementById("loginStatus").innerHTML = "welcome, " + fullName + ". The secret word is 'validation'";
    }

    // we don't want this page to submit to a server/another page so prevent that from happening
    return false;


}