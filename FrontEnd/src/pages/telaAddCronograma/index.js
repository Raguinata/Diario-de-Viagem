import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import SelectionCidade from '../../components/selectionCidade';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import DateInput from '../../components/dataInput';

const telaAddCronograma = ({ route }) => {

    const { roteiro, navigation, programa } = route.params;

    const [nome, setNome] = useState();
    const [cidade, setCidade] = useState();
    const [data, setData] = useState();
    const [descricao, setDescricao] = useState();

    const saveOrMergeCronograma = async () => {
        let cronogramaDTO = {
            roteiro: roteiro,
            cidade: cidade,
            cronograma: {
                nome: nome,
                data: data,
                descricao: descricao
            }
        }
        try {
            let res = await fetch(`http://192.168.15.123:8080/cronograma/adicionar-atualizar`,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cronogramaDTO)
                }
            )
            res.status == 200 ? navigation.navigate("telaRoteiroViagem", {programa: programa}) : Alert.alert("Erro ao asicionar cronograma")
        } catch (error) {
            console.log(error)
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
                    <BotaoBranco texto={'Adicionar Cronograma'} onPress={undefined} estilo={undefined} icon={undefined} />
                    <Input
                        placeholder={'Digite o nome do evento'}
                        onChangeText={setNome}
                        value={nome}
                        texto={'Nome do Cronograma:'}
                        icon={require('../../../assets/images/global/icon-lapis.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <SelectionCidade
                        estado={roteiro.estado}
                        selectedCidade={cidade}
                        setSelectedCidade={setCidade}
                    />

                    <DateInput
                        texto={'Data:'}
                        value={data}
                        onChange={setData}
                        placeholder="Selecione a data"
                        inputStyle={styles.dataInputComponente}
                    />

                    <InputDescricao
                        value={descricao}
                        onChangeText={setDescricao}
                        placeholder={'Digite uma descrição do evento'} />

                    <BotaoBranco texto={'Salvar Evento'} onPress={saveOrMergeCronograma} estilo={undefined} icon={undefined} />

                </View>
            </ScrollView>
            <Footer />
        </View>
    );
}


const styles = StyleSheet.create({

    dataInputComponente: {
        backgroundColor: 'white',
        width: 320,
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
})
export default telaAddCronograma;
