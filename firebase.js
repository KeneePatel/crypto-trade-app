import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAfKrFPiVdm31EU6AFJH31eWqAYrSXPrX0",
	authDomain: "cryptx-f57f6.firebaseapp.com",
	projectId: "cryptx-f57f6",
	storageBucket: "cryptx-f57f6.appspot.com",
	messagingSenderId: "1017453747720",
	appId: "1:1017453747720:web:af9e0b8f0440793dc5bbbd",
	measurementId: "G-NF9B95T45X"
};

// Initialize Firebase
let app;
console.log("calling getApps");
// console.log(getApps());
console.log(getApps().length);
if (!getApps().length) {
	console.log("calling initializeApp");
	app = initializeApp(firebaseConfig);
} else {
	console.log("calling getApp");
	app = getApp();
	// console.log(app);
}

const auth = getAuth(app);

function handleSignup(email, password) {
    console.log("Signing Up with ", email, password);

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCrendentials) => {
			const user = userCrendentials.user;
			console.log("User Details: ");
			console.log(user);
		})
		.catch((error) => {
			console.log(error.message);
		});
}

function handleLogin(email, password) {
    console.log("Logining up with: ", email," / ", password);

	signInWithEmailAndPassword(auth, email, password)
		.then((userCrendentials) => {
			const user = userCrendentials.user;
			console.log("User Details: ");
			console.log(user);
		})
		.catch((error) => {
			console.log(error.message);
		});
}

export { auth, handleSignup, handleLogin };
