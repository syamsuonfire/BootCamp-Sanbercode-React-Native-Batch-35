import React from "react";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import CounterScreen from "./screens/CounterScreen";

export default function Tugas13b() {
    return (
        <Provider store={store}>
            <CounterScreen />
        </Provider>
    );
}
