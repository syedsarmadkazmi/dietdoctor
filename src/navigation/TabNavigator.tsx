import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { MealPlansTab, RecipesTab } from "~screens"

const Tab = createMaterialTopTabNavigator()


export const TabNavigator = ({ screenProps }) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Recipes" options={{ title: "Recipes" }}>
				{() => <RecipesTab {...screenProps} />}
			</Tab.Screen>
			<Tab.Screen name="MealPlans" options={{ title: "Meal Plans" }}>
				{() => <MealPlansTab {...screenProps} />}
			</Tab.Screen>
		</Tab.Navigator>
	)
}