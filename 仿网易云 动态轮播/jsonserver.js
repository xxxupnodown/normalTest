function ajax(params){
	var myRequest
	if (window.XMLHttpRequest){
		myRequest = new XMLHttpRequest();
	}else if (window.ActiveXObject){
		myRequest = new ActiveXObject('Microsoft.XMLHTTP');
	}
	myRequest.open("GET",`http://localhost:3000/${params.url}`, true);
	myRequest.send();
	myRequest.onreadystatechange = function(){
		if (myRequest.readyState == 4 && myRequest.status == 200){
			params.success(myRequest.responseText);
		}else{
			if (myRequest.status == 4){
				params.error(myRequest.status);
			}
		}
	}
}