import { View } from "react-native"
import { TabNavigator } from "../../navigation/TabNavigator"
import { GStyles } from "~theme"
import { Box, Center, Circle, Square } from "native-base"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { FiltersModal, PressableItem, TextInput } from "~components"
import React, { useState } from "react"


export function Search({ navigation }) {
	const [value, setValue] = useState("")
	const handleChange = text => setValue(text)

	const rightElement = 
		<Center h={"100%"} flexDir={"row"} paddingRight={2}>
			<PressableItem onPress={() => console.log("pressed clear")}>
				<Square w="35px" h="35px" bgColor={"red"}>
					<Entypo name="circle-with-cross" size={15} />
				</Square>
			</PressableItem>

			<PressableItem onPress={() => console.log("pressed filter")}>
				<Circle w="35px" h="35px" borderColor={"green.500"} borderWidth={1}>
					<Ionicons name="filter-sharp" size={20} />
				</Circle>
			</PressableItem>
		</Center>

	return (
		<View style={GStyles.container}>
			<Box position={"absolute"} top={12} width={"100%"} zIndex={10000}>
				<TextInput 
					value={value}
					onChangeText={handleChange}
					placeholder="Search"
					rightElement={rightElement}
				/>
			</Box>
			<TabNavigator/>
			<FiltersModal/>
		</View>
	)
}