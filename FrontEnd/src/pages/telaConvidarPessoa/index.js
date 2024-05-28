import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
// import InputDescricao from './src/components/inputDescricao';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const telaConvidarPessoa = ({ route }) => {

    const [email, setEmail] = useState('');

    const handleSetInfos = async () => {
        const infos = await route.params;
        return infos;
    }

    const adicionarAoGrupo = async () => {
        handleSetInfos().then(async ({ programa, navigation, usuario }) => {
            try {
                let res = await fetch(`http://192.168.15.123:8080/programa/grupo/adicionar-por-email?email=${email}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(programa)
                })
                if (res.status == 204) {
                    alert("Erro, esse email não existe ou já foi adicionado")
                }
                else {
                    res = await res.json();
                    alert("Adicionado com sucesso");
                    navigation.navigate('telaRoteiroViagem', {
                        programa: res,
                        usuario: usuario
                    });
                }
            } catch (error) {
                console.log(error);
            }
        })
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <View style={styles.iconVoltar}>
                        <IconVoltar />
                    </View>
                    <BotaoBranco texto={'Convidar pessoa ao grupo'} onPress={undefined} estilo={undefined} icon={undefined} />
                    <Input
                        placeholder={'Digite o email do usuário'}
                        onChangeText={setEmail}
                        value={email}
                        texto={'Email do Usuário:'}
                        icon={require('../../../assets/images/global/icon-email.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <BotaoBranco texto={'Convidar'} onPress={adicionarAoGrupo} estilo={undefined} icon={undefined} />

                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4c4c4c',
    },

    conteudoScroll: {
        flex: 1,
        marginVertical: 145,
        width: '90%',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },

    conteudo: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    },

    titulo: {
        fontSize: 32,
        color: 'black',
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    iconVoltar: {
        width: '100%',
    },
});

export default telaConvidarPessoa;
