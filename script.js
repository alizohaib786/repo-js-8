// Global Functions-------------------------------------------------------------

// Clear Output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}

//Functions-------------------------------------------------------------
// IF ELSE STATEMENT
function ifElse() {
    let now = new Date();
    let today = now.getDay();

    if (today === 0) {
        alert("It's Sunday");
    } else if (today === 1) {
        alert("It's Monday")
    } else {
        alert("It's Some Other Day")
    }
}

//SWITCH STATEMENT
function switchStatement() {
    let now = new Date();
    let today = now.getDay();
    switch (today) {
        case 0:
            alert("It's Sunday");
            break;
        case 1:
            alert("It's Monday");
            break;
        default:
            alert("It's Some Other Day");
            break;
    }
}

// KEEP ASKING USERNAME
function askUserName() {
    do {
        var name = prompt("Please Enter Your Name")
        document.getElementById('output').innerHTML = name;
    } while (name === null || name === "");
}


