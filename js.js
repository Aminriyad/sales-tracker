let myLeads = []
const inputEl =document.getElementById ("input-el")
const saveBtn = document.getElementById ("input-btn")
const ulEl = document.getElementById ("ul-el")
const deleteBtn = document.getElementById ("delete-btn")
const leadsFromLocalStorage =JSON.parse( localStorage. getItem("myLeads") )
const tabBtn = document.getElementById ("tab-btn")


if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage
render (myLeads)
}


tabBtn.addEventListener ("click", function (){
chrome.tabs.query ({active: true, currentWindow: true}, function (tabs){
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify (myLeads) )
render (myLeads)
    })
})


saveBtn.addEventListener("click" , function() {
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


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear ()
    myLeads = []
    
    render (myLeads)
    })
    saveBtn.addEventlistener ("click", function() {
    myLeads.push (inputEl. value)
    inputEl.value = ""
    localStorage.setItem("my Leads", JSON.stringify (myLeads) )
    render (myLeads)
    })