"use strict";

//Title 🟧 Module 8 - Events: Lesson 08. Form Submission and FormData Object

//? 🧩 A Simple Form Logger
/*
const form = document.getElementById('myForm');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
    
    console.log(formData.get("username"));
    console.log(formData.get("email"));
    console.log(formData.getAll("skills"));
    console.log(data);
    
    form.reset()
});
*/


//? 🛠️ Mini Challenge (Next Level)

/*
const form = document.getElementById('newForm');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        skills: formData.getAll("skills")
    };

    console.log(data);

    form.reset()
});
*/

//? 🧩 Updated Code
/*
const form = document.getElementById('updatedForm');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        skills: formData.getAll("skills")
    };

    // 🚀 Send data to API
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log("Success:", result);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

    form.reset();

    alert(`Welcome ${data.username}!`);
});
*/


//? 🛠️ Create User Card Form

/*
const form = document.getElementById('updatedForm');
const output = document.getElementById('output');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        skills: formData.getAll("skills")
    };

    // Create a container for card submission
    const userCard = document.createElement("div");

    const skillsText = data.skills.length > 0 ? data.skills.join(", ") : "No skills selected";

    userCard.innerHTML = `
        <h3>${data.username}</h3>
        <p>${data.email}</p>
        <p>Skills: ${skillsText}</p>
        <hr>
    `;

    // Add the result to the webpage
    output.appendChild(userCard);
    userCard.scrollIntoView({ behavior: "smooth" });

    form.reset();
});

//  Clear the Form
clearBtn.addEventListener("click", function (e) {
    if (output.children.length === 0) return;

    output.innerHTML = "";
});
*/


//? ✅ Updated Code (Key Parts Only)

const form = document.getElementById('updatedForm');
const output = document.getElementById('output');
const clearBtn = document.getElementById('clearBtn');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const skillsError = document.getElementById('skillsError');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const username = formData.get("username").trim();
    const email = formData.get("email").trim();
    const skills = formData.getAll("skills");

     // Clear errors
    usernameError.textContent = "";
    emailError.textContent = "";
    skillsError.textContent = "";

    let isValid = true;

    // Validation checks
    if (username === "") {
        usernameError.textContent = "Name is required";
        isValid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (skills.length === 0) {
        skillsError.textContent = "Select at least one skill";
        isValid = false;
    }

    // Code will stop if invalid
    if (!isValid) return;

    // Create a container for card submission, and continue if valid
    const userCard = document.createElement("div");

    userCard.innerHTML = `
        <h3>${username}</h3>
        <p>${email}</p>
        <p>Skills: ${skills.join(", ")}</p>
        <hr>
    `;

    // Add the result to the webpage
    output.appendChild(userCard);
    userCard.scrollIntoView({ behavior: "smooth" });

    form.reset();
});

//  Clear the Form
clearBtn.addEventListener("click", function (e) {
    if (output.children.length === 0) return;

    output.innerHTML = "";
});




















































































