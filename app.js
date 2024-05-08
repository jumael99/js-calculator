
let mainString = "";

function addValueToString() {
    mainString = eval(mainString);
    show();
}

function show() {
    document.querySelector(".show-result-screen").innerText = mainString;
}

document.querySelector('.five-part').addEventListener('click', function (event) {
    let value = event.target;
    if (value.tagName === "BUTTON") {
        if (value.innerText !== 'Ac' && value.innerText !== 'Del' && value.innerText !== '=') {
            mainString += value.innerText;
            show();
        }
        if (value.innerText === 'Ac') {
            mainString = "";
            show();
        }
        if (value.innerText === 'Del') {
            mainString = mainString.substring(0,mainString.length-1);
            show();
        }
        if (value.innerText === '=') {
            addValueToString();
            show();
        }
    }
})

