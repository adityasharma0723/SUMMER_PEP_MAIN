let task = [];

let list = document.getElementById("taskList");
let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let gmailInput = document.getElementById("gmailInput");
let regInput = document.getElementById("regInput");
let roleInput = document.getElementById("roleInput");

function addTask() {
    let nameValue = nameInput.value.trim();
    let ageValue = Number(ageInput.value.trim());
    let roleValue = roleInput.value.trim();

    if (!nameValue) {
        alert("Please enter your name");
        return;
    }

    if (!ageValue || ageValue <= 0) {
        alert("Age must be greater than 0");
        return;
    }

    if (!roleValue) {
        alert("Please select a role");
        return;
    }

    let entry = {
        name: nameValue,
        age: ageValue,
        gmail: gmailInput.value.trim() || "-",
        regNo: regInput.value.trim() || "-",
        role: roleValue
    };

    task.push(entry);
    nameInput.value = "";
    ageInput.value = "";
    gmailInput.value = "";
    regInput.value = "";
    roleInput.value = "";
    showTask();
}

function showTask() {
    list.innerHTML = "";

    for (let i = 0; i < task.length; i++) {
        let li = document.createElement("li");
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <strong>Name:</strong> ${task[i].name}<br>
            <strong>Age:</strong> ${task[i].age}<br>
            <strong>Gmail:</strong> ${task[i].gmail}<br>
            <strong>Reg. No.:</strong> ${task[i].regNo}<br>
            <strong>Role:</strong> ${task[i].role}
        `;
        li.appendChild(itemDiv);

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";

        delBtn.onclick = function () {
            task.splice(i, 1);
            showTask();
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    }
}
