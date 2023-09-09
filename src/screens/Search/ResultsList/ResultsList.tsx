import { Box, ScrollView } from "native-base"
import { StyleSheet, Text } from "react-native"
import { SearchResultsCard } from "~components"



export function ResultsList() {
	
	return (
		// <View style={GStyles.container}>
		<Box style={styles.content} bgColor={"#dfeedf"} pt={95}>
			{/* <TextInput 
					value={value}
					onChangeText={handleChange}
					placeholder="Search"
					rightElement={rightElement}
				/> */}

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
					<Text>Hello there</Text>
				</ScrollView>

			</Box>
		</Box>
		// </View>
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


