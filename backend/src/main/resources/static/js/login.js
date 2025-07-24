// document.addEventListener("DOMContentLoaded", function () {
//     const loginContainer = document.getElementById("login-container");
//     const signupContainer = document.getElementById("signup-container");

//     document.getElementById("show-signup").addEventListener("click", function (event) {
//         event.preventDefault();
//         loginContainer.classList.add("hidden");
//         signupContainer.classList.remove("hidden");
//     });

//     document.getElementById("show-login").addEventListener("click", function (event) {
//         event.preventDefault();
//         signupContainer.classList.add("hidden");
//         loginContainer.classList.remove("hidden");
//     });
// });

		document.getElementById('show-signup').onclick = function(e) {
			e.preventDefault();
			document.getElementById('login-container').classList.add('hidden');
			document.getElementById('signup-container').classList.remove('hidden');
		};
		document.getElementById('show-login').onclick = function(e) {
			e.preventDefault();
			document.getElementById('signup-container').classList.add('hidden');
			document.getElementById('login-container').classList.remove('hidden');
		};
	