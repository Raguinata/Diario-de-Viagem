import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Thumb from '../../components/components-roteiro/thumb';
import BotaoBranco from '../../components/botaoBranco';
import GrupoViagem from '../../components/components-roteiro/grupoViagem';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const telaRoteiroViagem = ({ navigation }) => {
    const [orcamento, setOrcamento] = useState(0);

    const incrementar = () => setOrcamento(orcamento + 50);
    const decrementar = () => setOrcamento(orcamento - 50);

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <Thumb />

                    <View style={styles.contador}>
                        <View style={styles.contadorTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-custo.png')} />
                            <Text style={styles.titulos}>Orçamento</Text>
                        </View>

                        <View style={styles.contadorPlanejado}>
                            <Text style={styles.subTitulos}>Planejado</Text>
                            <View style={styles.contadorValorTotal}>
                                <TouchableOpacity style={styles.contadorBotaoMais} onPress={incrementar}>
                                    <Image source={require('../../../assets/images/global/icon-mais.png')} />
                                </TouchableOpacity>

                                <Text style={styles.subTitulos}>R${orcamento.toFixed(2)}</Text>

                                <TouchableOpacity style={styles.contadorBotaoMenos} onPress={decrementar}>
                                    <Image source={require('../../../assets/images/global/icon-menos.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.contadorGastoTotal}>
                            <Text style={styles.subTitulos}>Gasto Total</Text>
                            <Text style={styles.subTitulos}>R$0,00</Text>
                        </View>

                        <View style={styles.contadorGastoTotal}>
                            <Text style={styles.subTitulos}>Restante</Text>
                            <Text style={styles.subTitulos}>R$0,00</Text>
                        </View>
                    </View>

                    <View style={styles.gpViagem}>
                        <View style={styles.gpViagemTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-grupo.png')} />
                            <Text style={styles.titulos}>Grupo da viagem</Text>
                        </View>

                        <GrupoViagem navigation={navigation}/>
                        <GrupoViagem navigation={navigation}/>
                        <GrupoViagem navigation={navigation}/>

                        <BotaoBranco
                            texto={'Convidar pessoa ao grupo'}
                            onPress={undefined} 
                            estilo={styles.gpViagemBotao} 
                            icon={require('../../../assets/images/telaAddDestino/icon-add.png')}
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

    contador: {
        flex: 1,
        width: '90%',
        height: 265,
        alignItems: 'center', // Alterado para flex-start
        backgroundColor: 'white',
        borderRadius: 20,

    },

    contadorTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
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

    gpViagemTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
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
});

export default telaRoteiroViagem;
