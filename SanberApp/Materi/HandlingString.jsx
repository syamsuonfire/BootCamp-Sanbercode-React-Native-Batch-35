import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const HandlingString = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.formTitle}>First Name</Text>
                    <TextInput
                        style={styles.formTextInput}
                        value={firstName} // Nilai form yang ditampilkan berdasarkan nilai state
                        onChangeText={(text) => setFirstName(text)} // Mengupdate nilai state
                    />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.formTitle}>Last Name</Text>
                    <TextInput
                        style={styles.formTextInput}
                        value={lastName} // Nilai form yang ditampilkan berdasarkan nilai state
                        onChangeText={setLastName} // Mengupdate nilai state versi lebih ringkas
                    />
                </View>
            </View>
            <Text style={styles.fullName}>
                Full Name : {`${firstName} ${lastName}`}
            </Text>
        </View>
    );
};

export default HandlingString;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        flexDirection: "row",
        marginBottom: 20,
    },
    formField: {
        flex: 1,
        marginHorizontal: 10,
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
    fullName: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
