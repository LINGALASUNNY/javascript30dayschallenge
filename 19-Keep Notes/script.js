let addIcon=document.getElementById("add-icon");
let container=document.querySelector(".container");
let removeIcon=document.querySelector("img");
let inputNote=document.getElementsByClassName("input-box");

addIcon.addEventListener("click",()=>{
    let note=document.createElement("p");
    let trashImg=document.createElement("img")
    note.innerHTML="Write!";
    note.className="input-box";
    note.setAttribute("contenteditable","true");
    trashImg.src="trash.png";
    container.appendChild(note).appendChild(trashImg);

    updateStorage();
});

container.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
    updateStorage();
})

function updateStorage(){
    localStorage.setItem("not",container.innerHTML);
    console.log("cliked");
}