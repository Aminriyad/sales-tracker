let myleads = []
myleadsarray = JSON.parse(myleads)
myleadsarray.PUSH("AMIN")
myleadsstring = JSON.stringify(myleadsarray)
console.log( typeof myleadsstring)
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl= document.getElementById('ul-el')

localStorage.setItem(amin, ahmed)

console.log(localstorage)
localStorage.clear()

inputBtn.addEventListener("click" , function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem(inputEl.value)
    JSON.stringify()
    renderleads()
    console.log(localStorage.getItem("myleads"))
})

function renderleads() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems += `
        <li>
            <a target="_blank" href='${myleads[i]}'>
            ${myleads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listitems
}