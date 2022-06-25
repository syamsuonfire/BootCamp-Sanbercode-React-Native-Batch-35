import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const HandlingObject = () => {
    const [formData, setFormData] = useState({ counter: 0, name: "" });

    return (
        <View style={styles.container}>
            <View style={styles.formField}>
                <Text style={styles.formTitle}>Name</Text>
                <TextInput
                    style={styles.formTextInput}
                    value={formData.name} // Nilai form yang ditampilkan berdasarkan nilai state
                    onChangeText={(name) =>
                        setFormData((prevData) => ({
                            ...prevData, // Operator spread digunakan untuk mengcopy seluruh data state
                            name, // Menambahkan nama property yang akan diubah "name"
                        }))
                    } // Mengupdate nilai state
                />
            </View>
            <View style={styles.counter}>
                <Button
                    title="Increment"
                    onPress={() =>
                        setFormData((prevData) => ({
                            ...prevData,
                            counter: ++prevData.counter,
                        }))
                    }
                />
                <Button
                    title="Decrement"
                    onPress={() =>
                        setFormData((prevData) => ({
                            ...prevData,
                            counter: --prevData.counter,
                        }))
                    }
                />
                <Button
                    title="Increment by 15"
                    onPress={() =>
                        setFormData((prevData) => ({
                            ...prevData,
                            counter: prevData.counter + 15,
                        }))
                    }
                />
            </View>
            <Text style={styles.output}>Name : {formData.name}</Text>
            <Text style={styles.output}>Counter : {formData.counter}</Text>
        </View>
    );
};

export default HandlingObject;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    formField: {
        alignSelf: "stretch",
        marginBottom: 10,
    },
    formTitle: {
        fontWeight: "bold",
        color: "#4f4f4f",
        marginBottom: 5,
    },
    formTextInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    counter: {
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-between",
    },
    output: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
