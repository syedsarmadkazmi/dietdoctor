import { createStackNavigator } from "@react-navigation/stack"
import { Search } from "../screens/Search/Search"
import { NavHeader } from "~components"

const Stack = createStackNavigator()

export function MainStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			header: () => {
				return <>
					<NavHeader title="Search" showBackButton={false} />
				</>
			},
			headerTintColor: "royalblue",
			headerStyle: {
				backgroundColor: "#fff"
			}
			
		}}>
			<Stack.Screen name="Search" component={Search} />
		</Stack.Navigator>
	)
}