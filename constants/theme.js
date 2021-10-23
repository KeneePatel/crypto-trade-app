import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
	primary: "#1E1E1E",
	secondary: "#4B4B4B",
	white: "#fff",
	lightGreen: "#4BEE70",
	red: "#D84035",
	black: "#000000",
	gray: "#212120",
	gray1: "#1f1f1f",
	lightGray: "#3B3B3B",
	lightGray2: "#212125",
	lightGray3: "#757575",
	transparentWhite: "rgba(255, 255, 255, 0.2)",
	transparentBlack: "rgba(0, 0, 0, 0.8)",
	transparentBlack1: "rgba(0, 0, 0, 0.4)"
};

export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	largeTitle: 40,
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	h5: 12,
	h6: 10,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height,

	// misc sizes
	iconSize: 26
};

export const FONTS = {
	largeTitle: {
		fontFamily: "Roboto",
		fontSize: SIZES.largeTitle
	},
	h1: {
		fontFamily: "Roboto",
		fontSize: SIZES.h1,
		lineHeight: 36,
		fontWeight: "bold"
	},
	h2: {
		fontFamily: "Roboto",
		fontSize: SIZES.h2,
		lineHeight: 30,
		fontWeight: "bold"
	},
	h3: {
		fontFamily: "Roboto",
		fontSize: SIZES.h3,
		lineHeight: 22,
		fontWeight: "bold"
	},
	h4: {
		fontFamily: "Roboto",
		fontSize: SIZES.h4,
		lineHeight: 22,
		fontWeight: "bold"
	},
	h5: {
		fontFamily: "Roboto",
		fontSize: SIZES.h5,
		lineHeight: 22,
		fontWeight: "bold"
	},
	h6: {
		fontFamily: "Roboto",
		fontSize: SIZES.h6,
		lineHeight: 22,
		fontWeight: "bold"
	},
	body1: {
		fontFamily: "Roboto",
		fontSize: SIZES.body1,
		lineHeight: 36,
		fontWeight: "bold"
	},
	body2: {
		fontFamily: "Roboto",
		fontSize: SIZES.body2,
		lineHeight: 30,
		fontWeight: "bold"
	},
	body3: {
		fontFamily: "Roboto",
		fontSize: SIZES.body3,
		lineHeight: 22,
		fontWeight: "bold"
	},
	body4: {
		fontFamily: "Roboto",
		fontSize: SIZES.body4,
		lineHeight: 22,
		fontWeight: "bold"
	},
	body5: {
		fontFamily: "Roboto",
		fontSize: SIZES.body5,
		lineHeight: 22,
		fontWeight: "bold"
	}
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
