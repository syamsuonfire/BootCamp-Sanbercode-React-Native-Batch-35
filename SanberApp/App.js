import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Telegram from "./Tugas/Tugas8/Telegram";

export default function App() {
    return <Telegram />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
