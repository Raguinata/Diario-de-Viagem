import React from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';

const Input = ({ texto, value, onChangeText, icon, fontColor, inputColor, width, height, placeholder, marginBottom }) => {
    return (
        <View style={[styles.container, {marginBottom: marginBottom !== undefined ? marginBottom : 10}]}>
            {/* Verifica se o texto e o ícone estão definidos antes de renderizar */}
            {texto || icon ? (
                <Text style={[styles.textoInput]}>
                    {icon && <Image source={icon} style={styles.icon} />}   {texto}
                </Text>
            ) : null}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#888"
                style={[
                    styles.input,
                    { backgroundColor: inputColor || '#D9D9D9', width: width || 280, height: height || 40 }
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginBottom padrão definido como 10
    },
    input: {
        borderRadius: 50,
        paddingHorizontal: 10,
        fontSize: 12,
    },
    textoInput: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5, // Adiciona um espaço entre o ícone e o texto
    },
});

export default Input;
