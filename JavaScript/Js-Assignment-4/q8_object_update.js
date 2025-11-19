let user = { name: "John", email: "john@mail.com", age: 21 };

updateForm.addEventListener("submit", e => {
    e.preventDefault();
    user.name = name.value;
    user.email = email.value;
    user.age = age.value;
    output.textContent = JSON.stringify(user, null, 2);
});
