$(document).ready(function(){
// hide the fight button
	var charID ;
	$(".pickCharacter").on("click", function(event){
		event.preventDefault();
		charID =  $(this).attr("id");
		console.log("charID", charID);
		//show the fight button
		setCookie("characterID", charID)
	});

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + " path=/";
};
// end page functions
});
