import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { GStyles } from "./src/theme"
import { MainStackNavigator } from "./src/navigation/MainStackNavigator"
import { NativeBaseProvider } from "native-base"
import { Provider } from "react-redux"
import { store } from "~redux"

export default function App() {
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<View style={GStyles.appContainer}>
					<StatusBar/>
					<NavigationContainer>
						<MainStackNavigator/>
					</NavigationContainer>
				</View>
			</Provider>
		</NativeBaseProvider>
	)
}