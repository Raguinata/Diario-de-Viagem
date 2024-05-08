import React from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';

const DescricaoInput = ({ value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoInput}><Image source={require('../../../assets/images/global/icon-descricao.png')} require style={styles.icon}/>   Descrição:</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#888"
                multiline // Permite múltiplas linhas
                numberOfLines={4} // Define o número inicial de linhas visíveis
                style={styles.input} // Aplica o estilo correto aqui
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        borderRadius: 15, // Reduzi o raio da borda para ficar mais agradável em um campo de descrição
        paddingHorizontal: 10,
        paddingVertical: 10, // Adiciona um espaçamento vertical interno
        backgroundColor: 'white',
        width: 320,
        height: 75,
    },
    textoInput: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5, // Adiciona um espaço entre o ícone e o texto
    },
});

export default DescricaoInput;
