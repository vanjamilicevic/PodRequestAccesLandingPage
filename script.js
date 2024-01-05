let inputValue = document.getElementById("input")
let button = document.getElementById("button")
let message = document.getElementById("error-message")

button.onclick = () => {
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(inputValue.value) ){
        message.classList.add("not-visible")
      } else {
        message.classList.remove("not-visible")
      }
}