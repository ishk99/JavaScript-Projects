let myLeads = [];

const  inputEl = document.getElementById('input-el');
// const val = document.querySelector('input-el').value;
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// getting leads from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// check if leads from local storage is truthy..
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// const tabs = [
//     {url: "https://stackoverflow.com/questions/6798100/javascript-clear-dom"}
// ]

tabBtn.addEventListener('click', function () {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        console.log(tabs.url);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)

    })

})


function render(arr) {
    // console.log("rendering leads");
    let listItems = '';
    for(let i = 0; i < arr.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${arr[i]}'>
                ${arr[i]}
            </a>
        </li>
        `
        // console.log("rendering leads")
    }  
    ulEl.innerHTML = listItems;
    // let rec = 'James'; let rep = 'Per';
    // const str = `Hey ${rec}. How is it Going? Cheers ${rep}!`;
    // console.log(str);
}

// adding double click event on EventListener
delBtn.addEventListener('dblclick', function () {
    //clear local storage and DOM.
    localStorage.clear();
    myLeads = [];
    render(myLeads);

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    // console.log("Button Clicked");
    // console.log(myLeads);
    inputEl.value = "";
    // saving leads to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    // verifying if local storage works
    console.log(localStorage.getItem("myLeads"));
})

// rendering the leads on the page



