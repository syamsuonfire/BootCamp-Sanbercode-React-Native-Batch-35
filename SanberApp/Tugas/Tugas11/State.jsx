import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

const State = () => {
    const [movie, setMovie] = useState([
        { id: "0", name: "Harry Potter", lengthOfTime: "120" },
        { id: "1", name: "Sherlock Holmes", lengthOfTime: "125" },
    ]);

    const [name, setName] = useState("");
    const [lengthOfTime, setLengthOfTime] = useState("0");
    const [selectedMovieId, setSelectedMovieId] = useState("");

    const clearForm = () => {
        setName("");
        setLengthOfTime("");
        setSelectedMovieId("");
    };

    const onAdd = () => {
        setMovie((prevMovie) => [
            // Salin semua data movie menggunakan operator spread
            ...prevMovie,
            // Tambahakan data object baru pada bagian akhir array
            {
                id: Math.random().toString(),
                name,
                lengthOfTime,
            },
        ]);
        clearForm();
    };

    const onDelete = (id) => {
        setMovie(movie.filter((item) => item.id !== id));
    };

    const onUpdate = () => {
        setMovie((prevMovie) =>
            // Method map akan melakukan looping pada arary
            // kemudian melakukan modifikasi pada tiap element
            // dan mengembalikan array hasil modifikasinya
            prevMovie.map((item) => {
                // Jika item merupakan data yang kita pilih
                // update item dengan data dari form
                if (item.id === selectedMovieId) {
                    return {
                        id: item.id,
                        name,
                        lengthOfTime,
                    };
                }

                // Jika bukan terpilih kembalikan item tanpa perubahan
                return item;
            })
        );
        clearForm();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={movie}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedMovieId(item.id);
                                setName(item.name);
                                setLengthOfTime(item.lengthOfTime);
                            }}
                            style={styles.listContainer}
                        >
                            <Text>Name : {item.name}</Text>
                            <Text>Length of Time : {item.lengthOfTime}</Text>
                        </TouchableOpacity>
                        <Button
                            title="Delete"
                            onPress={() => {
                                onDelete(item.id);
                            }}
                        ></Button>
                    </View>
                )}
            />
            <View>
                <TextInput
                    style={styles.formInputText}
                    value={name}
                    onChangeText={setName}
                    placeholder="Input Movie Title"
                />
                <TextInput
                    style={styles.formInputText}
                    keyboardType="numeric"
                    value={lengthOfTime}
                    onChangeText={setLengthOfTime}
                    placeholder="Input Movie Length"
                />
                <Button
                    title={!selectedMovieId ? "Add Movie" : "Update Movie"}
                    onPress={!selectedMovieId ? onAdd : onUpdate}
                />
            </View>
        </View>
    );
};

export default State;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#eaeaea",
        padding: 10,
        marginVertical: 5,
    },
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
