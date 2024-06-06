import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types'; // Importa PropTypes para validação de propriedades

// Componentes personalizados
import Logo from '../../components/logo';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import Ou from '../../components/ou';
import Icons from '../../components/icons';

// Tela de Login
const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setItem } = useAsyncStorage("usuario");

    const validarEmail = useCallback((email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }, []);

    const handleCadastro = useCallback(() => {
        if (!validarEmail(email)) {
            Alert.alert("Email inválido", "Por favor, insira um email válido contendo '@' e um domínio.");
            return;
        }
        // Lógica de cadastro pode ser adicionada aqui
    }, [email, validarEmail]);

    const login = useCallback(async () => {
        try {
            return await fetch(`http://10.135.146.42:8080/usuario/login?email=${email}&senha=${senha}`, {
                method: "POST"
            });
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível realizar o login. Tente novamente mais tarde.");
        }
    }, [email, senha]);

    const handleLogin = useCallback(async () => {
        if (!email || !senha) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        const res = await login();
        if (res) {
            if (res.status === 200) {
                try {
                    const dados = await res.json();
                    await setItem(JSON.stringify(dados));
                    navigation.navigate('telaAddDestino', { usuario: dados });
                } catch (error) {
                    console.log(error);
                }
            } else if (res.status === 204) {
                Alert.alert("Login inválido", "Email ou senha incorretos.");
            }
        }
    }, [email, senha, login, navigation, setItem]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}
            />
            <View style={styles.overlayPreto} />
            <ScrollView style={styles.conteudo}>
                <View style={styles.header}>
                    <Logo cor="black" />
                    <Text style={styles.title}>Bem-Vindo(a) de volta!</Text>
                </View>
                <View style={styles.main}>
                    <Input texto="Email:" value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <Input texto="Senha:" value={senha} onChangeText={setSenha} secureTextEntry />
                    <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
                    <BotaoBranco texto="Login" onPress={handleLogin} estilo={styles.botaoCinza} />
                </View>
                <View style={styles.footer}>
                    <Ou />
                    <Icons />
                    <Text>
                        Não tem uma conta?{' '}
                        <Text style={{ color: 'blue', fontWeight: 'bold' }} onPress={handleCadastro}>Cadastre-se</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

// Define PropTypes para validar as propriedades recebidas pelo componente
TelaLogin.propTypes = {
    navigation: PropTypes.object.isRequired, // navigation deve ser um objeto e é obrigatório
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
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
    },
    botaoCinza: {
        backgroundColor: '#D9D9D9',
    },
});

export default TelaLogin;
