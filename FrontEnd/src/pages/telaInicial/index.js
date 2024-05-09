import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Componentes personalizados
import Logo from '../../components/logo';
import MenuHamburguer from '../../components/menuHamburguer';
import PontoInterrogacao from '../../components/pontoInterrogação';
import BotaoBranco from '../../components/botaoBranco';

// Tela inicial
export default function TelaInicial({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Imagem de fundo */}
            <ImageBackground
                source={require('../../../assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}>
            </ImageBackground>
            {/* Overlay para escurecer a imagem de fundo */}
            <View style={styles.overlay}></View>
            <View style={styles.conteudo}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <MenuHamburguer largura={17.5} altura={15} cor={'white'} margem={10} />
                    <PontoInterrogacao largura={20} altura={20} cor={'white'} margem={10} />
                </View>
                {/* Conteúdo principal */}
                <View style={styles.main}>
                    <Logo cor={undefined} />
                    <Text style={styles.title}>Um aplicativo para desfrutar das belezas do Brasil</Text>
                </View>
                {/* Rodapé */}
                <View style={styles.footer}>
                    <BotaoBranco texto={'Entrar'} onPress={() => navigation.navigate('telaLogin')} estilo={undefined} />
                    <BotaoBranco texto={'Cadastrar'} onPress={() => navigation.navigate('telaCadastro')} estilo={undefined} />
                </View>
            </View>
        </View>
    );
};

// Estilos
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
        backgroundColor: 'rgba(0, 0, 0, 0.77)', // cor escura
    },
});
