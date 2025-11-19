class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }
    render(containerId) {
        const container = document.getElementById(containerId);
        let html = "<form id='customForm'>";
        this.fields.forEach(f => {
            html += `<label>${f.label}</label><br>
                     <input type="${f.type}" id="${f.label}"><br><br>`;
        });
        html += "</form>";
        container.innerHTML = html;
    }
    getFormData() {
        const obj = {};
        this.fields.forEach(f => obj[f.label] = document.getElementById(f.label).value);
        return obj;
    }
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

form.render("formContainer");

function getData() {
    result.textContent = JSON.stringify(form.getFormData(), null, 2);
}
