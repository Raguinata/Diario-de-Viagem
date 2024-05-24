import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const grupoViagem = ({ navigation, usuario, programa }) => {
    return (
        <View style={styles.container}>

            <View style={styles.conteudoEsquerdo}>
                <Image style={styles.imagem} source={require('../../../../assets/images/global/header-icon.png')} />
                <View style={styles.informacoes}>
                    <Text style={styles.titulo}>{usuario?.nome}</Text>
                    <Text style={styles.subTitulo}>Aniversário: {usuario?.nascimento}</Text>
                </View>
            </View>

            <View style={styles.conteudoDireito}>
                {
                    usuario?.idUsuario == programa?.lider?.idUsuario ?
                        <Text>Lider</Text>
                        :
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('telaExcluir', {
                            programa: programa,
                            usuario: usuario,
                            navigation: navigation
                        })}>
                            <Image source={require('../../../../assets/images/global/icon-lixo.png')} />
                        </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },

    conteudoEsquerdo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imagem: {
        width: 50,
        height: 50,
        margin: 10,
    },

    informacoes: {
        flex: 1,
        marginHorizontal: 5,
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },

    subTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },

    conteudoDireito: {
        minWidth: 35, // Defina uma largura mínima para garantir que o conteúdo não seja menor do que isso
        alignItems: 'center',
        margin: 10,
    },

    icon: {
        width: 30, // Reduza a largura do ícone para ajustar o tamanho do conteúdo
        height: 30, // Reduza a altura do ícone se necessário
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default grupoViagem;