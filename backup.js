var iframe = document.getElementById("backupiframe")

// window.addEventListener("message", receiveMessage, false);

window.onload = function(){
	sendBackupData();

	setInterval(() => {
		sendBackupData();
	}, 30000)
}

function sendBackupData(){
	iframe.contentWindow.postMessage({ id: "sendBackupData", data: backupData(), lastsaved: Date.now() }, "*")
}

function backupData(){
	var values = [],
    keys = Object.keys(localStorage),
    i = 0, keys;

    for(; key = keys[i]; i++){
        values.push({key: key, data: localStorage.getItem(key)});
    }

    return values;
}