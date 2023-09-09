import { Box, Center, Circle, Input, Square } from "native-base"
import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet } from "react-native"
import { PressableItem } from "./PressableItem"


export function TextInput({
	onClear,
	onFilter,
	...otherProps
}) {

	const { value, isFilterOn } = otherProps

	const rightElement = 
		<Center h={"100%"} flexDir={"row"} paddingRight={2} bgColor={"#fff"}>
			{value && <PressableItem onPress={onClear}>
				<Square w="35px" h="35px">
					<Entypo name="circle-with-cross" size={15} />
				</Square>
			</PressableItem>
			}

			<PressableItem onPress={onFilter}>
				<Circle w="35px" h="35px" style={isFilterOn && styles.filterOn} borderColor={"#0ca50c"} borderWidth={1}>
					<Ionicons name="filter-sharp" color={isFilterOn ? "#fff" : "#000"} size={20} />
				</Circle>
			</PressableItem>
		</Center>

	return (
		<Box style={styles.inputBox}>
			<Input 
				h={50} 
				w="100%"
				placeholder="Search"
				variant={"outline"}
				rightElement={rightElement}
				{...otherProps}
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
	filterOn: {
		backgroundColor: "#0ca50c",
		color: "#fff",
	}
})