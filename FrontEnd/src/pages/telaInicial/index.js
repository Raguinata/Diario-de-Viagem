import React from 'react';
import Logo from '../../components/logo';
import MenuHamburguer from '../../components/menuHamburguer';
import PontoInterrogacao from '../../components/pontoInterrogação';
import BotaoBranco from '../../components/botaoBranco';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}>
            </ImageBackground>
            <View style={styles.overlay}></View>
            <View style={styles.conteudo}>
                <View style={styles.header}>
                    <MenuHamburguer largura={17.5} altura={15} cor={'white'} margem={10} />
                    <PontoInterrogacao largura={20} altura={20} cor={'white'} margem={10} />
                </View>
                <View style={styles.main}>
                    <Logo cor={undefined} />
                    <Text style={styles.title}>Um aplicativo para desfrutar das belezas do Brasil</Text>
                </View>
                <View style={styles.footer}>
                    <BotaoBranco texto={'Entrar'} onPress={undefined} estilo={undefined} />
                    <BotaoBranco texto={'Cadastrar'} onPress={undefined} estilo={undefined} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imagemFundo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    conteudo: {
        ...StyleSheet.absoluteFillObject, // ocupa toda a tela
        position: 'absolute',
        zIndex: 1,
    },

    header: {
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        textAlign: 'center',
        width: '80%',
        margin: 50,
        color: 'white',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // ocupa toda a tela
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
    },
});

export default App;
