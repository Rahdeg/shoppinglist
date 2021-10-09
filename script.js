let input=document.querySelector("input");
let li=document.querySelectorAll("li");
let ul=document.querySelector("ul");
let enter=document.querySelector("button");


function createList() {
let listItem=document.createElement("li");
listItem.textContent=input.value;
ul.appendChild(listItem);
input.value="";
let delbtn=document.createElement("button");
listItem.appendChild(delbtn);
delbtn.innerHTML="delete";
delbtn.classList.add("rock");
}

function deleteItem(room) {
	if (room.target.className==="rock") {
		room.target.parentElement.remove();
	}
}

function addtoggle(tot) {
	if (tot.target.tagName==="LI") {
		tot.target.classList.toggle("done");
	}
}

function inputlength() {
	return input.value.length;
}

function checkClick() {
	if (inputlength()>0) {
		createList();
	}
}

function checkKeypress(event) {
	if (inputlength()> 0 && event.keyCode===13) {
		createList();
	}
}

function handleList(lol) {
	addtoggle(lol);
	deleteItem(lol);

}



enter.addEventListener("click",checkClick);
input.addEventListener("keypress",checkKeypress);
ul.addEventListener("click",handleList);





