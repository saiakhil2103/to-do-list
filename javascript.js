const mylist = []

const addNewItem = () => {
	var list = document.getElementById("to-do-list");
	var text = document.getElementById("my_task").value
	if( text === ""){
		return
	}
	mylist.unshift(text)
	document.getElementById("my_task").value = "";
	display_list();
}

const display_list = () => {
	const listReference = document.getElementById("to-do-list");
	let display_text = "";

	mylist.forEach((individualText, idx) => {
		// let temp = `<li class="list-group-item d-flex justify-content-between align-items-center"><div>${individualText}<a href="#" onclick="deleteItem(${idx})" class="btn btn-outline-secondary"><i class="fa fa-minus-circle" aria-hidden="true"></i></a></div></li>`
		// let temp = `<div class="input-group mb-3 task"><li class="list-group-item d-flex justify-content-between align-items-center form-control">${individualText}</li><button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-minus-circle" aria-hidden="true" onclick="deleteItem(${idx})"></i></button></li></div>`
		let temp = `<div style="margin-top: 0px;" class="input-group mb-3 task"><li class="list-group-item d-flex justify-content-between align-items-center form-control">${individualText}</li><button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-minus-circle" aria-hidden="true" onclick="deleteItem(${idx})"></i></button></li></div>`		
		display_text += temp;
	})
	listReference.innerHTML = display_text;
}

const deleteItem = (idx) => {
	mylist.splice(idx, 1);
	display_list();
}
