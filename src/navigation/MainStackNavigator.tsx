import { createStackNavigator } from '@react-navigation/stack';
import { Search } from '~screens';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNav" component={BottomTabNavigator} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}