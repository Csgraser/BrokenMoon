// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersLow = [
	{
		"name": "Slime",
		"photo": "images/monsterimages/slime.png",
		"scores": [
			hp = 5,
			str = 3,
			agi = 2,
			int = 1,
			exp = 3

		]
	},
	{
		"name": "Wolf",
		"photo": "images/monsterimages/wolf.png",
		"scores": [
			hp = 5,
			str = 2,
			agi = 4,
			int = 1,
			exp = 3

		]
	},
	{
		"name": "Skeleton",
		"photo": "images/monsterimages/skeleman.png",
		"scores": [
			hp = 5,
			str = 4,
			agi = 2,
			int = 1,
			exp = 3

		]
	},
	{
		"name": "Zombie",
		"photo": "images/monsterimages/zombie.png",
		"scores": [
			hp = 5,
			str = 3,
			agi = 1,
			int = 1,
			exp = 3

		]
	},
	{
		"name": "Fairy",
		"photo": "images/monsterimages/fairy.png",
		"scores": [
			hp = 5,
			str = 2,
			agi = 3,
			int = 2,
			exp = 3

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersLow;