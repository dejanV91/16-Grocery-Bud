//====CONST
const form = document.querySelector(".formSection");
const grocery = document.getElementById("inputField");
const submitBtn = document.getElementById("btn");
const content = document.querySelector(".content");
const alertDiv = document.getElementById("message");
const clearBtn = document.querySelector(".clearSection");
//==== EVENT LISTENERS
form.addEventListener("submit",addItem);
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
                    <span id="edit" class="material-symbols-outlined">
                        border_color
                    </span>
                    <span id="delete" class="material-symbols-outlined">
                        delete
                    </span>
                </div>`;
        //append child
        content.appendChild(item);
        //alert message
        alertDisplay("added item", "greenAlert");
        setBack();
        showClear();
        clearBtn.addEventListener("click", clearAll);
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
}
//clear all items
function showClear(){
    if (content.children.length > 0) {
        clearBtn.classList.add("show");
        // clearBtn.addEventListener("click", function(){
        //     const element = document.querySelectorAll("singleItem");
        //     element.forEach(function(item){
        //         content.removeChild(item);
        //     });
        // });
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
};