import React from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";
import { useFocusEffect } from "@react-navigation/native";

import MainLayout from "./MainLayout";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";
import { BalanceInfo, IconTextButton } from "../components";

const Home = ({ getCoinMarket, getHoldings, myHoldings, coins }) => {
	useFocusEffect(
		React.useCallback(() => {
			// console.log("Home useFocusEffect");
			getHoldings((holdings = dummyData.holdings));
			getCoinMarket();

			// console.log(myHoldings);
			// console.log(coins);
		}, [])
	);

	let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
	let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0);
	let percChange = valueChange / (totalWallet - valueChange) * 100;

	function renderWalletInfoSection() {
		return (
			<View
				style={{
					paddingHorizontal: SIZES.padding,
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					backgroundColor: COLORS.gray
				}}
			>
				{/* Balance Info */}
				<BalanceInfo
					title="Your Wallet"
					displayAmount={totalWallet}
					changePct={percChange}
					containerStyle={{
						marginTop: 50
					}}
				/>

				{/* Buttons */}
				<View
					style={{
						flexDirection: "row",
						marginTop: 30,
						marginBottom: -15,
						paddingHorizontal: SIZES.radius
					}}
				>
					<IconTextButton
						label="Transfer"
						icon={icons.send}
						conatinerStyle={{
							flex: 1,
							height: 40,
							marginRight: SIZES.radius
						}}
						onPress={() => console.log("Transfer")}
					/>
					<IconTextButton
						label="Withdraw"
						icon={icons.withdraw}
						conatinerStyle={{
							flex: 1,
							height: 40
						}}
						onPress={() => console.log("Withdraw")}
					/>
				</View>
			</View>
		);
	}

	return (
		<MainLayout>
			{/* <View style={{ height: 32 }}></View> */}
			<View
				style={{
					flex: 1,
					backgroundColor: COLORS.black
				}}
			>
				{/* Header - Wallet info */}
				{renderWalletInfoSection()}

				{/* Chart */}

				{/* Top Cryptocurrencies */}
			</View>
		</MainLayout>
	);
};

function mapStateToProps(state) {
	return {
		myHoldings: state.marketReducer.myHoldings,
		coins: state.marketReducer.coins
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
		},
		getCoinMarket: (
			currency,
			coinList,
			orderBy,
			sparkline,
			priceChangePerc,
			perPage,
			page
		) => {
			return dispatch(
				getCoinMarket(
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
