import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./Tugas/Tugas10/AboutScreen";
import Telegram from "./Tugas/Tugas8/Telegram";
import LoginScreen from "./Tugas/Tugas10/LoginScreen";

export default function App() {
    return (
        <>
            {/* <Telegram /> */}
            <AboutScreen />
            {/* <LoginScreen /> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
