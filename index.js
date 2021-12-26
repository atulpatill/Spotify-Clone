const inputTxt = document.querySelector("#input")
const clickBtn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")


clickBtn.addEventListener("click", ()=>{
    inputValue = inputTxt.value
    outputDiv.innerText = inputValue 
        console.log("Clicked")
})