function validateBooking() {

    let name = document.getElementById("name").value;
    let guests = document.getElementById("guests").value;

    if (name === "" || guests === "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Booking successful!");
    return true;
}
