const form = document.getElementById("registration");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const github = document.getElementById("github").value.trim();
    const avatarInput = document.getElementById("avatar");
    const message = document.getElementById("message");

    if (!fullname === "" || !email === "" || !username === "") {
        message.textContent = "Please fill in all required fields.";
        message.style.color = "coral";
        return;
    }
    const avatarFile = avatarInput.files[0];

    if (avatar && avatarFile.size >  500 *1024){
        message.textContent = "Your image must be 500k or smaller";
        message.style.color = "coral"
        return;
    };

    function generateTicket(avatar){
        const registration = {
            fullname: fullname,
            email: email,
            username: username,
            avatar: avatar
        }
    };

    localStorage.setItem(
        "registration",
        JSON.stringify(registration)
    );

    if (avatarFile){
        const reader = new FileReader();

        reader.onload = function (){
            generateTicket(reader.result);
        };

        reader.onerror = function() {
            message.textContent = "Couldn't understand your avatar. Please try again.";
        };

        reader.readAsDataURL(avatarFile);

    } else {
        generateTicket(null);
    }
    })

localStorage.setItem("registration", JSON.stringify(regsitration));
window.location.href = "ticket.html";