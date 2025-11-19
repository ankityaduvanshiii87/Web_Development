const form = document.getElementById("studentForm");

function validateField(input, regex, errId, message) {
    const err = document.getElementById(errId);
    if (!regex.test(input.value)) {
        input.className = "fail";
        err.textContent = message;
        return false;
    }
    input.className = "success";
    err.textContent = "";
    return true;
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const v1 = validateField(name, /^[A-Za-z ]+$/, "nameErr", "Only alphabets allowed");
    const v2 = validateField(email, /^[^@]+@[^@]+\.[a-z]{2,3}$/, "emailErr", "Invalid email");
    const v3 = validateField(phone, /^\d{10}$/, "phoneErr", "Must be 10 digits");
    const v4 = validateField(password, /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/, "passErr", "Weak password");

    if (v1 && v2 && v3 && v4) alert("Form Submitted Successfully!");
});
