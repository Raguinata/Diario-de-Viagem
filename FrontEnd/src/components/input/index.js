import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const input = ({texto, value, onChangeText }) => {
    return (
        <View>
            <Text style={styles.textoInput}>{texto}</Text>
            <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
        />
        </View>
        
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        height: 40,
        width: 280,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    textoInput: {
        color: 'black',
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 10,
    },
});

export default input;
