import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const botaoBranco = ({ texto, onPress, estilo }) => {
    return (
        <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        margin: 10,
        width: 240,
        height: 45,
    },
    textoBotao: {
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default botaoBranco;