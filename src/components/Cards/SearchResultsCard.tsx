import { Box, Center, Divider, Flex, Image, Text, Circle } from "native-base"
import { Entypo } from "@expo/vector-icons"
import React from "react"
import { PressableItem } from "../PressableItem"

export function SearchResultsCard({ 
	showOptions = true,
	title = "",
	imageURL = "",
	subTitle = null,
}) {

	return <>
		<Flex direction="row" h={130} overflow={"hidden"} borderRadius={10} my={3}>
			<Flex w={"40%"} bgColor={"green.900"} overflow={"hidden"} borderRadius={10}>
				<Image 
					source={{ uri: "https://www.dietdoctor.com/wp-content/uploads/2016/11/DD-288-2.jpg" }} 
					resizeMode="cover"
					alt="recipe image"
					flex={1}
					borderRadius={10} overflow={"hidden"}
				/>
			</Flex>
			<Center w={"60%"} px={3} alignItems={"flex-start"}>
				<Text fontSize={"lg"}>Keto Chicken Steak</Text>
				<Flex direction="row" my={2}>
					<Text fontSize={"sm"} color={"gray.500"}>5 min</Text>
					<Divider mx="2" orientation="vertical" />
					<Text fontSize={"sm"} color={"gray.500"}>Easy</Text>
					<Divider mx="2" orientation="vertical" />
					<Text fontSize={"sm"} color={"gray.500"}>Premium</Text>
				</Flex>
			</Center>

			{showOptions && 
				<PressableItem>
					<Box position={"absolute"} right={3} top={3}>
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