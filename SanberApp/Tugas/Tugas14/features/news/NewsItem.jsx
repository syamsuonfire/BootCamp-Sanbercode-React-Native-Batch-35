import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NewsItem = ({ newsItem, onPress, onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.content}>
                <Text style={styles.title}>{newsItem.title}</Text>
                <Text style={styles.value}>{newsItem.value}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.deleteIcon}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 5,
    },
    content: {
        flex: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: "grey",
        borderWidth: 1,
    },
    title: {},
    value: {},
    deleteIcon: {
        borderWidth: 1,
        fontSize: 20,
        padding: 5,
        borderRadius: 12,
        color: "red",
    },
});
