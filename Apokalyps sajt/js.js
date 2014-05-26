"use strict"
var media = {
	
	 find: function(){	 
	 	 
	 var medialinklist = document.getElementById("media");
	 
	 var medialink = medialinklist.getElementsByTagName("a")[0];
	   
	 console.log(medialink);
	 
	 var dates = document.getElementById("dates");
	 console.log(dates);
	//getElementsByTagName("a")[0];
	
	
	var wrapper = document.getElementById("wrapper");

	console.log(wrapper);	

	

	 medialink.onclick= function(){
		
		return false;
	}
	

 }
 }
 
 window.onload = media.find;