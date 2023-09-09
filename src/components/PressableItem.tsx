import { Pressable } from "react-native"
import { StyleSheet } from "react-native"

export function PressableItem({ children, ...otherProps }) {

	return <Pressable 
		style={({ pressed }) => pressed ? [styles.buttonStyle, styles.pressedStyle] : styles.buttonStyle}
		{...otherProps}>
		{children}
	</Pressable>
}

const styles = StyleSheet.create({
	buttonStyle: {
		justifyContent: "center",
		alignItems: "center"
	},
	pressedStyle: {
		opacity: 0.5,
		
	}
})