var url = prompt("type a URL", "www.facebook.com");

if (url.substring(0,4) !== ("http")){
	url = "http://" + url;
	
}

var spanNode = document.getElementById('link');
spanNode.innerHTML = "<a href='"+ url +"'>" +  url + "</a>";




//<a href="url">link text</a>








// prompt
// substring
// if if else
// grab element node & change innerHTML


