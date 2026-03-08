const input = document.getElementById("headlineInput");
const button = document.getElementById("Update");
const cta = document.getElementById("cta");

button.addEventListener("click", function() {
    cta.textContent = input.value;
});