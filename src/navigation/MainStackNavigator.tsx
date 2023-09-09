import { createStackNavigator } from "@react-navigation/stack"
import { Search } from "../screens/Search/Search"

const Stack = createStackNavigator()

export function MainStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Search" component={Search} />
		</Stack.Navigator>
	)
}