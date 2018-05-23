
// list of variables that we'll need for the character build
var hp = 0;
var str = 0;
var agi = 0;
var int = 0;
var charImage = '';

$('#submitCharacter').on("click", function (event) {
	// preventing the default
	console.log("the button was clicked");
	event.preventDefault();
	// make a new object for the api call

	//get the values from the page and login info

	var charClass = $("#characterClass option:selected").text();

	evaluateClass(charClass);
	var user_owner = getCookie("id_token");
	console.log("user_owner   ", user_owner)

	var newChar = {
		// we need to access this from the local storage 
		user_owner: user_owner,

		character_class: charClass,
		character_name1: $("#charName1").val(),
		character_name2: $("#charName2").val(),

		character_img: charImage,
		level: 1,
		hp: hp,
		str: str,
		agi: agi,
		int: int,
		exp: 0,
		loot: ""
	};
	console.log('newchar', newChar);
	$.ajax({

			url: "/api/characters",
			method: "POST",
			data: newChar,
			dataType: "json"
		})
		.then(function (results) {
			console.log("the query has posted")
			$("#charName1").val(""),
				$("#charName2").val("")
		}).then(location.reload());
});


// uses a switchase on the classInput to change different attributes
function evaluateClass(classInput) {

	console.log("evaluating")
	switch (classInput) {
		case "Wizard":
			{
				hp = 10;
				str = 5;
				agi = 10;
				int = 20;
				charImage = "images/characterimages/wizard.png";


				console.log("You're Making a wizard")
			};

			break;
		case "Rogue":
			{
				hp = 10;
				str = 10;
				agi = 20;
				int = 5;
				charImage = "images/characterimages/rogue.png"
			}
			console.log("You're making a Rogue")

			break;
		case "Warrior":
			{
				hp = 10;
				str = 20;
				agi = 5;
				int = 10;
				charImage = "images/characterimages/warrior.png"
				console.log("You're making a Warrior")

			}
			break;
		default:
			console.log('nope.')

	}

}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}