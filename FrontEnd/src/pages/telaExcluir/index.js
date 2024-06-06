import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import IconVoltar from '../../components/icon-voltar';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

const telaExcluir = ({ route }) => {
    const { funcDeletar } = route.params;
    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <View style={styles.iconVoltar}>
                        <IconVoltar />
                    </View>

                    <Text style={styles.titulo}>Tem certeza que deseja excluir esse item?</Text>

                    <View style={styles.botoesContainer}>
                        <TouchableOpacity style={[styles.botao, styles.botaoSim]} onPress={() => funcDeletar(true)}>
                            <Text style={styles.textoBotao}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.botao, styles.botaoNao]} onPress={() => funcDeletar(false)}>
                            <Text style={styles.textoBotao}>Não</Text>
                        </TouchableOpacity>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4c4c4c',
    },

    conteudoScroll: {
        flex: 1,
        marginVertical: 180,
        width: '90%',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },

    conteudo: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    },

    titulo: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },

    iconVoltar: {
        width: '100%',
    },

    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },

    botao: {
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
    },

    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    botaoSim: {
        backgroundColor: '#38b000',
    },

    botaoNao: {
        backgroundColor: '#b00000',
    },
});

export default telaExcluir;
