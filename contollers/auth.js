// {{-- Google Auth JS --}}

	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

		var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

		$.ajax({
			url: "/api/user ",
			type: "POST",

			data: {
				id_token: id_token,
				user_id: profile.getId(),
				user_name: profile.getName(),
				user_email: profile.getEmail(),
				user_photo: profile.getImageUrl()
			},
		}).then(function (data) {
			location.href = "/menu";
		});
	}

//  {{!-- end google auth --}} {{!-- signout button js --}}
function signOut() {
	document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://the-broken-moon.herokuapp.com/"
}

//  {{!-- end signout button js --
// export{id_token, user_name, user_photo};
