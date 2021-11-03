import React from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	Image
} from "react-native";

import { COLORS, constants, icons } from "../constants";
import { Input } from "../components";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			{/* Background */}
			<View style={{ ...StyleSheet.absoluteFill }}>
				<Image
					style={{ flex: 1, height: null, width: null }}
					source={require("../assets/app_icon/background.png")}
				/>
			</View>
			<View style={{ ...StyleSheet.absoluteFill }}>
				<View style={styles.child}></View>
			</View>

			{/* Main content */}
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.subcontainer}>
					<View style={styles.appcontainer}>
						<View style={styles.bar}></View>
						<Text style={styles.appname}>cryptX</Text>
					</View>
					<View style={styles.logincontainer}>
						<Text style={styles.login}>Login</Text>
					</View>
					<View style={styles.barcontainer}>
						<View style={styles.whitebar}></View>
					</View>
				</View>

				{/* Inputs */}
				<View style={{marginTop: "12%"}}>
					<Input icon={icons.mail}/>
					<Input icon={icons.key} hideText={true}/>
				</View>

				{/* Buttons */}
				<View style={styles.buttonContainer}>
					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple(COLORS.primary)}
					>
						<View style={styles.button}>
							<Text style={styles.buttontext}>Login</Text>
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple(COLORS.primary)}
					>
						<View style={styles.outLineButton}>
							<Text style={styles.outLineButtontext}>Sign Up</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	child: {
		flex: 1,
		alignItems: "flex-end",
		backgroundColor: "rgba(0,0,0,0.3)"
	},
	container: {
		flex: 1,
		marginHorizontal: "10%",
		marginVertical: "16%",
		// backgroundColor: "#333"
	},
	subcontainer: {
		marginHorizontal: "12%",
		marginTop: "25%",
		// backgroundColor: "#444"
	},
	appcontainer: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	logincontainer: {
		marginLeft: 2,
		marginVertical: "7%"
	},
	barcontainer: {
		marginTop: "4%",
		marginLeft: 55
	},
	buttonContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	bar: {
		height: 2.5,
		width: 30,
		backgroundColor: COLORS.lightGreen
	},
	whitebar: {
		height: 4,
		width: 120,
		backgroundColor: COLORS.white
	},
	appname: {
		marginLeft: "5%",
		fontSize: 16,
		color: COLORS.white,
		letterSpacing: 1.5
	},
	login: {
		fontSize: 40,
		color: COLORS.white,
		letterSpacing: 1.3,
		fontWeight: "600"
	},
	button: {
		marginTop: "12%",
		height: 50,
		width: 300,
		backgroundColor: COLORS.lightGreen,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	outLineButton: {
		marginTop: "5%",
		height: 50,
		width: 300,
		backgroundColor: COLORS.black,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1.5,
		borderColor: COLORS.lightGreen
	},
	buttontext: {
		color: COLORS.black,
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 1.1
	},
	outLineButtontext: {
		color: COLORS.lightGreen,
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 1.1
	}
});
