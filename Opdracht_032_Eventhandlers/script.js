// const button = document.querySelector('#mybutton');

// const clickButton = () => {
//     alert('button clicked');
// };

// button.addEventListener('click', clickButton);


// document.getElementById("mybutton").addEventListener("click", function () { alert("Button clicked"); });
document.querySelector("#mybutton").addEventListener("click", function () { alert("Button clicked"); });



// const body = document.querySelector(".blue-background");
// const backgroundButton = document.querySelector("#mybutton2");

// const changeColor = () => {
//     body.classList.add("red-background");
// };

// backgroundButton.addEventListener("click", changeColor);


const body = document.querySelector(".blue-background");
const backgroundButton = document.querySelector("#mybutton2");

const toggleColor = () => {
    body.classList.toggle("red-background");
};

backgroundButton.addEventListener("click", toggleColor);