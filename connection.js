var siteSaves = [
	"viewedBlogs",
	"favorites",
	"nav",
	"themeHex",
	"gameIcon",
	"mode",
	"instantGame",
	"hotkeys",
	"minutes_played",
	"xp",
	"lvl",
	"alerts",
	"playedGames",
	"badges",
	"everyGame",
	"titles",
	"achievementCompletedCount",
	"FPSCount",
	"sgs_profile_username",
	"sgs_profile_title",
	"openSidebar",
	"tabCloak",
	"theme",
	"bannerMessageNum",

	"play_10_minutes",
	"play_20_minutes",
	"play_30_minutes",
	"play_40_minutes",
	"play_50_minutes",
	"play_60_minutes",
	"play_24_hours",
	"reach_level_10",
	"reach_level_25",
	"reach_level_50",
	"reach_level_69",
	"reach_level_100",
	"play_10_games",
	"play_25_games",
	"play_50_games",
	"play_every_game",
	"read_2_blogs",
	"read_10_blogs",
]

window.addEventListener("message", receiveMessage, false);
// window.onload = function(){
// 	// window.parent.postMessage(localStorage, "*")
// 	window.parent.postMessage("test", "*")
// }

function receiveMessage(event){
	// if(event.origin !== "https://celebrated-stardust-91ad96.netlify.app") return;
	console.log(event.data)

	if(event.data.id === "fetchSiteData"){
		if(localStorage.getItem("savedSiteData") === null){
			//never saved before
			window.parent.postMessage({ id: "sendSiteData", data: "never_saved_before" }, "*")
		} else {
			window.parent.postMessage({ id: "sendSiteData", data: siteData(), lastsaved: localStorage.getItem("savedSiteData") }, "*")
			localStorage.setItem("sendSiteData", Date.now())
		}
	}

	if(event.data.id === "sendSiteData"){
		if(parseInt(event.data.lastsaved) < parseInt(localStorage.getItem("savedSiteData"))){
			//not most recent save
			window.parent.postMessage({ id: "sendSiteData", data: siteData(), lastsaved: localStorage.getItem("savedSiteData") }, "*")
			localStorage.setItem("sendSiteData", Date.now())
			return console.log("not recent")
		}
		localStorage.setItem("savedSiteData", event.data.lastsaved)
		console.log("saved")

		for(let i = 0; i < event.data.data.length; i++){
			localStorage.setItem(event.data.data[i].key, event.data.data[i].data)
		}
	}
	// var iframe = document.getElementById("testdata");
	// iframe.contentWindow.postMessage(localStorage, "*")
}

function siteData(){
	var values = [],
    keys = Object.keys(localStorage),
    i = 0, keys;

    for(; key = keys[i]; i++){
        values.push({key: key, data: localStorage.getItem(key)});
    }

    var data = values.filter(val => siteSaves.includes(val.key))

    return data;
}