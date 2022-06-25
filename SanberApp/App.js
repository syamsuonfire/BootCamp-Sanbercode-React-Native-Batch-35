import { StyleSheet } from "react-native";
import AboutScreen from "./Tugas/Tugas10/AboutScreen";
import Telegram from "./Tugas/Tugas8/Telegram";
import LoginScreen from "./Tugas/Tugas10/LoginScreen";
import Counter from "./Materi/Counter";
import HandlingObject from "./Materi/HandlingObject";
import HandlingString from "./Materi/HandlingString";
import HandlingArray from "./Materi/HandlingArray";
import LifecycleHooks from "./Materi/LifecycleHooks";
import LifecycleClass from "./Materi/LifecycleClassComponents";
import State from "./Tugas/Tugas11/State";
import LifeCycle from "./Tugas/Tugas11/LifeCycle";
import Tugas12 from "./Tugas/Tugas12/index";
import Tugas13a from "./Tugas/Tugas13a-Context/index";
import Tugas13b from "./Tugas/Tugas13b-Redux/index";
import Tugas14 from "./Tugas/Tugas14/features/news/NewsListScreen";
import Tugas15 from "./Tugas/Tugas15/index";

export default function App() {
    return (
        <>
            {/* <Telegram /> */}
            {/* <AboutScreen /> */}
            {/* <LoginScreen /> */}
            {/* <Counter /> */}
            {/* <HandlingString /> */}
            {/* <HandlingObject /> */}
            {/* <HandlingArray /> */}
            {/* <LifecycleHooks /> */}
            {/* <LifecycleClass /> */}
            {/* <State /> */}
            {/* <LifeCycle /> */}
            {/* <Tugas12 /> */}
            {/* <Tugas13a /> */}
            {/* <Tugas13b /> */}
            {/* <Tugas14 /> */}
            <Tugas15 />
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
