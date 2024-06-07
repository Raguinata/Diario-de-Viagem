import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import SelectionEstado from '../../components/selectionEstado';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const telaAddRoteiro = ({ route }) => {

    //Flag para verificar o tipo da ação, se é atualizar ou criar, o endpoint é o mesmo
    const atualizar = useRef(false);

    const { programa, navigation, roteiro_atualizar } = route.params

    const [nome, setNome] = useState("");
    const [estado, setEstado] = useState({});

    useFocusEffect(
        useCallback(() => {
            route.params.roteiro_atualizar ? autoConfigParaAtualizar() : atualizar.current = false
        }, [route.params])
    );

    const autoConfigParaAtualizar = () => {
        atualizar.current = true;
        setNome(roteiro_atualizar.nome)
        setEstado(roteiro_atualizar.estado)
    }

    const saveOrMergeRoteiro = async () => {
        let body = {
            programaDeViagem: programa,
            roteiro: {
                nome: nome,
                estado: estado
            }
        }

        if (roteiro_atualizar) {
            body.roteiro["idRoteiro"] = roteiro_atualizar.idRoteiro
        }
        try {
            let res = await fetch(`http://192.168.15.123:8080/roteiro/adicionar-atualizar`,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )
            if (res.status == 200) {
                navigation.navigate("telaRoteiroViagem", {
                    programa: programa
                })
            } else {
                Alert.alert("Erro ao cadastrar Roteiro", "algum erro interno ocorreu")
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
                    <BotaoBranco texto={atualizar.current ? 'Editar Roteiro' : 'Adicionar Roteiro'}
                        onPress={undefined} estilo={undefined} icon={undefined} />
                    <Input
                        placeholder={'Digite o nome do roteiro'}
                        onChangeText={setNome}
                        value={nome}
                        texto={'Nome do roteiro:'}
                        icon={require('../../../assets/images/global/icon-lapis.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <SelectionEstado
                        selectedEstado={estado}
                        setSelectedEstado={setEstado}
                        isSeted={atualizar.current}
                    />

                    <BotaoBranco texto={atualizar.current ? 'Atualizar Roteiro' : 'Salvar Roteiro'} onPress={saveOrMergeRoteiro} estilo={undefined} icon={undefined} />

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
        width: '90%',
        maxHeight: '50%',
        minHeight: 270,
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

export default telaAddRoteiro;
