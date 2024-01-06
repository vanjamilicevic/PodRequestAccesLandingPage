// Desktop input

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

// Mobile input

let inputValueMobile = document.getElementById("input-mobile")
let buttonMobile = document.getElementById("button-mobile")
let messageMobile = document.getElementById("error-message-mobile")

buttonMobile.onclick = () => {
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(inputValueMobile.value) ){
        messageMobile.classList.add("not-visible")
      } else {
        messageMobile.classList.remove("not-visible")
      }
}
