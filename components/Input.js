import React from "react";

import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ImageBackground,
	Image
} from "react-native";
import { icons } from "../constants";

export default function Input({ icon, hideText }) {
	return (
		<View style={styles.container}>
			<View style={styles.child}>
				<Image source={icon} resizeMode="contain" style={styles.icon} />
				<Image
					source={icons.rightArrow}
					resizeMode="contain"
					style={styles.arrow}
				/>
				<TextInput style={styles.input} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		height: 54,
		width: "100%",
		alignItems: "center",
		// backgroundColor: "white",
		marginTop: "10%"
	},
	child: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "100%",
		width: "85%",
		// backgroundColor: "grey",
		borderBottomWidth: 1,
		borderColor: "#4BEE7090"
	},
	icon: {
		height: 35,
		width: 35,
		tintColor: "#ddd"
	},
	arrow: {
		height: 16,
		width: 35,
		tintColor: "#ddd"
	},
	input: {
		flex: 1,
		width: "100%",
		height: "100%",
		fontSize: 18,
		color: "white"
	}
});
