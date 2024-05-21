import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const contatosEmergencia = ({ numero, servico}) => {
    return (
        <View style={styles.container}>
            <View style={styles.conteudoEsquerdo}>
                <Text style={styles.titulo}>{numero} - {servico}</Text>
            </View>
            <View style={styles.conteudoDireito}>
                <Image style={styles.icon} source={require('../../../../assets/images/global/icon-telefone.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        height: 35,
        marginBottom: 10,
        backgroundColor: '#d9d9d9',
        borderRadius: 100,
    },

    titulo: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        textAlign: 'left',
        width: '90%',
    },

    conteudoEsquerdo: {
        flex: 3, // define a proporção de espaço que este componente deve ocupar
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    conteudoDireito: {
        flex: 1, // define a proporção de espaço que este componente deve ocupar
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        width: 15,
        height: 15,
    },
});

export default contatosEmergencia;
