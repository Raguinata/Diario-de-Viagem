import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const input = ({ value, onChangeText }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
        />
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
});

export default input;
