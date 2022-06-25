import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

import { loginUser } from "../../app/services/auth";
import { login } from "./authSlice";

const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async () => {
		try {
			const res = await loginUser({
				email,
				password,
			});

			dispatch(
				// Dispatch token dari response api
				login({
					token: res.data?.results.token,
				}),
			);
		} catch (error) {
			console.error(error.response.data);
			Alert.alert("Login Gagal", error.response.data.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.textInput}
				value={email}
				onChangeText={setEmail}
				placeholder="Masukkan email anda"
			/>
			<TextInput
				style={styles.textInput}
				value={password}
				onChangeText={setPassword}
				placeholder="Masukkan password anda"
			/>
			<Button title="Login" onPress={onLogin} />
			<Button
				title="Register"
				onPress={() => {
					navigation.navigate("RegisterScreen");
				}}
			/>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	title: {
		alignSelf: "center",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	textInput: {
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginBottom: 10,
	},
});
