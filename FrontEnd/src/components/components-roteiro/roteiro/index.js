import React, { useEffect, useState } from 'react';
import Cronogramas from "../../components-cronograma/cronograma/index.js"
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BotaoBranco from '../../botaoBranco';

const roteiro = ({ navigation, roteiros, programa }) => {

    const deletarRoteiro = async (quero_deletar, id_roteiro) => {
        try {
            if (quero_deletar) {
                await fetch(`http://10.135.146.42:8080/roteiro/${id_roteiro}`,

                    {
                        method: "DELETE",
                    })
            }
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                roteiros.map((roteiro) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <View style={styles.text}>
                                    <Text style={styles.titulo}>Nome: {roteiro.nome}</Text>
                                    <Text style={styles.titulo}>Estado: {roteiro.estado.uf}</Text>
                                </View>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={() => navigation.navigate('telaAddRoteiro', {
                                        roteiro_atualizar: roteiro,
                                        navigation: navigation,
                                        programa: programa
                                    })}>
                                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('telaExcluir', {
                                        funcDeletar: (quero_deletar) => deletarRoteiro(quero_deletar, roteiro.idRoteiro)
                                    })}>
                                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <Cronogramas roteiro={roteiro} navigation={navigation} />

                            <BotaoBranco
                                texto={'Adicionar Cronograma'}
                                onPress={() => navigation.navigate('telaAddCronograma', {
                                    roteiro: roteiro,
                                    navigation: navigation,
                                    programa: programa
                                })}
                                estilo={styles.roteiroBotao}
                                icon={require('../../../../assets/images/telaAddDestino/icon-add.png')}
                                navigation={navigation}
                            />
                        </View>
                    );
                })
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        width: '90%',
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
    },

    icons: {
        flexDirection: 'row',
    },

    icon: {
        width: 15,
        height: 16,
        marginHorizontal: 5,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    roteiroBotao: {
        width: '90%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

});

export default roteiro;