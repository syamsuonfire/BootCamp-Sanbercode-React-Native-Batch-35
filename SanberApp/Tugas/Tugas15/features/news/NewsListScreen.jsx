import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import {
    newsAdd,
    newsEdit,
    newsGetAll,
    newsDelete,
} from "../../app/services/news";
import NewsItem from "./NewsItem";
import { logout } from "../auth/authSlice";
import { useDispatch } from "react-redux";

export default function NewsListScreen({ navigation }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState({});

    const handleError = (err) => {
        console.warn("Error Status: ", err.message);
        console.warn("Error Message: ", err.response.data);
        Alert.alert(`Error ${err.message}`, err.response.data.message);
    };

    const fetchNews = async () => {
        try {
            setIsLoading(true);

            const res = await newsGetAll();
            const _news = res.data.results.news;
            console.log("res: ", _news);

            setNews(_news);
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const createNews = async () => {
        try {
            setIsLoading(true);

            const res = await newsAdd(title, value);
            console.log("responseCreate : ", res.data);

            setTitle("");
            setValue("");
            fetchNews();
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const editNews = async () => {
        try {
            setIsLoading(true);

            const res = await newsEdit(selectedNews._id, title, value);
            console.log("responseEdit: ", res.data);

            setTitle("");
            setValue("");
            fetchNews();
            setSelectedNews({});
        } catch (error) {
            handleError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteNews = async (item) => {
        try {
            const res = newsDelete(item._id);
            console.log("res: ", res);
            fetchNews();
        } catch (error) {
            handleError(error);
        }
    };

    const onSelectItem = (newsItem) => {
        console.log("selectedNews", newsItem);
        setSelectedNews(newsItem);
        setTitle(newsItem.title);
        setValue(newsItem.value);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const renderNews = ({ item }) => {
        const onPress = () => onSelectItem(item);
        const onDelete = () => deleteNews(item);

        return (
            <NewsItem onDelete={onDelete} onPress={onPress} newsItem={item} />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Tampilan API (CRUD)</Text>
            </View>
            {isLoading ? (
                <Text>Loading</Text>
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item) => item._id}
                    renderItem={renderNews}
                />
            )}
            <View style={styles.form}>
                <Text>Post Data</Text>
                <TextInput
                    placeholder="Masukan Judul Berita"
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    placeholder="Masukan Isi Berita"
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                />
                {selectedNews._id ? (
                    <Button
                        title="Update"
                        onPress={() =>
                            editNews({
                                _id: selectedNews._id,
                                title,
                                value,
                            })
                        }
                    />
                ) : (
                    <Button
                        title="Create"
                        onPress={() => createNews(title, value)}
                    />
                )}
                <Button
                    title="SignOut"
                    onPress={() => {
                        dispatch(
                            // remove token
                            logout()
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    header: {
        alignItems: "center",
    },
    title: {
        padding: 20,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    form: {
        paddingVertical: 20,
    },
    input: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 6,
        marginBottom: 10,
    },
    contentNews: {
        backgroundColor: "grey",
        paddingVertical: 10,
    },
});
