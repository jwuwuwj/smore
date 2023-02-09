window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
	if(event.origin !== "https://soft-palmier-05ed85.netlify.app") return;
	if(event.data.id === "sendBackupData"){
		for(let i = 0; i < event.data.data.length; i++){
			localStorage.setItem(event.data.data[i].key, event.data.data[i].data)
		}
	}
}