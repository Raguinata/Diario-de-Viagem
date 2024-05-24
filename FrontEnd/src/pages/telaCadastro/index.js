import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// Componentes personalizados
import Logo from '../../components/logo';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import Ou from '../../components/ou';
import Icons from '../../components/icons';

// Tela de Cadastro
const TelaCadastro = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nascimento, setNascimento] = useState();
    const [nome, setNome] = useState();
    const { setItem } = useAsyncStorage("usuario");

    const cadastro = async () => {

        let body = {
            nome: nome,
            email: email,
            nascimento: nascimento,
            senha: senha
        }

        try {
            return await fetch(`http://10.135.146.42:8080/usuario/cadastro`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleCadastro = async () => {
        const res = await cadastro();
        if (res.status == 200) {
            try {
                const dados = await res.text();
                await setItem(dados);
                navigation.navigate('telaAddDestino');
            } catch (error) {
                console.log(error);
            }
        } else {
            alert(
                "Tentativa de cadastro inválida, verifique se o email não está sendo" +
                " utilizado e se preencheu todos os campos"
            );
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
                </View>
                {/* Conteúdo principal */}
                <View style={styles.main}>
                    <Input texto={'Nome:'} value={nome} onChangeText={setNome} />
                    <Input texto={'Data de Nascimento:'} value={nascimento} onChangeText={setNascimento} />
                    <Input texto={'Email:'} value={email} onChangeText={setEmail} />
                    <Input texto={'Senha:'} value={senha} onChangeText={setSenha} />
                    <BotaoBranco texto={'Cadastrar'} onPress={handleCadastro} estilo={styles.botaoCinza} />
                </View>
                {/* Rodapé */}
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
        backgroundColor: 'rgba(0, 0, 0, 0.77)', // cor escura
    },
    botaoCinza: {
        backgroundColor: '#D9D9D9',
    },
});

export default TelaCadastro;
