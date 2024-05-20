import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const cardViagem = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.conteudo} onPress={() => navigation.navigate('telaAddViagem')}>
            <Image source={require('../../../assets/images/telaAddDestino/icon-add.png')} style={{ width: 70, height: 70 }} />
            <Text style={styles.titulo}>Adicionar novo destino!</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        marginVertical: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9A9A9',
        borderRadius: 20,
    },

    titulo: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default cardViagem;
