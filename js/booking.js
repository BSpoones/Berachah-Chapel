// Checks a given form for a valid email and phone number
// Adds to error message which is allerted to the user
function check(form){
    var error_msg = ''
    if ((form.email.value).includes("@") == false) {
        var error_msg = error_msg.concat("Please enter a valid email address.\n");
    }
    if ((form.phone.value).length != 11) {
        var error_msg = error_msg.concat("Please enter a valid phone number.\n");
    }
    if (error_msg == '') { 
        alert("Your booking has been saved")
        return true;
    }
    else{
        alert(error_msg)
        console.log(error_msg);
        return false;
    }
}