import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

// Componentes personalizados
import Logo from '../../components/logo';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import DateInput from '../../components/dataInput';
import Ou from '../../components/ou';
import Icons from '../../components/icons';

// Tela de Cadastro
const TelaCadastro = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [nome, setNome] = useState('');
    const { setItem } = useAsyncStorage("usuario");
    

    const validarEmail = useCallback((email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }, []);

    const cadastro = useCallback(async () => {
        const body = {
            nome,
            email: email.trim(),
            nascimento,
            senha
        };

        try {
            return await fetch(`${apiUrl}/usuario/cadastro`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível realizar o cadastro. Tente novamente mais tarde.");
        }
    }, [email, senha, nascimento, nome]);

    const handleCadastro = useCallback(async () => {
        const trimmedEmail = email.trim();
        if (!validarEmail(trimmedEmail)) {
            Alert.alert("Email inválido", "Por favor, insira um email válido contendo '@' e um domínio.");
            return;
        }
        if (!nome || !senha || !nascimento) {
            Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        const res = await cadastro();
        if (res && res.status === 200) {
            try {
                const dados = await res.json();
                await setItem(JSON.stringify(dados));
                navigation.navigate('telaAddDestino', { usuario: dados });
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert(
                "Tentativa de cadastro inválida",
                "Verifique se o email não está sendo utilizado e se preencheu todos os campos"
            );
        }
    }, [email, senha, nome, nascimento, cadastro, setItem, navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/telaInicial/background-image.png')}
                style={styles.imagemFundo}
            />
            <View style={styles.overlayPreto}></View>
            <ScrollView style={styles.conteudo}>
                <View style={styles.header}>
                    <Logo cor="black" />
                </View>
                <View style={styles.main}>
                    <Input texto="Nome:" value={nome} onChangeText={setNome} />
                    <DateInput texto="Data de Nascimento:" value={nascimento} onChange={setNascimento} placeholder="Selecione a data" />
                    <Input texto="Email:" value={email} onChangeText={(text) => setEmail(text.trim())} keyboardType="email-address" />
                    <Input texto="Senha:" value={senha} onChangeText={setSenha} secureTextEntry />
                    <BotaoBranco texto="Cadastrar" onPress={handleCadastro} estilo={styles.botaoCinza} />
                </View>
                <View style={styles.footer}>
                    <Ou />
                    <Icons />
                    <Text>
                        Já possui uma conta?{' '}
                        <Text style={{ color: 'blue', fontWeight: 'bold' }} onPress={() => navigation.navigate('telaLogin')}>Faça o login</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

// Define PropTypes para validar as propriedades recebidas pelo componente
TelaCadastro.propTypes = {
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
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
    },
    botaoCinza: {
        backgroundColor: '#D9D9D9',
    },
});

export default TelaCadastro;
