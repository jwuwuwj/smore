window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
	console.log("message received")
	if(event.origin !== "https://coruscating-shortbread-45f18a.netlify.app") return;
	if(event.data.id === "sendBackupData"){
		console.log("confirmed")
		for(let i = 0; i < event.data.data.length; i++){
			localStorage.setItem(event.data.data[i].key, event.data.data[i].data)
		}
	}
}