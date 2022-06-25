import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import LoginScreen from "../features/auth/LoginScreen";
import RegisterScreen from "../features/auth/RegisterScreen";
import SplashScreen from "../features/auth/SplashScreen";
import NewsListScreen from "../features/news/NewsListScreen";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);

	return (
		<Stack.Navigator>
			{isSignedIn ? (
				<Stack.Screen name="NewsListScreen" component={NewsListScreen} />
			) : (
				<>
					<Stack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};
