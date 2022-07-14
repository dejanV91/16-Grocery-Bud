const messageDiv = document.querySelector(".message");
const clearDiv = document.querySelector(".clearSection");

const clearAllBtn = document.querySelector(".clearItems");
const content = document.querySelector(".content");

const paragraphMessage= document.getElementById("message");
const inputSection = document.getElementById("inputField");
const submitBtn = document.getElementById("btn");

const list = [];
let sumItems= "";

submitBtn.addEventListener("click", (a)=>{
    addItem(a);
});

clearAllBtn.addEventListener("click", deleteAllItems);






function addItem (e){
    e.preventDefault();
    let inputSet = inputSection.value;

    if (inputSet.trim() !== "") {
    let single = 
            `<article class="singleItem">
            <h4>${inputSet}</h4>
            <div class="icons">
                <span class="material-symbols-outlined edit">
                    border_color
                </span>
                <span  class="material-symbols-outlined delete">
                    delete
                </span>
            </div>
            </article>`;

    
    // insert items in list
    list.push(single);

    // add all insert(string) in variable
    sumItems += list[list.length-1];
    content.innerHTML = sumItems;

    var singleItemDiv = document.querySelectorAll(".singleItem");
    singleItemDiv.forEach(function(e){
        e.addEventListener("click", function(a){
            let deleteBtn = a.target.querySelector(".delete");
            deleteBtn.addEventListener("click",function(){
                console.log(a.target);
            });
        });
    });

    
    paragraphMessage.innerHTML = "item added in list";
    messageDiv.classList.add("show");
    
    paragraphMessage.style.backgroundColor = "rgb(204, 252, 192)"
    setTimeout(()=>{messageDiv.classList.remove("show")
    },2000);
    clearDiv.classList.add("show");
    }
}

function deleteAllItems(){
    while (list.length > 0) {
        list.pop();
    }
    sumItems="";
    content.innerHTML = "" ;

    paragraphMessage.innerHTML = "cleared all items";
    messageDiv.classList.add("show");
    
    paragraphMessage.style.backgroundColor = "red"
    setTimeout(()=>{messageDiv.classList.remove("show")
    },3000);
    clearDiv.classList.remove("show");
    }



