import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({ label, value, onChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#D9D9D9',
        height: 57,
        borderColor: '#989898',
        borderWidth: 2,
        borderRadius: 16

    },
    container: {
        marginHorizontal: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
        fontWeight: 'bold'

    }
})