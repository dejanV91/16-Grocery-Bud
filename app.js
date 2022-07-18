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
editId="";

//==== FUNCTIONS
// add item
function addItem(a){
    a.preventDefault();
    const element = grocery.value;
    const id = new Date().getTime().toString();
    if(element && !editStatus){
       const item = document.createElement("article");
       const attr = document.createAttribute("class");
       attr.value = "singleItem";
       const attrId = document.createAttribute("data-id");
       attrId.value = id;
       item.setAttributeNode(attr);
       item.setAttributeNode(attrId);
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
        addLocalStorage(id,element);
        setBack();
        showClear();
    }
    else if(element && editStatus){
        editItem.innerHTML = grocery.value;
        alertDisplay("item edited", "greenAlert");
        editLocalStorage(editId, editItem);
        setBack();
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
    localStorage.removeItem("list");
    showClear();
}
//edit single item
function editItemSingle(a){
    editItem = a.target.parentNode.previousElementSibling;
    editId=a.target.parentNode.parentNode.dataset.id;
    grocery.value=editItem.innerHTML;
    submitBtn.textContent = "edit";
    editStatus = true;
}
//delete single item
function deleteItem(a){
    const item = a.target.parentNode.parentNode;
    content.removeChild(item);
    alertDisplay("item deleted", "redAlert");
    removeItemLocalStorage(item.dataset.id);
    showClear();
}

// ========== LOCAL STORAGE

function getLocalStorage(){
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function addLocalStorage(id, value){
    const element = {id,value};
    let items = getLocalStorage();
    items.push(element);
    localStorage.setItem("list",JSON.stringify(items));
}
function removeItemLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if (item.id !== id) {
            return item
        }
    });
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStorage(id, value){
    const items = getLocalStorage();
    items.forEach(function(item){
        if (item.id = id) {
            console.log(id);
        }
    })
}

// function getLocalStorage(){
//     let item = localStorage.getItem("list")
//     ? JSON.parse("list", JSON.stringify(item))
//     : [];
//     console.log(item);
// }
