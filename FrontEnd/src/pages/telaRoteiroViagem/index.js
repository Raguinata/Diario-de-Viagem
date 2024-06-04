import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Thumb from '../../components/components-roteiro/thumb';
import BotaoBranco from '../../components/botaoBranco';
import GrupoViagem from '../../components/components-roteiro/grupoViagem';
import AluguelVeiculo from '../../components/components-roteiro/aluguelVeiculo';
import Roteiro from '../../components/components-roteiro/roteiro';
import ContatosEmergencia from '../../components/components-roteiro/contatosEmergencia';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const telaRoteiroViagem = ({ navigation, route }) => {

    const { programa, usuario } = route.params

    const [orcamento, setOrcamento] = useState(0);
    const [gasto_total, setGastoTotal] = useState(0);
    const [grupo, setGrupo] = useState([]);
    const [veiculos, setVeiculos] = useState([]);

    const listaTotalDeGastos = async (id) => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/gasto/${id}`)
            res = await res.json();
            setGastoTotal(res);
        } catch (error) {
            console.log(error);
        }
    }

    const atualizarOrcamento = async (valorAtual) => {
        if (valorAtual < 0) {
            alert("Orçamento não pode ser negativo");
            return;
        }

        let res = await fetch(`http://10.135.146.42:8080/programa/atualizar-orcamento?` +
            `idProgramaDeViagem=${programa?.idProgramaDeViagem}&orcamento=${valorAtual}`,
            {
                method: "PUT"
            }
        )
        res = await res.json();
        if (res != 1) {
            alert("Erro, orçamento não atualizado")
        }
        else {
            setOrcamento(valorAtual);
            //Isso garante que o programa estaja atualizado após alterar o orçamento
            let pro_ternario = programa;
            pro_ternario.orcamento = valorAtual;
            navigation.setParams({
                usuario: usuario,
                programa: pro_ternario
            })
        }
    }

    useFocusEffect(
        useCallback(() => {
            setGrupo(programa?.usuarios);
            setVeiculos(programa?.veiculos ? programa?.veiculos : []);
            setOrcamento(programa?.orcamento ? programa?.orcamento : 0);
            listaTotalDeGastos(programa?.idProgramaDeViagem);
        }, [route.params])
    );

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <Thumb programa={programa} />

                    {/** ////////////////////////////////////////////////////// */}
                    <View style={styles.contador}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-custo.png')} />
                            <Text style={styles.titulos}>Orçamento</Text>
                        </View>

                        <View style={styles.contadorPlanejado}>
                            <Text style={styles.subTitulos}>Planejado</Text>
                            <View style={styles.contadorValorTotal}>
                                <TouchableOpacity style={styles.contadorBotaoMais}
                                    onPress={() => atualizarOrcamento(orcamento + 50)}>
                                    <Image source={require('../../../assets/images/global/icon-mais.png')} />
                                </TouchableOpacity>

                                <Text style={styles.subTitulos}>R${orcamento?.toFixed(2)}</Text>

                                <TouchableOpacity style={styles.contadorBotaoMenos}
                                    onPress={() => {
                                        if (orcamento - 50 >= 0) {
                                            atualizarOrcamento(orcamento - 50);
                                        } else {
                                            alert("Orçamento não pode ser negativo");
                                        }
                                    }}>
                                    <Image source={require('../../../assets/images/global/icon-menos.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.contadorGastoTotal}>
                            <Text style={styles.subTitulos}>Gasto Total</Text>
                            <Text style={styles.subTitulos}>{gasto_total}</Text>
                        </View>

                        <View style={styles.contadorGastoTotal}>
                            <Text style={styles.subTitulos}>Restante</Text>
                            <Text style={styles.subTitulos}>{orcamento - gasto_total}</Text>
                        </View>
                    </View>

                    {/** ////////////////////////////////////////////////////// */}

                    <View style={styles.gpViagem}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-grupo.png')} />
                            <Text style={styles.titulos}>Grupo da viagem</Text>
                        </View>


                        {
                            grupo.map((pessoa) => {
                                return (
                                    <GrupoViagem programa={programa} usuario={pessoa} navigation={navigation} />
                                );
                            })
                        }

                        <BotaoBranco
                            texto={'Convidar pessoa ao grupo'}
                            onPress={() => navigation.navigate('telaConvidarPessoa', {
                                programa: programa,
                                navigation: navigation
                            })}
                            estilo={styles.gpViagemBotao}
                            icon={require('../../../assets/images/telaAddDestino/icon-add.png')}
                        />
                    </View>

                    {/** ////////////////////////////////////////////////////// */}

                    <View style={styles.contatosEmergencia}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-sirene.png')} />
                            <Text style={styles.titulos}>Contatos de emergência:</Text>
                        </View>

                        <ContatosEmergencia
                            numero={'190'}
                            servico={'Polícia'}
                        />
                        <ContatosEmergencia
                            numero={'192'}
                            servico={'Ambulância'}
                        />
                        <ContatosEmergencia
                            numero={'193'}
                            servico={'Bombeiros'}
                        />

                    </View>

                    {/** ////////////////////////////////////////////////////// */}

                    <View style={styles.aluguelVeiculo}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.iconAluguel} source={require('../../../assets/images/global/icon-modelo.png')} />
                            <Text style={styles.titulos}>Aluguel de veículo:</Text>
                        </View>

                        <AluguelVeiculo
                            navigation={navigation}
                            veiculos={veiculos}
                            programa={programa}
                        />

                        <BotaoBranco
                            texto={'Adicionar veículo'}
                            onPress={() => navigation.navigate('telaAddVeiculo', {
                                navigation: navigation,
                                id_programa: programa?.idProgramaDeViagem
                            })}
                            estilo={styles.gpViagemBotao}
                            icon={require('../../../assets/images/telaAddDestino/icon-add.png')}
                            navigation={navigation}
                        />
                    </View>

                    {/** ////////////////////////////////////////////////////// */}

                    <View style={styles.roteiros}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-roteiro.png')} />
                            <Text style={styles.titulos}>Roteiros:</Text>
                        </View>

                        <Roteiro navigation={navigation} />

                        <BotaoBranco
                            texto={'Adicionar roteiro'}
                            onPress={() => navigation.navigate('telaAddRoteiro')}
                            estilo={styles.gpViagemBotao}
                            icon={require('../../../assets/images/telaAddDestino/icon-add.png')}
                            navigation={navigation}
                        />
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    conteudoScroll: {
        flex: 1,
        marginVertical: 40,
        width: '90%',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },

    conteudo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    titulos: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
    },

    subTitulos: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },

    contador: {
        flex: 1,
        width: '90%',
        height: 265,
        alignItems: 'center', // Alterado para flex-start
        backgroundColor: 'white',
        borderRadius: 20,

    },

    icon: {
        width: 20,
        height: 20,
    },

    contadorPlanejado: {
        width: '90%',
        height: 95,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 10,
    },

    contadorValorTotal: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    contadorBotaoMais: {
        width: 28,
        height: 28,
        backgroundColor: '#38b000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contadorBotaoMenos: {
        width: 28,
        height: 28,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contadorGastoTotal: {
        width: '90%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginVertical: 10,
    },

    gpViagem: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20,
    },

    gpViagemBotao: {
        width: '90%',
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    contatosEmergencia: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20,
    },

    aluguelVeiculo: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20,
    },

    roteiros: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default telaRoteiroViagem;
