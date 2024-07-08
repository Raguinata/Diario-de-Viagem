import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, SectionList, Alert } from 'react-native';
import DateInput from '../../components/dataInput';
import Config from 'react-native-config';

const telaAddViagem = ({ route }) => {

    const { programa_atualizar } = route.params;
    
    const atualizar = useRef(false);
    const navigation = useNavigation();
    const { getItem } = useAsyncStorage("usuario");
    const [nome, setNome] = useState();
    const [data_chegada, setData_chegada] = useState();
    const [data_partida, setData_partida] = useState();
    const apiUrl = Config.API_URL;

    useFocusEffect(
        useCallback(() => {
            route.params.programa_atualizar ? autoCompletePrograma() : atualizar.current = false
        }, [route.params])
    );

    autoCompletePrograma = () => {
        atualizar.current = true;
        setNome(programa_atualizar.nome);
        setData_chegada(programa_atualizar.dataChegada);
        setData_partida(programa_atualizar.dataPartida);
    }

    const saveProgramaDeViagem = async () => {
        try {
            const usuario = JSON.parse(await getItem());
            let body = {
                nome: nome,
                dataChegada: data_chegada,
                dataPartida: data_partida,
                lider: usuario,
                usuarios: [usuario],
            }

            if (atualizar.current)
                body["idProgramaDeViagem"] = programa_atualizar.idProgramaDeViagem;

            let res = await fetch(`${apiUrl}/programa/cadastro`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            if (res.status == 200) {
                res = await res.json();
                Alert.alert("Salvar programa", "realizado com sucesso!!");
                navigation.navigate('telaRoteiroViagem', {
                    programa: res,
                    usuario: usuario
                });
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
                    <BotaoBranco texto={atualizar.current ? 'Editar Programa' : 'Novo Programa'}
                        onPress={undefined} estilo={undefined} icon={undefined} />
                    <Input
                        placeholder={'Digite o nome da sua viagem'}
                        onChangeText={setNome}
                        value={nome}
                        texto={'Nome da viagem:'}
                        icon={require('../../../assets/images/global/icon-maps.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.inputData}>
                        <DateInput
                            texto={'Data de Chegada:'}
                            value={data_chegada}
                            onChange={setData_chegada}
                            placeholder="Selecione a data"
                            inputStyle={styles.dataInputComponente}
                        />
                        <DateInput
                            texto={'Data de Partida:'}
                            value={data_partida}
                            onChange={setData_partida}
                            placeholder="Selecione a data"
                            inputStyle={styles.dataInputComponente}
                        />
                    </View>

                    <BotaoBranco
                        texto={atualizar.current ? 'Atualizar Destino' : 'Adicionar Destino'}
                        onPress={saveProgramaDeViagem}
                        estilo={undefined} icon={undefined} />

                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({

    dataInputComponente: {
        backgroundColor: 'white',
        width: 150,
    },

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

    inputData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 20,
    },
});

export default telaAddViagem;
