import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const aluguelVeiculo = ({ navigation, veiculos, programa }) => {

    const cepAtribuido = (cep) => cep ? cep : "Não atribuido";

    const formatEndereco = (endereco) => {
        return `${endereco?.bairro}; ${endereco?.numero} ${endereco?.cidade?.nome} - ${endereco?.cidade?.estado?.uf} CEP - ${cepAtribuido(endereco?.cep?.cep)}`
    }

    const deletarVeiculo= async (quero_deletar, veiculo) => {
        let body = {
            id_programa: programa.idProgramaDeViagem,
            veiculo: veiculo
        }
        try {
            if (quero_deletar) {
                let res = await fetch(`http://192.168.15.123:8080/programa/veiculo/delete`,
                    {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    })
                programa = await res.json();
                console.log(programa)
            }
            navigation.navigate("telaRoteiroViagem", {
                programa: programa,
            })
        } catch (error) {
            console.log(error);
        }
    }
    
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

                                <TouchableOpacity  onPress={() => navigation.navigate('telaAddVeiculo', {
                                    veiculo_atualizar: veiculo,
                                    id_programa: programa.idProgramaDeViagem,
                                    navigation: navigation
                                })}>
                                    <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('telaExcluir', {
                                    funcDeletar: (quero_deletar) => deletarVeiculo(quero_deletar, veiculo)
                                })}>
                                    <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.card}>
                            <View style={styles.containerTitulo}>
                                <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-info.png')} />
                                <Text style={styles.titulos}>Dados do aluguel</Text>
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
                            <Text style={styles.titulos}>Local: {formatEndereco(veiculo.inicioLocacao.endereco)}</Text>
                            <Text style={styles.titulos}>Data: {veiculo.inicioLocacao.data.split(" ")[0]}</Text>
                            <Text style={styles.titulos}>Horário: {veiculo.inicioLocacao.data.split(" ")[1]}</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.containerTitulo}>
                                <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-entrega.png')} />
                                <Text style={styles.titulos}>Devolução</Text>
                            </View>
                            <Text style={styles.titulos}>Local: {formatEndereco(veiculo.terminoLocacao.endereco)}</Text>
                            <Text style={styles.titulos}>Data: {veiculo.terminoLocacao.data.split(" ")[0]}</Text>
                            <Text style={styles.titulos}>Horário: {veiculo.terminoLocacao.data.split(" ")[1]}</Text>
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