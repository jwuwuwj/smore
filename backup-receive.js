window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
	if(event.data.id === "sendBackupData"){
		for(let i = 0; i < event.data.data.length; i++){
			localStorage.setItem(event.data.data[i].key, event.data.data[i].data)
		}
	}
}