import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import Tabs from "./navigation/tabs";
import Login from "./screens/Login";

const Stack = createStackNavigator();

import { LogBox } from "react-native";
LogBox.ignoreLogs(['Warning: AsyncStorage has been extracted from react-native core']);

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName={"login"}
				>
					{/* <Stack.Screen name="loading" component={Loading} /> */}
					<Stack.Screen name="login" component={Login} />
					<Stack.Screen name="tabs" component={Tabs} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
