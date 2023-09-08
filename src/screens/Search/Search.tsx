import { View } from "react-native"
import { TabNavigator } from "../../navigation/TabNavigator"
import { GStyles } from "~theme"


export function Search() {
	return (
		<View style={GStyles.container}>
			<TabNavigator/>
		</View>
	)
}