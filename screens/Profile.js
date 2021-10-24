import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	Switch
} from "react-native";

import MainLayout from "./MainLayout";
import { HeaderBar } from "../components";
import { FONTS, COLORS, SIZES, dummyData, icons } from "../constants";

const Profile = () => {
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
								{dummyData.profile.email}
							</Text>
							<Text
								style={{
									color: COLORS.lightGray3,
									...FONTS.h3
								}}
							>
								ID: {dummyData.profile.id}
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
									width: 25
								}}
							/>
							<Text
								style={{
									marginLeft: SIZES.base,
									color: COLORS.lightGreen,
									...FONTS.body4
								}}
							>
								Verified
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default Profile;
