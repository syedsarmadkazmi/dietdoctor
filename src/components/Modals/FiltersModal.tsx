import { Button, Box, Flex, Square, Text } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import React, { useState } from "react"
import { Modal, StyleSheet } from "react-native"
import { PressableItem } from "~components"
import { GStyles } from "~theme"

export function FiltersModal({
	title = "Recipe Filters",
}) {
	const [modalVisible, setModalVisible] = useState(false)

	return <>
		<Button onPress={() => setModalVisible(true)}>Open Modal</Button>
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible)
			}}
		>
			<Box style={styles.main}>
				<Flex h={50} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
					<Box w={20} alignItems={"flex-start"}>
						<PressableItem onPress={() => setModalVisible(false)}>
							<Square h={50} px={5}>
								<AntDesign name="arrowleft" size={20} />
							</Square>
						</PressableItem>
					</Box>
					<Text style={GStyles.header}>{title}</Text>
					<Box w={20}/>
				</Flex>

				<Box flex={1} bgColor={"purple.400"} mt={3}>
					

				</Box>
			</Box>
		</Modal>
	</>
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50
	}
})