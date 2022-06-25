import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter() {
    // Inisialisasi state dengan nilai awal counter 10
    const [counter, setCounter] = useState(10);

    const quadrupleCounter = counter * 4;

    console.log({ counter, quadrupleCounter });

    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <Text>Counter : {counter}</Text>
                <Text>Counter Quadruple : {quadrupleCounter}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Increment"
                        onPress={() =>
                            setCounter((prevCounterState) => ++prevCounterState)
                        }
                    />
                    <Button
                        title="Decrement"
                        onPress={() =>
                            setCounter((prevCounterState) => --prevCounterState)
                        }
                    />
                    <Button
                        title="Set to 100"
                        onPress={() => setCounter(1990)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    counter: {
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
});
