import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
    const { movie } = useContext(MovieContext);

    return (
        <FlatList
            data={movie}
            renderItem={({ item }) => (
                <View style={styles.listContainer}>
                    <Text>Name : {item.name}</Text>
                    <Text>Lengtho of Time : {item.lengthOfTime}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#eaeaea",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
    },
});

export default MovieList;
