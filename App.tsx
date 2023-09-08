import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GStyles } from './src/theme';
import { TabNavigator } from '~navigation';

export default function App() {
  return (
    <View style={GStyles.container}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </View>
  );
}