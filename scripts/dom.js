import validateID from "./app.js";

function setupEventListener() {
    const form = document.getElementById("id-container");
    form.addEventListener("submit", handleClick);
}

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
    if(!fName) {
        alert("Please enter the details of your first name");
        return;
    }

    const surname = lastName.value.trim();
    if(!surname) {
        alert("Please enter the details of your surname");
        return;
    }

    const idNum = id.value;

    const status = validateID(idNum);

    if(status) {
        const success = document.querySelector("#success");
        success.innerHTML = `${cleanText(fName)} ${cleanText(surname)}`;
        successPrompt.style.display = "flex";
    } else {
        const failed = document.querySelector("#fail");
        failed.innerHTML = `${cleanText(fName)} ${cleanText(surname)}`;
        failPrompt.style.display = "flex";
    }

    console.log(`
        Name: ${fName}
        Surname: ${surname}
        Value: ${idNum}
    `);
    
    this.reset();
}

function cleanText(string) {
    const clean = string.toLowerCase();
    const capital = clean[0].toUpperCase();
    return capital + clean.slice(1, clean.length);
}

document.addEventListener("DOMContentLoaded", setupEventListener);