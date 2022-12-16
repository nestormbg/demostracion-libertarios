const btn = document.getElementById("btn")
const body = document.getElementById("body")
console.log(btn, body)

btn.addEventListener("click", () => {
    body.style.backgroundColor = "red"
})