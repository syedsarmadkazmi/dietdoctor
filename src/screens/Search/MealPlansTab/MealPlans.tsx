import { View } from "react-native"
import { GStyles } from "~theme"
import { ResultsList } from "../ResultsList"


export function MealPlansTab() {
	return (
		<View style={GStyles.container}>
			<ResultsList/>
		</View>
	)
}