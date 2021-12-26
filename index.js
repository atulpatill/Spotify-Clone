const inputTxt = document.querySelector("#input")
const clickBtn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

function clickHandle(){
    inputValue = inputTxt.value
outputDiv.innerText = inputValue 
    console.log("Clicked")
}

clickBtn.addEventListener("click", clickHandle)