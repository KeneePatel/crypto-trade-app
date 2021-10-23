import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/core";
import { getHoldings } from "../stores/market/marketActions";

import MainLayout from "./MainLayout";
import { BalanceInfo, Chart } from "../components";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";

const Portfolio = ({ getHoldings, myHoldings }) => {
	useFocusEffect(
		React.useCallback(() => {
			// console.log("Home useFocusEffect");
			getHoldings((holdings = dummyData.holdings));
			
			// console.log(myHoldings[0]?.sparkline_in_7d);
		}, [])
	);

	let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
	let valueChange = myHoldings.reduce(
		(a, b) => a + (b.holding_value_change_7d || 0),
		0
	);
	let percChange = (valueChange / (totalWallet - valueChange)) * 100;

	function renderCurrentBalanceSection() {
		return (
			<View
				style={{
					paddingHorizontal: SIZES.padding,
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					backgroundColor: COLORS.gray
				}}
			>
				<Text
					style={{
						marginTop: 50,
						color: COLORS.white,
						...FONTS.largeTitle
					}}
				>
					Portfolio
				</Text>

				<BalanceInfo
					title="Current Balance"
					displayAmount={totalWallet}
					changePct={percChange}
					containerStyle={{
						marginBottom: 20
					}}
				/>
			</View>
		);
	}

	return (
		<MainLayout>
			<View
				style={{
					flex: 1,
					backgroundColor: COLORS.black
				}}
			>
				{/* Header - Current balance */}
				{renderCurrentBalanceSection()}

				{/* Chart */}
				<Chart
					containerStyle={{
						marginTop: SIZES.radius,
					}}
					chartPrices={myHoldings[0]?.sparkline_in_7d?.value}
				/>

				{/* Your Assets */}
				<FlatList
					data={myHoldings}
					keyExtractor={item => item.id}
					contentContainerStyle={{
						marginTop: SIZES.padding,
						paddingHorizontal: SIZES.padding
					}}
					ListHeaderComponent={
						<View>
							{/* Section Header */}

							{/* Header Label */}
						</View>
					}
				/>
			</View>
		</MainLayout>
	);
};

function mapStateToProps(state) {
	return {
		myHoldings: state.marketReducer.myHoldings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getHoldings: (
			holdings,
			currency,
			coinList,
			orderBy,
			sparkline,
			priceChangePerc,
			perPage,
			page
		) => {
			return dispatch(
				getHoldings(
					holdings,
					currency,
					coinList,
					orderBy,
					sparkline,
					priceChangePerc,
					perPage,
					page
				)
			);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
