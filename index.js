let generateEl = document.getElementById("generate-password-btn")
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

generateEl.addEventListener("click", function() {
    password1.textContent = generatePass()
    password2.textContent = generatePass()
})

function randomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePass() {
    let newPass = ''
    
    for(let i = 0; i < 15; i++) {
        newPass += characters[randomIndex()];
    }
    return newPass
}


