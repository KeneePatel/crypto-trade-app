import React from "react";
import { View } from "react-native";

import { COLORS, SIZES, icons } from "../constants";

export default function MainLayout({ children }) {
	return (
		<View
			style={{
				flex: 1
			}}
		>
			{children}
		</View>
	);
}
