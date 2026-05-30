// Task 1 Button
function showMessage() {
    alert("Hello! You clicked the button 🚀");
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let msg = document.getElementById("formMsg");
    let output = document.getElementById("outputBox");

    if (name === "" || email === "" || message === "") {
        msg.innerText = "All fields are required!";
        msg.style.color = "red";
    } 
    else if (!email.includes("@")) {
        msg.innerText = "Enter valid email!";
        msg.style.color = "red";
    } 
    else {
        msg.innerText = "Form submitted successfully!";
        msg.style.color = "green";

        // Console log
        console.log({ name, email, message });

        // Show on page
        output.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b> ${message}</p>
        `;
    }
});

// To-Do List
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="this.parentElement.remove()">X</button>`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}