loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const u = username.value;
    const p = password.value;

    if (u.length < 5) return msg.textContent = "Username too short";
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(p))
        return msg.textContent = "Weak password";

    msg.textContent = "Login successful";
});
