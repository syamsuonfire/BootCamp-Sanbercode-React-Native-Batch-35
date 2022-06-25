import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                onPress={() =>
                    navigation.navigate("MyDrawwer", {
                        screen: "App",
                        params: {
                            screen: "AboutScreen",
                        },
                    })
                }
                title="Menuju Halaman HomeScreen"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
