import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

const LifecycleHooks = () => {
    // Deklarasi variabel state baru yang kita sebut "count"
    const [count, setCount] = useState(0);

    // ComponentDidMount: Dijalankan sekali biasanya untuk pengambilan data
    useEffect(() => {
        console.log("Saya dijalankan sekali");
    }, []);

    // ComponentDidUpdate: Dijalankan ketika ada data
    // di dependency array berubah
    useEffect(() => {
        console.log("Counter diupdate");
    }, [count]);

    useEffect(() => {
        const timerRef = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        // ComponentDidMount: Dijalankan ketika keluar dari layar
        // untuk menghentikan timer
        return () => {
            clearInterval(timerRef);
        };
    }, []);

    return (
        <View
            style={{ justifyContent: "center", flex: 1, paddingHorizontal: 16 }}
        >
            <Text>Count Increment {count} times</Text>
        </View>
    );
};

export default LifecycleHooks;
