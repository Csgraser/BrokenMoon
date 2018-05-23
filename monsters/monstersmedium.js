// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersMedium = [
	{
		"name": "Necromancer",
		"photo": "images/monsterimages/necromancer.png",
		"scores": [
			hp = 10,
			str = 5,
			agi = 3,
			int = 5,
			exp = 6
		
		]
	},
	{
		"name": "Gorgon",
		"photo": "images/monsterimages/gorgon.png",
		"scores": [
			hp = 10,
			str = 6,
			agi = 3,
			int = 4,
			exp = 6

		]
	},
	{
		"name": "Gunslinger",
		"photo": "images/monsterimages/gunslinger.png",
		"scores": [
			hp = 10,
			str = 5,
			agi = 6,
			int = 3,
			exp = 6

		]
	},
	{
		"name": "Mummy",
		"photo": "images/monsterimages/mummy.png",
		"scores": [
			hp = 10,
			str = 5,
			agi = 3,
			int = 3,
			exp = 6

		]
	},
	{
		"name": "Dune-Stalker",
		"photo": "images/monsterimages/dunestalker.png",
		"scores": [
			hp = 10,
			str = 4,
			agi = 7,
			int = 7,
			exp = 6

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersMedium;