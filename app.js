const messageDiv = document.querySelector(".message");
const clearDiv = document.querySelector(".clearSection");

const clearAllBtn = document.querySelector(".clearItem");
const singleItemDiv = document.querySelectorAll(".singleItem");
const content = document.querySelector(".content");

const paragraphMessage= document.getElementById("message");
const inputSection = document.getElementById("inputField");
const submitBtn = document.getElementById("btn");

const list = [];
let sumItems= "";

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // add items when submit
    addItem(); 
    
    
});

function addItem (){
    let inputSet = inputSection.value;

    if (inputSet.trim() !== "") {
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

    
    paragraphMessage.innerHTML = "item added in list";
    messageDiv.classList.add("show");
    
    paragraphMessage.style.backgroundColor = "rgb(204, 252, 192)"
    setTimeout(()=>{messageDiv.classList.remove("show")
    },2000);
    }

}
