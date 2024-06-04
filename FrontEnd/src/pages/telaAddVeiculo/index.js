import React, { useCallback, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import IconVoltar from '../../components/icon-voltar';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import DataHora from '../../components/dataHora';
import { useFocusEffect } from '@react-navigation/native';


const telaAddVeiculo = ({ route }) => {

    const { navigation, id_programa } = route.params;
    const [cidades, setCidades] = useState([]);

    const [modelo, setModelo] = useState("awdawd");
    const [placa, setPlaca] = useState("sfsfef");
    const [locadora, setLocadora] = useState("adawdaw");
    const [valor, setValor] = useState(0);

    //Inicio locação
    const [retirada_cep, setRetiradaCep] = useState("4363469");
    const [retirada_numero, setRetiradaNumero] = useState("12");
    const [retirada_logradouro, setRetiradaLogradouro] = useState("adawd");
    //Buscar a Cidade na API
    const [retirada_cidade, setRetiradaCidade] = useState();
    const [retirada_bairro, setRetiradaBairro] = useState("dawdawd");
    const [retirada_complemento, setRetiradaComplemento] = useState();
    const [retirada_data, setRetiradaData] = useState();

    //Termino locação
    const [entrega_cep, setEntregaCep] = useState("3515157");
    const [entrega_numero, setEntregaNumero] = useState("14");
    const [entrega_logradouro, setEntregaLogradouro] = useState("adawda");
    //Buscar a Cidade na API
    const [entrega_cidade, setEntregaCidade] = useState();
    const [entrega_bairro, setEntregaBairro] = useState("adawdwa");
    const [entrega_complemento, setEntregaComplemento] = useState();
    const [entrega_data, setEntregaData] = useState();

    useFocusEffect(
        useCallback(() => {
            buscarTotasCidades();
        }, [route.params])
    );

    const buscarTotasCidades = async () => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/cidade/`);
            res = await res.json();
            console.log(`cidades:`)
            console.log(res)
            setCidades(res);
        } catch (error) {
            console.log(error)
        }
    }

    const formatVeiculo = () => {
        return {
            placa: placa,
            modelo: modelo,
            locador: locadora,
            valorAluguel: valor,
            inicioLocacao: {
                data: "2024-06-03T14:30:45",
                endereco: {
                    numero: retirada_numero,
                    bairro: retirada_bairro,
                    complemento: retirada_complemento,
                    cep: {
                        cep: retirada_cep
                    },
                    cidade: cidades[1]
                }
            },
            terminoLocacao: {
                data: "2024-06-03T14:30:45",
                endereco: {
                    numero: entrega_numero,
                    bairro: entrega_bairro,
                    complemento: entrega_complemento,
                    cep: {
                        cep: entrega_cep
                    },
                    cidade: cidades[0]
                }
            }
        }
    }

    const save = async () => {
        let body = {
            id_programa: id_programa,
            veiculo: formatVeiculo()
        }
        try {
            let res = await fetch(`http://10.135.146.42:8080/programa/veiculo/adcionaOuAtualiza`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            res = await res.json();
            navigation.navigate('telaRoteiroViagem', {
                programa: res,
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

                    <BotaoBranco texto={'Adicionar veículo'} onPress={save} estilo={undefined} icon={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-modelo.png')}
                        texto={'Modelo:'}
                        placeholder={'Digite o modelo do veículo'}
                        onChangeText={setModelo}
                        value={modelo}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-placa.png')}
                        texto={'Placa:'}
                        placeholder={'Digite a placa do veículo'}
                        onChangeText={setPlaca}
                        value={placa}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-locadora.png')}
                        texto={'Locadora:'}
                        placeholder={'Digite a locadora do aluguel do veículo'}
                        onChangeText={setLocadora}
                        value={locadora}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-custo.png')}
                        texto={'Valor Total:'}
                        placeholder={'R$00,00'}
                        onChangeText={setValor}
                        value={valor}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Text style={styles.texto}><Image source={require('../../../assets/images/global/icon-localRetirada.png')} /> Local de retirada</Text>

                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('../../../assets/images/global/icon-cep.png')}
                            texto={'CEP:'}
                            placeholder={'CEP do local de retirada'}
                            onChangeText={setRetiradaCep}
                            value={retirada_cep}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined} marginBottom={undefined} />

                        <Input
                            icon={require('../../../assets/images/global/icon-numero.png')}
                            texto={'Número:'}
                            placeholder={'Número'}
                            onChangeText={setRetiradaNumero}
                            value={retirada_numero}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={108}
                            height={undefined} marginBottom={undefined} />
                    </View>

                    <Input
                        icon={require('../../../assets/images/global/icon-logradouro.png')}
                        texto={'Logradouro:'}
                        placeholder={'Digite o Logradouro'}
                        onChangeText={setRetiradaLogradouro}
                        value={retirada_logradouro}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-bairro.png')}
                        texto={'Bairro:'}
                        placeholder={'Digite o Bairro'}
                        onChangeText={setRetiradaBairro}
                        value={retirada_bairro}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    {/* MUDAR PARA UM SELECTION */}
                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('../../../assets/images/global/icon-cidade.png')}
                            texto={'Cidade:'}
                            placeholder={'Digite a cidade'}
                            onChangeText={setRetiradaCidade}
                            value={retirada_cidade}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined} marginBottom={undefined} />
                    </View>

                    <Input
                        icon={require('../../../assets/images/global/icon-complemento.png')}
                        texto={'Complemento:'}
                        placeholder={'Digite o Complemento (Opcional)'}
                        onChangeText={setRetiradaComplemento}
                        value={retirada_complemento}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Text style={styles.texto}><Image source={require('../../../assets/images/global/icon-localRetirada.png')} /> Local de entrega</Text>

                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('../../../assets/images/global/icon-cep.png')}
                            texto={'CEP:'}
                            placeholder={'CEP do local de entrega'}
                            onChangeText={setEntregaCep}
                            value={entrega_cep}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined} marginBottom={undefined} />

                        <Input
                            icon={require('../../../assets/images/global/icon-numero.png')}
                            texto={'Número:'}
                            placeholder={'Número'}
                            onChangeText={setEntregaNumero}
                            value={entrega_numero}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={108}
                            height={undefined} marginBottom={undefined} />
                    </View>

                    <Input
                        icon={require('../../../assets/images/global/icon-logradouro.png')}
                        texto={'Logradouro:'}
                        placeholder={'Digite o Logradouro'}
                        onChangeText={setEntregaLogradouro}
                        value={entrega_logradouro}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <Input
                        icon={require('../../../assets/images/global/icon-bairro.png')}
                        texto={'Bairro:'}
                        placeholder={'Digite o Bairro'}
                        onChangeText={setEntregaBairro}
                        value={entrega_bairro}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('../../../assets/images/global/icon-cidade.png')}
                            texto={'Cidade:'}
                            placeholder={'Digite a cidade'}
                            onChangeText={setEntregaCidade}
                            value={entrega_cidade}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined} marginBottom={undefined} />
                    </View>

                    <Input
                        icon={require('../../../assets/images/global/icon-complemento.png')}
                        texto={'Complemento:'}
                        placeholder={'Digite o Complemento (Opcional)'}
                        onChangeText={setEntregaComplemento}
                        value={entrega_complemento}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined} marginBottom={undefined} />

                    <View style={styles.viewDoisInputs}>
                        <DataHora
                            texto={'Retirada:'}
                            icon={require('../../../assets/images/global/icon-retirada.png')} />

                        <DataHora
                            texto={'Entrega:'}
                            icon={require('../../../assets/images/global/icon-entrega.png')} />
                    </View>

                    <BotaoBranco texto={'Adicionar'} onPress={save} estilo={undefined} icon={undefined} />

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

    iconVoltar: {
        width: '100%',
    },

    texto: {
        color: 'black',
        width: '83%',
        fontSize: 16,
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'left',
    },

    viewDoisInputs: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
    },
});

export default telaAddVeiculo;
