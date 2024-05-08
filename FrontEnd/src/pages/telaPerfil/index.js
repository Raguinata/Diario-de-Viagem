import React from 'react';
import Header from '../../src/components/header';
import Footer from '../../src/components/footer';
import BotaoBranco from '../../src/components/botaoBranco';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'}/>
            <View style={styles.conteudo}>
                <View style={styles.containerPerfil}>
                    <View>
                        <Image source={require('./assets/images/global/header-icon.png')} style={{width: 102, height: 102, borderRadius: 50}} />
                    </View>

                    <View style={styles.informacaoPerfil}>
                        <Text style={styles.textoInformacao}>Nome: Fulano de tal</Text>
                        <Text style={styles.textoInformacao}>E-mail: fulano.de.tal@gmail.com</Text>
                        <Text style={styles.textoInformacao}>Ingressou: 13/02/2024</Text>
                    </View>
                </View>

                <View>
                    <BotaoBranco icon={require('./assets/images/telaPerfil/icon-sair.png')} texto={'Sair do Aplicativo'} onPress={undefined} estilo={undefined} />
                </View>
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
        backgroundColor: 'white',
    },

    conteudo: {
        flex: 1,
        marginVertical: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },

    titulo: {
        fontSize: 32,
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    containerPerfil: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginVertical: 20,
    },

    informacaoPerfil: {
        justifyContent: 'center',
        height: 102,
        
    },

    textoInformacao: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
    },
});

export default App;