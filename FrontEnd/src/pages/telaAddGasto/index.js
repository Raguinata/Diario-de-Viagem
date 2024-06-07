import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const telaAddGasto = ({ route }) => {

    const { navigation, cronograma, gasto_atualizar } = route.params;

    const atualizar = useRef(false);

    const [nome, setNome] = useState();
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState();

    useFocusEffect(
        useCallback(() => {
            gasto_atualizar ? autoConfigGasto() : atualizar.current = false;
        }, route.params)
    );

    const autoConfigGasto = () => {
        atualizar.current = true;
        setNome(gasto_atualizar.nome);
        setValor(`${gasto_atualizar.valor}`);
        setDescricao(gasto_atualizar.descricao);
    }

    const saveOrMergeGasto = async () => {
        let body = {
            cronograma: cronograma,
            gasto: {
                valor: valor,
                descricao: descricao,
                nome: nome
            }
        }
        if (atualizar.current)
            body.gasto["idGasto"] = gasto_atualizar.idGasto;
        try {
            let res = await fetch(`http://10.135.146.42:8080/gasto/adicionar-atualizar`,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )
            if (res.status == 200) {
                Alert.alert("Gasto", "O gasto foi salvado com sucesso!")
                navigation.navigate("telaVisualizarEvento", {
                    cronograma: cronograma,
                    navigation: navigation
                });
            }
            else {
                Alert.alert("Erro em gasto", "Erro ao salvar gasto");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <View style={styles.iconVoltar}>
                        <IconVoltar />
                    </View>
                    <BotaoBranco texto={atualizar.current ? 'Editar Gasto' : 'Adicionar Gasto'}
                        onPress={undefined} estilo={undefined} icon={undefined} />
                    <Input
                        placeholder={'Digite o nome do Gasto'}
                        onChangeText={setNome}
                        value={nome}
                        texto={'Nome do gasto:'}
                        icon={require('../../../assets/images/global/icon-lapis.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    {/* <Input
                        placeholder={':)'}
                        onChangeText={undefined}
                        value={undefined}
                        texto={'Emoji:'}
                        icon={require('../../../assets/images/global/icon-emoji.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    /> */}

                    <Input
                        placeholder={'R$00,00'}
                        onChangeText={setValor}
                        value={valor}
                        texto={'Custo:'}
                        icon={require('../../../assets/images/global/icon-custo.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <InputDescricao
                        value={descricao}
                        onChangeText={setDescricao}
                        placeholder={'Digite uma descrição do gasto'} />

                    <BotaoBranco texto={atualizar.current ? 'Atualizar Gasto' : 'Salvar Gasto'}
                        onPress={saveOrMergeGasto} estilo={undefined} icon={undefined} />

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
        marginVertical: 40,
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

export default telaAddGasto;
