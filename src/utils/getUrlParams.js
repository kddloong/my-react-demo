
export const getUrlParams = (str, query) =>{
	var strList = str.substring(1);
	var vars = strList.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == query){return pair[1];}
	}
	return(false);
}

