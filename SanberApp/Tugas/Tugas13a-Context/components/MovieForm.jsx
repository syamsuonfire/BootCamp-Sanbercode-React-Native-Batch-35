import React, { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { MovieContext } from "../context/MovieContext";

const MovieForm = () => {
    const [name, setName] = useState("");
    const [lengthOfTime, setLengthOfTime] = useState(0);
    const { movie, setMovie } = useContext(MovieContext);

    const handleSubmit = () => {
        setMovie([...movie, { id: Math.random(), name, lengthOfTime }]);
        setName("");
        setLengthOfTime("");
    };
    const handleChangeName = (text) => {
        setName(text);
    };

    const handleChangeTime = (text) => {
        setLengthOfTime(text);
    };

    return (
        <View>
            <TextInput
                style={styles.formInputText}
                value={name}
                onChangeText={handleChangeName}
                placeholder="Input Movie Title"
            />
            <TextInput
                style={styles.formInputText}
                keyboardType="numeric"
                value={lengthOfTime}
                onChangeText={handleChangeTime}
                placeholder="Input Movie Length"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    formInputText: {
        alignItems: "center",
        borderColor: "#eaeaea",
        borderRadius: 4,
        borderWidth: 1,
        color: "#7d7d7d",
        flexDirection: "row",
        fontSize: 18,
        height: 54,
        justifyContent: "center",
        marginVertical: 8,
        paddingHorizontal: 10,
    },
});

export default MovieForm;
