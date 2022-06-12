import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from "react-native";

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#003366" barStyle="light-content" />

                <View style={styles.logo}>
                    <Image
                        source={require("./assets/images/Logo.png")}
                        style={{ width: 300, height: 100 }}
                    />
                    <Text style={styles.textLogin}>Login</Text>
                </View>

                <View style={styles.formLogin}>
                    <Text style={styles.textForm}>Username / Email</Text>
                    <TextInput style={styles.inputBox} />
                    <Text style={styles.textForm}>Password</Text>
                    <TextInput style={styles.inputBox} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Masuk</Text>
                </TouchableOpacity>

                <View>
                    <Text style={{ color: "#3EC6FF" }}>Atau</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonDaftar}>
                        <Text style={styles.buttonText}>Daftar?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    textLogin: {
        marginVertical: 20,
        color: "#003366",
        fontSize: 20,
        justifyContent: "flex-end",
    },

    formLogin: {
        flex: 1,
        justifyContent: "center",
    },

    inputBox: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#003366",
    },

    textForm: {
        marginTop: 15,
        color: "#003366",
        fontSize: 15,
    },

    button: {
        width: 120,
        borderRadius: 25,
        backgroundColor: "#3EC6FF",
        marginVertical: 30,
        paddingVertical: 2,
    },

    buttonText: {
        paddingTop: 0,
        fontSize: 20,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
    },

    buttonDaftar: {
        width: 120,
        borderRadius: 25,
        backgroundColor: "#003366",
        marginVertical: 30,
        paddingVertical: 2,
    },
});
