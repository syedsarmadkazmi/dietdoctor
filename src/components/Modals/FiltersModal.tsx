import { Badge, Box, Text } from "native-base"
import React from "react"
import { Modal, SafeAreaView, SectionList, StyleSheet } from "react-native"
import { NavHeader, PressableItem } from "~components"
import { getTags, humanizeString, mapTagTypes } from "~services"
import { GStyles } from "~theme"

export function FiltersModal({
	title,
	visible,
	onClose,
}) {
	return <Modal
		animationType="fade"
		transparent={true}
		visible={visible}
		onRequestClose={() => {
			onClose()
		}}
	>
		<Box style={styles.main}>
			<NavHeader
				title={title}
				showBackButton={true}
				onBackPress={onClose}
			/>

			<SafeAreaView style={GStyles.container}>
				<SectionList
					sections={getTags()}
					keyExtractor={(item, index) => item.id + index}
					contentContainerStyle={styles.sectionList}
					renderItem={({item}) => (
						<PressableItem>
							<Badge style={styles.badge} mr={3} mb={2} py={2} px={3} variant={"outline"}>{humanizeString(item.title)}</Badge>
						</PressableItem>
					)}
					renderSectionHeader={({section: {title}}) => (
						<>
							<Box w={400} pt={2} pb={3} bgColor={"white"}>
								<Text fontSize={"2xl"}>{mapTagTypes(title)}</Text>
							</Box>
						</>
					)}
				/>
			</SafeAreaView>
		</Box>
	</Modal>
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#fff",
	},
	sectionList: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingBottom: 40,
		paddingHorizontal: 20,
	},
	badge: {
		borderRadius: 10,
		backgroundColor: "#ece6e6",
		borderWidth: 0,
	}
})