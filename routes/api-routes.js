var db = require("../models");
var monstersLow = require("../monsters/monsterslow.js");
var monstersMed = require("../monsters/monstersmedium.js");
var monstersHigh = require("../monsters/monstershigh.js");
var bosses = require("../monsters/bosses.js");


console.log('----- db.User.', db.User);

module.exports = function (app) {
	app.post("/api/characters", function (req, res) {

		db.Character.create(req.body)
			.then(function (dbCharacter) {
				res.redirect("/menu")
			})
	})


	// user creation

	app.post("/api/user", function (req, res) {
		db.User.findOrCreate({
			where: {
				user_id: req.body.user_id,
			},
			defaults: {
				user_id: req.body.user_id,
				id_token: req.body.user_id,
				user_name: req.body.user_name,
				user_email: req.body.user_email,
				user_photo: req.body.user_photo
			}

		}).then(function (dbuser) {
			res.json(dbuser)
		})
	});
	
	app.get("/api/user/info", function (req, res) {
		db.User.find({
			where: {
				id_token: req.query.id_token
			}
		}).then(function (dbuser) {
			res.json(dbuser)
		});
	});

	app.get("/api/findEasy", function (req, res) {
		var monster = pickRandom(monstersLow);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findMedium", function (req, res) {
		var monster = pickRandom(monstersMed);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findHard", function (req, res) {
		var monster = pickRandom(monstersHigh);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findBoss", function (req, res) {
		var monster = pickRandom(bosses);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/fightCharacter", function (req, res) {
		var cookie = req.cookies.characterID;
		db.Character.findAll({
			where: {
				id: cookie
			}
		}).then(function (dbCharacter) {
			res.send(dbCharacter);
		})
	});


	app.put("/api/updatecharacter", function (req, res) {
		var cookie = req.cookies.characterID;
		var rb = req.body;
		console.log("rb: ", rb);
		db.Character.update({
			hp: rb.newHP,
			level:rb.newLvl,
			agi: rb.newAgi,
			str: rb.newStr,
			int: rb.newInt,
			loot: rb.newLoot,
			exp: rb.newExp },{
			where: {
				id: cookie
			}
		}).then(function (updateChar) {
			res.send(updateChar);
		})
	})

	function pickRandom(object) {
		var slotPick = object[(Math.floor(Math.random() * object.length))];
		return slotPick;
	}
	// end
};