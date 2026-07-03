function validateBooking() {

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;

    if (name === "" || guests === "") {

        alert("Please complete all booking fields.");
        return false;
    }

    alert("Booking submitted successfully!");

    return true;
}
