import React from 'react';
import Logo from '../../components/logo';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import Ou from '../../components/ou';
import Icons from '../../components/icons';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}>
            </ImageBackground>
            <View style={styles.overlayPreto}></View>
            <ScrollView style={styles.conteudo}>
                <View style={styles.header}>
                    <Logo cor={'black'} />

                </View>
                <View style={styles.main}>
                    <Input texto={'Nome:'} value={undefined} onChangeText={undefined} />
                    <Input texto={'Data de Nascimento:'} value={undefined} onChangeText={undefined} />
                    <Input texto={'Email:'} value={undefined} onChangeText={undefined} />
                    <Input texto={'Senha:'} value={undefined} onChangeText={undefined} />
                    <BotaoBranco texto={'Cadastrar'} onPress={undefined} estilo={styles.botaoCinza} />
                </View>
                <View style={styles.footer}>
                    <Ou />
                    <Icons />
                    <Text>
                        Já possui uma conta?{' '}
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Faça o login</Text>
                    </Text>
                </View>
            </ScrollView>
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
        width: '95%',
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },

    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    },

    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    footer: {
        width: '100%',
        height: 120,
        justifyContent: 'space-around',
        alignItems: 'center',

    },

    overlayPreto: {
        ...StyleSheet.absoluteFillObject, // ocupa toda a tela
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
    },

    botaoCinza: {
        backgroundColor: '#D9D9D9',
    },
});

export default App;
