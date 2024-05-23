import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Thumb from '../../components/components-evento/thumb';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const telaVisualizarEvento = () => {
    return (
        <View style={styles.container}>
        <Header titulo={'Minhas Viagens'} />
        <ScrollView style={styles.conteudoScroll}>
            <View style={styles.conteudo}>
                
                <Thumb/>

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
});

export default telaVisualizarEvento;