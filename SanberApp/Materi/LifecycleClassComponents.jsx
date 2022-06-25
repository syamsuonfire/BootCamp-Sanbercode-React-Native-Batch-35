import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LifecycleClassComponents extends Component {
    state = { count: 0 };

    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    render() {
        const { count } = this.state;
        const { color, size } = this.props;

        return <Text style={{ color, fontSize: size }}>{count}</Text>;
    }
}

export default class LifecycleClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LifecycleClassComponents color={"lightblue"} size={16} />
                <LifecycleClassComponents color={"skyblue"} size={32} />
                <LifecycleClassComponents color={"steelblue"} size={80} />
                <LifecycleClassComponents color={"darkblue"} size={140} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
