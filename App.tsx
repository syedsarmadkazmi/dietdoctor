import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { GStyles } from "./src/theme"
import { MainStackNavigator } from "./src/navigation/MainStackNavigator"
import { NativeBaseProvider } from "native-base"

export default function App() {
	return (
		<NativeBaseProvider>
			<View style={GStyles.appContainer}>
				<StatusBar />
				<NavigationContainer>
					<MainStackNavigator/>
				</NavigationContainer>
			</View>
		</NativeBaseProvider>
	)
}