import validateID from "./app.js";

const form = document.getElementById("id-container");
form.addEventListener("submit", handleClick);

function handleClick(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("surname")
    const id = document.getElementById("id-number");

    const successPrompt = document.querySelector(".successful");
    const failPrompt = document.querySelector(".unsuccessful");

    successPrompt.style.display = "none";
    failPrompt.style.display = "none";

    const fName = firstName.value.trim();
    const surname = lastName.value.trim();

    const idNum = id.value;
    const status = validateID(idNum);

    if(status) {
        const success = document.querySelector("#success");
        success.textContent = `${fName} ${surname}`;
        successPrompt.style.display = "flex";
    } else {
        const failed = document.querySelector("#fail");
        failed.textContent = `${fName} ${surname}`;
        failPrompt.style.display = "flex";
    }

    event.currentTarget.reset();
}