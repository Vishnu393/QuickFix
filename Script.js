const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2bbK4rHlTnRKtOjxJsLSLJHfMa7UzspkR8zDWcS6y5d04J2I3AArizgfQYfbxAjG_/exec";

function openBooking(service) {

    document.getElementById("bookingPopup").style.display = "block";
    document.getElementById("serviceName").value = service;

}

function closeBooking() {

    document.getElementById("bookingPopup").style.display = "none";

}

window.addEventListener("click", function(event) {

    const popup = document.getElementById("bookingPopup");

    if(event.target === popup) {
        popup.style.display = "none";
    }

});

window.addEventListener("load", function() {

    const form = document.getElementById("bookingForm");

    if(form){

        form.addEventListener("submit", async function(event){

            event.preventDefault();

            const data = {

                bookingId: "QF" + Date.now(),

                name: document.getElementById("Name").value,

                phone: document.getElementById("Phone").value,

                email: document.getElementById("Email").value,

                address: document.getElementById("Address").value,

                service: document.getElementById("ServiceName").value,

                dateTime: document.getElementById("DateTime").value

            };

            try {

                await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: JSON.stringify(data)
                });

                window.location.href = "thankyou.html";

            } catch(error) {

                alert("Booking submit failed. Please try again.");

            }

        });

    }

});