window.addEventListener("message", receiveMessage, false);
// window.onload = function(){
// 	// window.parent.postMessage(localStorage, "*")
// 	window.parent.postMessage("test", "*")
// }

function receiveMessage(event){
	// if(event.origin !== "https://celebrated-stardust-91ad96.netlify.app") return;
	console.log(event.data)

	if(event.data === "fetchSiteSettings"){
		if(localStorage.getItem("savedSiteSettings") === null){
			//never saved before
			window.parent.postMessage({ id: "sendSiteData", data: "never_saved_before" }, "*")
		} else {
			window.parent.postMessage({ id: "sendSiteData", data: "this would be site settings" }, "*")
		}
	}

	// var iframe = document.getElementById("testdata");
	// iframe.contentWindow.postMessage(localStorage, "*")
}