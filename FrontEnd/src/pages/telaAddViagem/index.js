import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, SectionList } from 'react-native';

const telaAddViagem = () => {

    const navigation = useNavigation();
    const [estados, setEstados] = useState([]);
    const { getItem } = useAsyncStorage("usuario");
    const [nome, setNome] = useState();
    const [data_chegada, setData_chegada] = useState();
    const [data_partida, setData_partida] = useState();
    const [estado, setEstado] = useState({});

    useEffect(() => {
        fetchEstados();
    }, []);

    //Busca os estados no banco de dados
    const fetchEstados = async () => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/estado/`);
            res = await res.json();
            setEstados(res);
        } catch (error) {
            console.log(error);
        }
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
                //Quando o Selection for implementado 
                estado: estados[1]
            }

            let res = await fetch(`http://10.135.146.42:8080/programa/cadastro`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            res = await res.json();
            alert("cadastro realizado com sucesso!!");
            navigation.navigate('telaRoteiroViagem', {
                programa: res,
                usuario: usuario
            });

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
                    <BotaoBranco texto={'Novo Programa'} onPress={undefined} estilo={undefined} icon={undefined} />
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

                    {/* Mudar o campo input por um Section */}
                    <Input
                        placeholder={'Digite um estado do Brasil'}
                        onChangeText={setEstado}
                        value={estado}
                        texto={'Escolha o estado:'}
                        icon={require('../../../assets/images/global/icon-cep.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.inputData}>
                        <Input
                            placeholder={'Chegada - DD/MM/AAAA'}
                            onChangeText={setData_chegada}
                            value={data_chegada}
                            texto={'Datas (Opicional):'}
                            icon={require('../../../assets/images/global/icon-data.png')}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={150}
                            height={undefined}
                        />

                        <Input
                            placeholder={'Partida - DD/MM/AAAA'}
                            onChangeText={setData_partida}
                            value={data_partida}
                            texto={'ㅤ'}
                            icon={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={150}
                            height={undefined}
                        />
                    </View>

                    <BotaoBranco
                        texto={'Adicionar Destino'} onPress={saveProgramaDeViagem}
                        estilo={undefined} icon={undefined} />

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

    inputData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 20,
    },
});

export default telaAddViagem;
