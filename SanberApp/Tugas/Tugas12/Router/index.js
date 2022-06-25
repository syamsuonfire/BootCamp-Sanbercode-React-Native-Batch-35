import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../Pages/HomeScreen";
import AboutScreen from "../Pages/AboutScreen";
import AddScreen from "../Pages/AddScreen";
import LoginScreen from "../Pages/LoginScreen";
import ProjectScreen from "../Pages/ProjectScreen";
import SettingScreen from "../Pages/SettingScreen";
import SkillProject from "../Pages/SkillProjectScreen";

const Tab = createBottomTabNavigator();
const Drawwer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="MyDrawwer" component={MyDrawwer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const MainApp = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="AddScreen" component={AddScreen} />
        <Tab.Screen name="SkillProject" component={SkillProject} />
    </Tab.Navigator>
);

const MyDrawwer = () => (
    <Drawwer.Navigator>
        <Drawwer.Screen name="App" component={MainApp} />
        <Drawwer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawwer.Navigator>
);
