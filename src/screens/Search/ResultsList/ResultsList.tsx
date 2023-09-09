import { Box, ScrollView } from "native-base"
import { StyleSheet, Text } from "react-native"
import { SearchResultsCard } from "~components"



export function ResultsList() {
	
	return (
		<Box style={styles.content} bgColor={"#dfeedf"} pt={95}>
			<Box style={styles.results}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
					<SearchResultsCard/>
				</ScrollView>

			</Box>
		</Box>
	)
}


const styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	results: {
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
	},
})


