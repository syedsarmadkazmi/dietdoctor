import { Box } from "native-base"
import { ResultsList } from "../ResultsList"
import { GStyles } from "~theme"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { ETabName } from "~types"
import { useSelector } from "react-redux"

const tabName = ETabName.MEALPLAN

export function MealPlansTab({
	isLoading,
	setCurrentTab	
}) {
	const navigation = useNavigation()
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mealplan = useSelector(({ recipes }: any) => recipes.mealplan)

	useEffect(() => {
		const unsubscribe = navigation?.addListener("focus", () => {
			setCurrentTab(tabName)
			console.log("screen is focused ", tabName)
		})
	
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe
	}, [navigation])

	return (
		<Box style={GStyles.container}>
			<ResultsList isLoading={isLoading} tabName={tabName} data={mealplan} />
		</Box>
	)
}