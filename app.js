//====CONST
const form = document.querySelector(".formSection");
const grocery = document.getElementById("inputField");
const submitBtn = document.getElementById("btn");
const content = document.querySelector(".content");
const alertDiv = document.getElementById("message");
const clearBtn = document.querySelector(".clearSection");
//==== EVENT LISTENERS
form.addEventListener("submit",addItem);
//clear all items
clearBtn.addEventListener("click", clearAll);
//edit option
editItem = "";
editStatus = false;

//==== FUNCTIONS
// add item
function addItem(a){
    a.preventDefault();
    const element = grocery.value;
    if(element && !editStatus){
       const item = document.createElement("article");
       const attr = document.createAttribute("class");
       attr.value = "singleItem";
       item.setAttributeNode(attr);
       item.innerHTML = `<h4>${element}</h4>
                <div class="icons">
                    <span class="material-symbols-outlined edit">
                        border_color
                    </span>
                    <span class="material-symbols-outlined delete">
                        delete
                    </span>
                </div>`;
        //append child
        content.appendChild(item);
        //edit and delete btn in single item
        const deleteBtn = item.querySelector(".delete");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = item.querySelector(".edit");
        editBtn.addEventListener("click", editItemSingle);
        //alert message
        alertDisplay("added item", "greenAlert");
        setBack();
        showClear();
    }    
}
//alert message
function alertDisplay(alert, action){
    alertDiv.textContent = alert;
    alertDiv.classList.add(action);
    setTimeout(function(){
        alertDiv.textContent="";
        alertDiv.classList.remove(action);
    },1000);
}
//set back
function setBack(){
    editItem = "";
    editStatus = false;
    grocery.value = "";
    submitBtn.textContent = "submit";
}
//clear all items
function showClear(){
    if (content.children.length > 0) {
        clearBtn.classList.add("show");
    }
    else{
        clearBtn.classList.remove("show");
    }
}
//clear all
function clearAll(){
   const element = document.querySelectorAll(".singleItem");
        element.forEach(function(item){
        content.removeChild(item);
    });
    alertDisplay("remove all items", "redAlert");
    showClear();
}
//edit single item
function editItemSingle(){
    console.log("edit item");
}
//delete single item
function deleteItem(a){
    const item = a.target.parentNode.parentNode;
    content.removeChild(item);
    alertDisplay("item deleted", "redAlert");
    showClear();
}
