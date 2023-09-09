import "react-native-gesture-handler"
import { NativeBaseProvider } from "native-base"
import { Provider } from "react-redux"
import { store } from "~redux"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "~services"
import { Main } from "~screens"

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<NativeBaseProvider>
				<Provider store={store}>
					<Main/>
				</Provider>
			</NativeBaseProvider>
		</ApolloProvider>
	)
}