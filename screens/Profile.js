import React, { useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	Switch,
	StyleSheet,
	Settings
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { auth, handleLogout } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";

import MainLayout from "./MainLayout";
import { HeaderBar } from "../components";
import { FONTS, COLORS, SIZES, dummyData, icons } from "../constants";

const SectionTitle = ({ title }) => {
	return (
		<View
			style={{
				marginTop: SIZES.padding
			}}
		>
			<Text
				style={{
					color: COLORS.lightGray3,
					...FONTS.h4
				}}
			>
				{title}
			</Text>
		</View>
	);
};

const Setting = ({ title, value, type, onPress }) => {
	if (type == "button") {
		return (
			<TouchableOpacity
				style={{
					flexDirection: "row",
					height: 50,
					alignItems: "center"
				}}
				onPress={onPress}
			>
				<Text
					style={{
						flex: 1,
						color: COLORS.white,
						...FONTS.h3
					}}
				>
					{title}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							marginRight: SIZES.radius,
							color: COLORS.lightGray3,
							...FONTS.h4
						}}
					>
						{value}
					</Text>
					<Image
						source={icons.rightArrow}
						style={{
							height: 12,
							width: 12,
							tintColor: COLORS.white,
							marginTop: 3
						}}
					/>
				</View>
			</TouchableOpacity>
		);
	} else {
		return (
			<View
				style={{
					flexDirection: "row",
					height: 50,
					alignItems: "center"
				}}
			>
				<Text
					style={{
						flex: 1,
						color: COLORS.white,
						...FONTS.h3
					}}
				>
					{title}
				</Text>
				<Switch
					value={value}
					onValueChange={(value) => onPress(value)}
				/>
			</View>
		);
	}
};

const Profile = () => {
	const [email, setEmail] = React.useState("");
	const [uid, setUid] = React.useState("");
	const [emailVerified, setEmailVerified] = React.useState(false);
	const navigation = useNavigation();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("----------------------------");
				// console.log(user);
				console.log("----------------------------");
				console.log("User signed in is:", user.email);

				setEmail(user.email);
				setUid(user.uid);
				setEmailVerified(user.emailVerified);

				console.log("----------------------------");
				console.log("email: ", email);
				console.log("uid: ", uid);
				console.log("emailVerified: ", emailVerified);
				console.log("----------------------------");
			} else {
				console.log("User is signed out ");
			}
		});
	}, []);

	const [faceId, setFaceId] = React.useState(true);

	return (
		<MainLayout>
			<View
				style={{
					flex: 1,
					paddingHorizontal: SIZES.padding,
					backgroundColor: COLORS.black
				}}
			>
				{/* Header */}
				<HeaderBar title="Profile" />

				{/* Details */}
				<ScrollView>
					{/* Email and User ID */}
					<View
						style={{
							flexDirection: "row",
							marginTop: SIZES.radius
						}}
					>
						{/* Email and ID */}
						<View style={{ flex: 1 }}>
							<Text
								style={{
									color: COLORS.white,
									...FONTS.h3
								}}
							>
								{email}
							</Text>
							<Text
								style={{
									color: COLORS.lightGray3,
									...FONTS.h5
								}}
							>
								ID: {uid}
							</Text>
						</View>

						{/* Status */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center"
							}}
						>
							<Image
								source={icons.verified}
								style={{
									height: 25,
									width: 25,
									tintColor: emailVerified
										? COLORS.lightGreen
										: COLORS.red
								}}
							/>
							<Text
								style={{
									marginLeft: SIZES.base,
									color: emailVerified
										? COLORS.lightGreen
										: COLORS.red,
									...FONTS.body4
								}}
							>
								{emailVerified ? "verified" : "unverified"}
							</Text>
						</View>
					</View>
					<TouchableNativeFeedback
						onPress={() => {
							handleLogout();
							navigation.navigate("login");
						}}
						background={TouchableNativeFeedback.Ripple(
							COLORS.primary
						)}
					>
						<View style={{
							marginTop: SIZES.base,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: 70,
							height: 30,
							borderRadius: 10,
							backgroundColor: COLORS.lightGreen
						}}>
							<Text style={{

								color: COLORS.primary,
								...FONTS.h4
							}}>
								Log out
							</Text>
						</View>
					</TouchableNativeFeedback>

					{/* APP */}
					<SectionTitle title="APP" />
					<Setting
						title="Launch Screen"
						value="Home"
						type="button"
						onPress={() => console.log("Pressed")}
					/>
					<Setting
						title="Appearance"
						value="Dark"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<SectionTitle title="ACCOUNT" />
					<Setting
						title="Payment Currency"
						value="USD"
						type="button"
						onPress={() => console.log("Pressed")}
					/>
					<Setting
						title="Language"
						value="English"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<SectionTitle title="SECURITY" />
					<Setting
						title="FaceID"
						value={faceId}
						type="switch"
						onPress={(value) => setFaceId(value)}
					/>
					<Setting
						title="Password Settings"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>
					<Setting
						title="Change Password"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>
					<Setting
						title="2-Factor Authentication"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default Profile;
