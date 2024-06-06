import React, { useState } from 'react';
import Cronograma from "../../components-cronograma/cronograma/index.js"
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BotaoBranco from '../../botaoBranco';

const roteiro = ({ navigation, roteiros, programa }) => {

    const [cronogramas, setCronogramas] = useState([]);

    const fetchCronogramaByRoteiro = async (roteiro) => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/cronograma/por-roteiro`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(roteiro)
                }
            )
            if (res.status == 200) {
                res = await res.json();
                setCronogramas(res);
            }
            return [];
        } catch (error) {
            console.log(error);
        }
    }

    const deletarRoteiro = async (quero_deletar, id_roteiro) => {
        try {
            if (quero_deletar) {
                let res = await fetch(`http://10.135.146.42:8080/roteiro/${id_roteiro}`,
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

                            {cronogramas.map((cronograma) => {
                                return (
                                    <Cronograma cronograma={cronograma} />
                                );
                            })}

                            <BotaoBranco
                                texto={'Adicionar Cronograma'}
                                onPress={() => navigation.navigate('telaAddCronograma')}
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

    iconCard: {
        width: 15,
        height: 15,
    },

    iconCardDes: {
        marginLeft: 5,
        marginRight: 5,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },

    titulos: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        width: '90%',
    },

    subTitulos: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        width: '90%',
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
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