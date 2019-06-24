function loadScript( url, callback ) {
	var script = document.createElement( "script" )
	script.src = url;
	script.type = "text/javascript";
	if(script.readyState) {
		script.onreadystatechange = function() {
			if ( script.readyState === 'loaded' || script.readyState === 'complete' ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function() {
			callback();
		};
	}
	document.body.appendChild( script );
}