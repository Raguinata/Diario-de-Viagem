import React from 'react';
import Header from './src/components/header';
import Footer from './src/components/footer';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'}/>
            <View style={styles.conteudo}>
                <Image source={require('./assets/images/telaErro/alerta.png')} style={{width: 142, height: 135}}/>
                <Text style={styles.titulo}>Fora do Escopo</Text>
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },

    conteudo: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 32,
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default App;
