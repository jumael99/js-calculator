let mainString = "";

function addValueToString() {
        mainString = String(eval(mainString));
    show();
}

function show() {
    document.querySelector(".show-result-screen").innerText = mainString;
}

document.querySelector('.five-part').addEventListener('click', function(event) {
    let value = event.target;
    if (value.tagName === "BUTTON") {
        const operators = ['*', '+', '-', '/'];
        const lastChar = mainString[mainString.length - 1];

        if (value.innerText === 'Ac') {
            mainString = "";
            show();
        }
        else if (value.innerText === 'Del') {
            if (mainString === 'Infinity') {
                mainString = "";
            }
            mainString = mainString.substring(0, mainString.length - 1);
            show();
        }
        else if (value.innerText === '=') {
            addValueToString();
        }
        else if (operators.includes(value.innerText) && operators.includes(lastChar)) {
            show();
        }
        else {
            mainString += value.innerText;
            show();
        }
        console.log(mainString);
    }
});
