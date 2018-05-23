// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var bosses = [
	{
		"name": "Sloth",

		"photo": "images/bossimages/sloth.png",
		"scores": [
			hp = 12,
			str = 6,
			agi = 3,
			int = 6,
			exp = 7

		]
	},
	{
		"name": "Envy",

		"photo": "images/bossimages/envy.png",
		"scores": [
			hp = 18,
			str = 8,
			agi = 10,
			int = 7,
			exp = 12

		]
	},
	{
		"name": "Lust",
		"photo": "images/bossimages/lust.png",
		"scores": [
			hp = 24,
			str = 10,
			agi = 12,
			int = 14,
			exp = 17

		]
	},
	{
		"name": "Gluttony",
		"photo": "images/bossimages/gluttony.png",
		"scores": [
			hp = 31,
			str = 15,
			agi = 8,
			int = 19,
			exp = 24

		]
	},
	{
		"name": "Greed",
		"photo": "images/bossimages/greed.png",
		"scores": [
			hp = 40,
			str = 18,
			agi = 18,
			int = 20,
			exp = 30

		]
	},
	{
		"name": "Wrath",
		"photo": "images/bossimages/wrath.png",
		"scores": [
			hp = 47,
			str = 22,
			agi = 20,
			int = 22,
			exp = 37

		]
	},
	{
		"name": "Pride",
		"photo": "images/bossimages/pride.png",
		"scores": [
			hp = 60,
			str = 30,
			agi = 30,
			int = 30,
			exp = 45

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = bosses;