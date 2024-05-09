import React from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';

const Input = ({ texto, value, onChangeText, icon, fontColor, inputColor, width, height, placeholder }) => {
    return (
        <View style={styles.container}>

            <Text style={[styles.textoInput, { color: fontColor || 'black' }]}>{icon && <Image source={icon} style={styles.icon} />}   {texto}</Text>
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
        marginBottom: 10,
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
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 14,
        width: 15,
        height: 15,
    },
});

export default Input;
