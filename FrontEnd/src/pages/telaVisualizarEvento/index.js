import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Thumb from '../../components/components-evento/thumb';
import Parada from '../../components/components-evento/parada';
import Gasto from '../../components/components-evento/gasto';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import BotaoBranco from '../../components/botaoBranco';

const telaVisualizarEvento = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>

                    <Thumb />

                    <View style={styles.paradas}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-maps.png')} />
                            <Text style={styles.titulos}>Paradas:</Text>
                        </View>

                        <Image style={styles.imagemMaps} source={require('../../../assets/images/telaVisualizarEvento/maps.png')}/>

                        <Parada/>
                        <Parada/>

                        <BotaoBranco
                            texto={'Adicionar parada'}
                            onPress={() => navigation.navigate('telaAddParada')}
                            estilo={styles.visualizarEventoBotao}
                            icon={require('../../../assets/images/telaAddDestino/icon-add.png')}
                            navigation={navigation}
                        />
                    </View>

                    <View style={styles.paradas}>
                        <View style={styles.containerTitulo}>
                            <Image style={styles.icon} source={require('../../../assets/images/global/icon-custo.png')} />
                            <Text style={styles.titulos}>Gastos:</Text>
                        </View>

                        <Gasto/>
                        <Gasto/>

                        <BotaoBranco
                            texto={'Adicionar gasto'}
                            onPress={() => navigation.navigate('telaAddGasto')}
                            estilo={styles.visualizarEventoBotao}
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

    visualizarEventoBotao: {
        width: '90%',
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },

    icon: {
        width: 20,
        height: 20,
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

    paradas: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 20,
    },

    imagemMaps: {
        width: '90%',
        height: 150,
        borderRadius: 20,
        marginVertical: 10,
    },
});

export default telaVisualizarEvento;