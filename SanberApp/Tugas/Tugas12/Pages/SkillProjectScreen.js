import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SkillProject() {
    return (
        <View style={styles.container}>
            <Text>SkillProject</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})
