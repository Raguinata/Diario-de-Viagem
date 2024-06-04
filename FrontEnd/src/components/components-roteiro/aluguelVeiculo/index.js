import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const aluguelVeiculo = ({ navigation, veiculos }) => {
    return (
        <>
            {veiculos.map((veiculo, index) => {
                return (
                    <View style={styles.container}>
                        <View style={styles.header}>

                            <View style={styles.text}>
                                <Text style={styles.titulo}>Aluguel {index + 1}</Text>
                            </View>
                            <View style={styles.icons}>

                                <TouchableOpacity>
                                    <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('telaExcluir')}>
                                    <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.card}>
                            <View style={styles.containerTitulo}>
                                <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-info.png')} />
                                <Text style={styles.titulos}>Orçamento</Text>
                            </View>
                            <Text style={styles.titulos}>Modelo: {veiculo.modelo}</Text>
                            <Text style={styles.titulos}>Placa: {veiculo.placa}</Text>
                            <Text style={styles.titulos}>Locadora: {veiculo.locador}</Text>
                            <Text style={styles.titulos}>Valor: {veiculo.valorAluguel}</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.containerTitulo}>
                                <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-retirada.png')} />
                                <Text style={styles.titulos}>Retirada</Text>
                            </View>
                            <Text style={styles.titulos}>Local: {veiculo.inicioLocacao.enderoco}</Text>
                            <Text style={styles.titulos}>Data: {veiculo.inicioLocacao.data}</Text>
                            <Text style={styles.titulos}>Horário: {veiculo.inicioLocacao.data}</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.containerTitulo}>
                                <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-entrega.png')} />
                                <Text style={styles.titulos}>Devolução</Text>
                            </View>
                            <Text style={styles.titulos}>Local: {veiculo.terminoLocacao.enderoco}</Text>
                            <Text style={styles.titulos}>Data: {veiculo.terminoLocacao.data}</Text>
                            <Text style={styles.titulos}>Horário: {veiculo.terminoLocacao.data}</Text>
                        </View>

                    </View>
                );
            })}
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

});

export default aluguelVeiculo;