import { Box, Flex, Square, Text } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { GStyles } from "~theme"
import { PressableItem } from "./PressableItem"
import { NavHeaderProps } from "~types"
import { CONSTANTS } from "~config"

export const NavHeader: React.FC<NavHeaderProps>  = ({ 
	onBackPress,
	showBackButton,
	title,
}) => {
	return <Flex mt={CONSTANTS.STATUS_BAR_HEIGHT} h={50} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} bgColor={"#fff"} >
		<Box w={20} alignItems={"flex-start"}>
			{showBackButton &&
			<PressableItem onPress={onBackPress}>
				<Square h={50} px={5}>
					<AntDesign name="arrowleft" size={20} />
				</Square>
			</PressableItem>
			}
		</Box>
		<Text style={GStyles.header}>{title}</Text>
		<Box w={20}/>
	</Flex>
}