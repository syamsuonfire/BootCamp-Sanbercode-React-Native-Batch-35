import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

import { registerUser } from "../../app/services/auth";

const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async () => {
		try {
			await registerUser({
				email,
				name,
				password,
			});

			Alert.alert("Sukses register", "Silahkan masuk dengan akun anda");
		} catch (error) {
			console.error(error.response.data);
			Alert.alert("Gagal Daftar", error.response.data.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<TextInput
				style={styles.textInput}
				value={email}
				onChangeText={setEmail}
				placeholder="Masukkan email anda"
			/>
			<TextInput
				style={styles.textInput}
				value={name}
				onChangeText={setName}
				placeholder="Masukkan nama lengkap anda"
			/>
			<TextInput
				style={styles.textInput}
				value={password}
				onChangeText={setPassword}
				placeholder="Masukkan password anda"
			/>
			<Button title="Register" onPress={onLogin} />
			<Button
				title="Login"
				onPress={() => {
					navigation.navigate("LoginScreen");
				}}
			/>
		</View>
	);
};

export default RegisterScreen;

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
