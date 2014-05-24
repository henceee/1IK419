"use strict"
var media = {
	
	 find: function(){	 
	 	 
	 var medialinklist = document.getElementById("media");
	 
	 var medialink = medialinklist.getElementsByTagName("a")[0];
	   
	 console.log(medialink);
	 
	 var dates = document.getElementById("dates");
	 console.log(dates);
	//getElementsByTagName("a")[0];
	
	
	
	var tourdatelink = dates.getElementsByTagName("a")[0];
	console.log(tourdatelink);
	
	tourdatelink.href="Gigs.html";
	 
	 medialink.onclick= function(){
		
		return false;
	}
	

 }
 }
 
 window.onload = media.find;