import { View, Text } from "react-native";
import { GStyles } from "~theme";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MealPlansTab, RecipesTab } from "~screens";

const Tab = createMaterialTopTabNavigator();


export const TabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Recipes" component={RecipesTab} />
          <Tab.Screen name="MealPlans" component={MealPlansTab} />
        </Tab.Navigator>
      );
}