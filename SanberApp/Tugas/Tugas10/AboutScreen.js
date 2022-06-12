import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textAbout}> About Me </Text>
                <View style={styles.logo}>
                    <Image
                        source={require("./assets/images/PhotoProfile.jpg")}
                        style={styles.fotoProfil}
                    />
                </View>

                <View style={styles.profil}>
                    <Text style={styles.textName}>Syamsu Rijal Efendi</Text>
                    <Text style={styles.textJob}>React Native Developer</Text>
                </View>

                <View style={styles.protofolio}>
                    <ImageBackground style={styles.backPortofolio}>
                        <View>
                            <Text style={styles.textPort}>Portfolio </Text>
                        </View>
                        <View style={styles.protofolio}>
                            <View style={styles.daftarPortofolio}>
                                <Icon name="gitlab" size={35} color="#3EC6FF" />
                                <Text style={styles.txtPort1}>
                                    @syamsuonfire{" "}
                                </Text>
                            </View>

                            <View style={styles.daftarPortofolio}>
                                <Icon name="github" size={35} color="#3EC6FF" />
                                <Text style={styles.txtPort1}>
                                    @syamsuonfire{" "}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground style={styles.backHubungi}>
                        <View>
                            <Text style={styles.textPort}>Contact Me </Text>
                        </View>
                        <View style={styles.kontak}>
                            <Icon name="facebook" size={25} color="#3EC6FF" />
                            <Text
                                style={{
                                    color: "#003366",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }}
                            >
                                Syamsu Rijal Efendi
                            </Text>
                        </View>
                        <View style={styles.kontak}>
                            <Icon name="instagram" size={25} color="#3EC6FF" />
                            <Text
                                style={{
                                    color: "#003366",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }}
                            >
                                @syamsuonfire
                            </Text>
                        </View>
                        <View style={styles.kontak}>
                            <Icon name="twitter" size={25} color="#3EC6FF" />
                            <Text
                                style={{
                                    color: "#003366",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }}
                            >
                                @syamsuonfire
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textAbout: {
        marginTop: 20,
        fontSize: 30,
        color: "#003366",
        fontWeight: "bold",
    },
    foto: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fotoProfil: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 10,
    },
    profil: {
        justifyContent: "center",
        alignItems: "center",
    },
    textName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#003366",
        marginTop: 15,
    },
    textJob: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3EC6FF",
    },
    backPortofolio: {
        backgroundColor: "#EFEFEF",
        height: 100,
        width: 340,
        borderRadius: 15,
        marginTop: 15,
    },
    protofolio: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    daftarPortofolio: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 5,
    },

    textPort: {
        fontSize: 18,
        color: "#003366",
        marginLeft: 5,
        marginTop: 5,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    txtPort1: {
        fontSize: 18,
        color: "#003366",
        fontWeight: "bold",
    },
    kontak: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 15,
    },

    backHubungi: {
        backgroundColor: "#EFEFEF",
        height: 150,
        width: 340,
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 10,
    },
});
