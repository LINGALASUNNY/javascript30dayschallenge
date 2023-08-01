let inputBox=document.querySelector("#inputBox");
let listContainer=document.querySelector(".listitem");

function addList(){
    if(inputBox.value===""){
        alert("Enter Task to Add ");
        saveData();
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.add("checked");
        saveData();
        
    }
    else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         saveData();
        }      
});

// save data in local storage

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//display saved data in local storage

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();