import React from "react";

import { connect } from "react-redux";
import { setTradeModalVisibility } from "../stores/tab/tabActions";

import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, constants, icons } from "../constants";
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
};

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {

    function tradeTabButtonOnClickHandler() {
        // console.log("isTradeModalVisible: ", isTradeModalVisible);
        setTradeModalVisibility(!isTradeModalVisible);
    }

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 75,
					backgroundColor: COLORS.gray,
					borderTopColor: "transparent"
				}
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={icons.home}
								label="Home"
							/>
						);
					}
				}}
			/>
			<Tab.Screen
				name="Portfolio"
				component={Portfolio}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={icons.briefcase}
								label="Portfolio"
							/>
						);
					}
				}}
			/>
			<Tab.Screen
				name="Trade"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={icons.trade}
								label="Trade"
								isTrade={true}
							/>
						);
					},
					tabBarButton: (props) => (
						<TabBarCustomButton
							{...props}
							onPress={() => tradeTabButtonOnClickHandler()}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Market"
				component={Market}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={icons.market}
								label="Market"
							/>
						);
					}
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={icons.profile}
								label="Profile"
							/>
						);
					}
				}}
			/>
		</Tab.Navigator>
	);
};

function mapStateToProps(state) {
	return {
		isTradeModalVisible: state.tabReducer.isTradeModalVisible
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setTradeModalVisibility: (isVisible) =>
			dispatch(setTradeModalVisibility(isVisible))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
