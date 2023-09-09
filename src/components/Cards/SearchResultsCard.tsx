import { Box, Center, Divider, Flex, Image, Text, Circle } from "native-base"
import { Entypo } from "@expo/vector-icons"
import React from "react"
import { PressableItem } from "../PressableItem"
import { ENV } from "~config"
import { SearchResultsCardProps } from "~types"

export const SearchResultsCard: React.FC<SearchResultsCardProps>  = ({ 
	showOptions = true,
	title,
	imageURL,
	subTitle = null,
}) => {

	return <>
		<Flex direction="row" h={130} overflow={"hidden"} borderRadius={10} my={3}>
			<Flex w={"40%"} bgColor={"#dddcdc"} overflow={"hidden"} borderRadius={10}>
				<Image 
					source={{ uri: `${ENV.IMAGE_BASE_URL}${imageURL}` }} 
					resizeMode="cover"
					alt=""
					flex={1}
					borderRadius={10} overflow={"hidden"}
				/>
			</Flex>
			<Center w={"60%"} pt={2} px={3} alignItems={"flex-start"}>
				<Text fontSize={"lg"}>{title}</Text>
				{subTitle}
			</Center>

			{showOptions && 
				<PressableItem>
					<Box position={"absolute"} right={2} top={1}>
						<Circle w={25} h={25} bgColor={"gray.200"}>
							<Entypo name="dots-three-horizontal" size={15} color="gray" />
						</Circle>
					</Box>
				</PressableItem>
			}
			
		</Flex>
		<Divider />
	</>   
}