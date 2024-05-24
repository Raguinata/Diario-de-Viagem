import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


// Componentes personalizados
import Logo from '../../components/logo';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import Ou from '../../components/ou';
import Icons from '../../components/icons';

// Tela de Login
const TelaLogin = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const { setItem } = useAsyncStorage("usuario");

    const login = async () => {
        try {
            return await fetch(`http://10.135.146.42:8080/usuario/login?email=${email}&senha=${senha}`, {
                method: "POST"
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async () => {
        const res = await login();
        if (res.status == 200) {
            try {
                const dados = await res.json();
                await setItem(JSON.stringify(dados));
                navigation.navigate('telaAddDestino', {usuario: dados});
            } catch (error) {
                console.log(error);
            }
        }
        else if (res.status == 204) {
            alert("Login inválido");
        }
    }

    return (
        <View style={styles.container}>
            {/* Imagem de fundo */}
            <ImageBackground
                source={require('../../../assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}>
            </ImageBackground>
            {/* Overlay para escurecer a imagem de fundo */}
            <View style={styles.overlayPreto}></View>
            <ScrollView style={styles.conteudo}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <Logo cor={'black'} />
                    <Text style={styles.title}>Bem-Vindo(a) de volta!</Text>
                </View>
                {/* Conteúdo principal */}
                <View style={styles.main}>
                    <Input texto={'Email:'} value={email} onChangeText={setEmail} />
                    <Input texto={'Senha:'} value={senha} onChangeText={setSenha} />
                    <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
                    <BotaoBranco texto={'Login'} onPress={handleLogin} estilo={styles.botaoCinza} />
                </View>
                {/* Rodapé */}
                <View style={styles.footer}>
                    <Ou />
                    <Icons />
                    <Text>
                        Não tem uma conta?{' '}
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Cadastre-se</Text>
                    </Text>
                </View>
            </ScrollView>
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
        width: '95%',
        height: '95%',
        borderRadius: 20,
        backgroundColor: 'white',
        marginVertical: 10,
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
    title: {
        fontSize: 16,
        textAlign: 'center',
        width: '80%',
        margin: 15,
        color: 'black',
    },
    textoEsqueceuSenha: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'right',
        width: '65%',
        marginBottom: 5,
    },
    overlayPreto: {
        ...StyleSheet.absoluteFillObject, // ocupa toda a tela
        backgroundColor: 'rgba(0, 0, 0, 0.77)', // cor escura
    },
    botaoCinza: {
        backgroundColor: '#D9D9D9',
    },
});

export default TelaLogin;
