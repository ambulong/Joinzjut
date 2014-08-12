if(!navigator.userAgent.match(/mobile/i)){
	jQuery.getScript("index.js")
	
	$("<link />")
    .attr({ rel: "stylesheet",
        type: "text/css",
        href: "index.css"
    })
    .appendTo("head");
	
}
else{
	jQuery.getScript("mindex.js")
	
	$("<link />")
    .attr({ rel: "stylesheet",
        type: "text/css",
        href: "mindex.css"
    })
    .appendTo("head");
	

}