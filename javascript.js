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

function display_list(){
	const listReference = document.getElementById("to-do-list");
	let display_text = "";

	mylist.forEach((individualText) => {
		let temp = `<li class="list-group-item d-flex justify-content-between align-items-center item">${individualText}</li>`
		display_text += temp;
	})

	listReference.innerHTML = display_text;
}