import { Box, Input } from "native-base"
import { StyleSheet } from "react-native"


export function TextInput(props) {


	return (
		<Box style={styles.inputBox}>
			<Input 
				h={50} 
				w="100%"
				placeholder="Search"
				variant={"outline"}
				{...props}
				style={styles.inputStyle}
			/>
		</Box>
	)
}

const styles = StyleSheet.create({
	inputBox: {
		elevation: 5,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { width: 4, height: 4 },
		borderWidth: 0,
		backgroundColor: "#fff",
		borderRadius: 10,
		margin: 20,
	},
	inputStyle: {
		height: "100%",
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 16,
	},
})