const messageDiv = document.querySelector(".message");
const clearDiv = document.querySelector(".clearSection");

const clearAllBtn = document.querySelector(".clearItem");
const singleItemDiv = document.querySelectorAll(".singleItem");
const content = document.querySelector(".content");

const inputSection = document.getElementById("inputField");
const submitBtn = document.getElementById("btn");

const list = [];
let sumItems= "";

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    addItem();
    
    
});

function addItem (){
    let inputSet = inputSection.value;
    let single = 
            `<article class="singleItem">
            <h4>${inputSet}</h4>
            <div class="icons">
                <span id="edit" class="material-symbols-outlined">
                    border_color
                </span>
                <span id="delete" class="material-symbols-outlined">
                    delete
                </span>
            </div>
            </article>`;
    // insert items in list
    list.push(single);

    // add all insert(string) in variable
    sumItems += list[list.length-1];
    content.innerHTML = sumItems;
}