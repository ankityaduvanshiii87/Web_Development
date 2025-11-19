bookForm.addEventListener("submit", e => {
    e.preventDefault();

    const n = name.value;
    const em = email.value;
    const s = seats.value;

    if (!/^[A-Za-z ]+$/.test(n)) return alert("Invalid Name");
    if (!/^[^@]+@[^@]+\.[a-z]{2,3}$/.test(em)) return alert("Invalid Email");
    if (!(s >= 1 && s <= 10)) return alert("Seats must be 1-10");

    const booking = { name: n, email: em, seats: s };
    ticket.textContent = JSON.stringify(booking, null, 2);
});
