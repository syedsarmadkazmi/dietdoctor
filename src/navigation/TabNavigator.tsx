import { View, Text } from "react-native";
import { GStyles } from "~theme";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MealPlans, Recipes } from "~screens";

const Tab = createMaterialTopTabNavigator();


export const TabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="RecipesK" component={Recipes} />
          <Tab.Screen name="MealPlans" component={MealPlans} />
        </Tab.Navigator>
      );
}