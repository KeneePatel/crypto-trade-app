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
				<View style={{marginTop: "15%"}}>
					<Input icon={icons.profile}/>
					<Input icon={icons.key}/>
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
	logo: {
		width: "15%",
		height: "15%",
		margin: "5%"
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
		marginTop: "15%",
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
	bar: {
		height: 3,
		width: 30,
		backgroundColor: COLORS.lightGreen
	},
	whitebar: {
		height: 5,
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
	}
});
