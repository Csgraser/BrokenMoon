// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersHigh = [
	{
		"name": "Demon",

		"photo": "images/monsterimages/demon.png",
		"scores": [
			hp = 27,
			str = 12,
			agi = 11,
			int = 12,
			exp = 15

		]
	},
	{
		"name": "Vampire",
		"photo": "images/monsterimages/vampire.png",
		"scores": [
			hp = 35,
			str = 11,
			agi = 11,
			int = 12,
			exp = 15


		]
	},
	{
		"name": "Eye",
		"photo": "images/monsterimages/eye.png",
		"scores": [
			hp = 25,
			str = 14,
			agi = 12,
			int = 15,
			exp = 15

		]
	},
	{
		"name": "Ghost",
		"photo": "images/monsterimages/ghost.png",
		"scores": [
			hp = 25,
			str = 13,
			agi = 10,
			int = 17,
			exp = 15

		]
	},
	{
		"name": "Mind-Flayer",
		"photo": "images/monsterimages/mindflayer.png",
		"scores": [
			hp = 35,
			str = 15,
			agi = 15,
			int = 15,
			exp = 15

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersHigh;