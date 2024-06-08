import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import TimeInputParada from '../../components/timeInputParada'
import { useFocusEffect } from '@react-navigation/native';

const telaAddParada = ({ route }) => {

    const { cronograma, navigation, parada_atualizar } = route.params;
    const [hora, setHora] = useState();
    const atualizar = useRef(false);

    useFocusEffect(
        useCallback(() => {
            route.params.parada_atualizar ? autoConfig() : atualizar.current = false;
        }, [route.params])
    );

    const autoConfig = () => {
        atualizar.current = true;
        setHora(parada_atualizar.hora);
    }

    const saveOrMergeParada = async () => {
        let body = {
            cronograma: cronograma,
            parada: {
                hora: hora
            },
            evento: {
                infos: "{}"
            }
        }
        if(atualizar.current){
            body.parada["idParada"] = parada_atualizar.idParada;
            body.evento["idEvento"] = parada_atualizar.evento.idEvento;
        }
        try {
            let res = await fetch(`http://192.168.15.123:8080/parada/adicionar-atualizar`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if (res.status == 200) {
                Alert.alert("Parada", "A parada foi salvada com sucesso!")
                navigation.navigate("telaVisualizarEvento", {
                    cronograma: cronograma,
                    navigation: navigation
                });
            }
            else {
                Alert.alert("Erro em parada", "Erro ao salvar parada");
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
                    <BotaoBranco texto={atualizar.current ? 'Editar Parada' : 'Adicionar Parada'}
                        onPress={undefined} estilo={undefined} icon={undefined} />
                    
                    <Input
                        placeholder={'Digite um evento que deseja visitar'}
                        onChangeText={undefined}
                        value={undefined}
                        texto={'Pesquisar por evento:'}
                        icon={require('../../../assets/images/global/icon-maps.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.input}>
                        <TimeInputParada
                            texto={'Hora'}
                            value={hora}
                            onChange={setHora}
                            placeholder="Hora"
                            inputStyle={styles.dataInputComponente}
                        />
                    </View>

                    <BotaoBranco texto={atualizar.current ? 'Atualizar Parada' : 'Salvar Parada'}
                        onPress={saveOrMergeParada} estilo={undefined} icon={undefined} />

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

    input: {
        width: 105,
        height: 40,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
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

export default telaAddParada;
