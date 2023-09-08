import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Eat, Search } from "~screens"

const Tab = createMaterialBottomTabNavigator()

export function BottomTabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Search} />
			<Tab.Screen name="Eat" component={Eat} />
		</Tab.Navigator>
	)
}