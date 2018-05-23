module.exports =function (sequelize, DataTypes){
	var User = sequelize.define("User", {
		id_token:{
			type: DataTypes.TEXT,
			
		},
		user_id: {

			type: DataTypes.TEXT,
		},
		user_name: {
			type: DataTypes.STRING,
			validate: {
	
			}
		},
		user_email: {
			type: DataTypes.STRING,
			validate:{
			isEmail: true,           // checks for email format (foo@bar.com)
			}
		},
		user_photo:{
			type: DataTypes.STRING
		}
	})

	return User;
};