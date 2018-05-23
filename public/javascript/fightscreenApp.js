	// placeholder for the values we will get from the monster later
	var monsterScoreArr = [];
	var monsterName;
	var userText;
	var userArr = [];


	//placeholder variable for the challenge rating of the fight
	var challengeRating;

	// globally scoped pseudo-react pieces:

	function buttonMaker(obj) {
		return $("<button>")
			.addClass("btn btn-danger monsterSearchBtn")
			.attr("value", obj)
			.text("Fight " + obj + " Monster");
	}

	$(document).ready(function () {
		userText = $(".characterText").text()


		$('body').on("click", ".monsterSearchBtn", function (event) {
			console.log("Click click click click click for the api")
			event.preventDefault();
			APIcall(this);
			challengeRating = this.value;
			console.log("challengeRating is now set to: ", challengeRating);
		})

		$('body').on("click", ".startOverBtn", function (event) {
			event.preventDefault();
			console.log("clicking the start over btn")
			// empty the fightRow
			pageReset();
		});

		$('body').on("click", ".fightStartBtn", function (event) {

			event.preventDefault();
			// hey so we need to put the fight code in here yo
			$.ajax({
				url: "/api/fightCharacter",
				method: "GET"

			}).then(function (results) {
				console.log("results of the character query: ", results)
				var uA = results[0];
				// do the fight thing passing in the user results and the monster info

				var fightChar = new Character(uA);
				var fightMon = new Monster(monsterName, monsterScoreArr);

				battle(fightChar, fightMon);

			})

		});

		// end of the page function
	});

	function APIcall(obj) {
		// get the value
		var addOn = obj.value;
		// set the challenge rating to the value
		challengeRating = addOn
		// concatenate the value of the button into a query url
		var queryURL = "/api/find" + addOn;
		// run the query and then run the visualize function on the results
		$.ajax({
				url: queryURL,
				method: "GET",
			})
			.then(function (results) {
				visualize(results)
			})

	}

	// function to help us read the cookies
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	}

	function visualize(obj) {


		// update the scoreArr that we will use later for the fight functions
		monsterScoreArr = obj.scores;
		monsterName = obj.name;
		// make a new card but with custom class

		var monsterImg = $("<img>")
			.attr("src", obj.photo)
			.attr("id", "monsterImg")
			.addClass("displayFightMon animated flip")
		// move the buttons out and replace w/ the monster info
		$("#monsterDiv").html(monsterImg);

		// update the fightrow with a button
		var fightBtn = $("<button>")
			.addClass("btn btn-success fightStartBtn")
			.text("Start the fight!");
		var newChallenge = $("<button>")
			.addClass("btn btn-indigo startOverBtn")
			.text("Change Difficulty Rating");
		var newMonster = $("<button>")
			.addClass("btn btn-pink monsterSearchBtn")
			.attr("value", challengeRating)
			.text("Random Monster (Same Difficulty)");


		$("#fightRow")
			.empty()
			.append(fightBtn, newChallenge, newMonster)

		$("#challengeBtns").empty()
	};

	// function that will allow us to make random values out of the attack items each time
	function randomRoll(strength) {
		return Math.floor(Math.random() * strength) + 1
	}

	function Character(obj) {
		this.charClass = obj.character_class
		this.name = obj.character_name1;
		this.level = obj.level;
		this.hp = obj.hp;
		this.maxHp = obj.hp;
		this.str = obj.str;
		this.agi = obj.agi;
		this.int = obj.int;
		this.exp = obj.exp;
		this.loot = obj.loot;

		// method which determines whether or not a character's "hitpoints" are less than zero
		// and returns true or false depending upon the outcome
		this.isAlive = function () {
			if (this.hp > 0) {
				return true;
			}
			return false;
		};

		// method which takes in a second object and decreases their "hitpoints" by this character's strength
		this.attack = function (character2) {
			character2.hp -= randomRoll(this.str);
		};

		// method which increases this character's stats when called
		this.levelUp = function () {
			this.str += 5;
			this.agi += 5;
			this.int += 5;
			this.maxHp += 5;
			this.loot += 50;
			this.level += 1;
		};
	}

	function Monster(obj, array) {
		this.hp = array[0];
		this.str = array[1];
		this.agi = array[2];
		this.int = array[3];
		this.name = obj;

		// method which determines whether or not a character's "hitpoints" are less than zero
		// and returns true or false depending upon the outcome
		this.isAlive = function () {
			if (this.hp > 0) {
				return true;
			}
			return false;
		};

		// method which takes in a second object and decreases their "hitpoints" by this character's strength
		this.attack = function (character2) {
			character2.hp -= randomRoll(this.str);
		};
	}

	function battle(obj1, obj2) {

		obj1.attack(obj2);
		obj2.attack(obj1);
		var obj1Alive = obj1.isAlive();
		var obj2Alive = obj2.isAlive();

		console.log("Obj1: ", obj1Alive, "Obj2 Alive:", obj2Alive);
		if (obj1Alive && obj2Alive) {
			console.log("More fisticuffs!")
			battle(obj1, obj2)
		} else if (obj1Alive && !obj2Alive) {
			console.log("The user won!")
			win(obj1);
		} else {
			console.log("The user lost!")
			lose();
		}
	};

	function win(obj1) {
		$(".characterText").text("You Won!");
		$("#char1").addClass("animated bounce");
		// update the buttons text after some animations
		$("#monsterImg")
			.removeClass("flip")
			.addClass("flash")
		setTimeout(function () {
			$("#monsterImg").addClass("slideOutDown")
		}, 3000)
		setTimeout(pageReset(), 3000)

		// add experience points
		var exp;
		switch (challengeRating) {
			case "Easy":
				{
					exp = 50;
				}
				break;
			case "Medium":
				{
					exp = 75;
				}
				break;
			case "Hard":
				{
					exp = 95;
				}
				break;
			case "Boss":{
				exp = 125;
			}
			default:
				console.log("Nope");
		}
		obj1.exp += exp
		// calculate if they level or not
		if (obj1.exp > 100) {
			obj1.levelUp();
			obj1.exp -= 100
			alert("Your Character Leveled Up and is stronger now!  Maybe try a stronger boss!")
		}
		//do the put request either way.
		var updateValuesObj = {
			newHp: obj1.maxHp,
			newStr: obj1.str,
			newInt: obj1.int,
			newAgi: obj1.agi,
			newLoot: obj1.loot,
			newExp: obj1.exp,
			newLvl: obj1.level
		}

		$.ajax({
			method: "PUT",
			url: "/api/updateCharacter",
			data: updateValuesObj,
			type: "json"
		}).then(function (results) {

		});
	};


	function lose() {
		$(".characterText").text("You Lost!")
		$("#char1").addClass("animated flash");
		$(".displayFightMon animated flip").addClass("")
		setTimeout(function () {
			$("#char1").addClass("slideOutDown")
		}, 3000)
		setTimeout(function () {
			window.location = "/game_over";
		}, 5000);

	};


	function pageReset() {
		$("#fightRow").empty();

		var eBtn = buttonMaker("Easy");
		var mBtn = buttonMaker("Medium");
		var hBtn = buttonMaker("Hard");
		var bBtn = buttonMaker("Boss");
		$("#challengeBtns")

			.empty()
			.append(
				eBtn, mBtn, hBtn, bBtn
			)
		$(".characterText").text(userText)

	};