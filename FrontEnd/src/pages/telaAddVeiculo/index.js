import React, { useCallback, useRef, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import IconVoltar from '../../components/icon-voltar';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import BotaoBranco from '../../components/botaoBranco';
import Input from '../../components/input';
import DataHora from '../../components/dataHora';
import { useFocusEffect } from '@react-navigation/native';


const telaAddVeiculo = ({ route }) => {

    //Flag para verificar o tipo da ação, se é atualizar ou criar, o endpoint é o mesmo
    const atualizar = useRef(false);

    const { navigation, id_programa, veiculo_atualizar } = route.params;
    const [cidades, setCidades] = useState([]);

    const [modelo, setModelo] = useState();
    const [placa, setPlaca] = useState();
    const [locadora, setLocadora] = useState();
    const [valor, setValor] = useState(0);

    //Inicio locação
    const [retirada_cep, setRetiradaCep] = useState();
    const [retirada_numero, setRetiradaNumero] = useState();
    const [retirada_logradouro, setRetiradaLogradouro] = useState();
    //Buscar a Cidade na API
    const [retirada_cidade, setRetiradaCidade] = useState();
    const [retirada_bairro, setRetiradaBairro] = useState();
    const [retirada_complemento, setRetiradaComplemento] = useState();
    const [retirada_data, setRetiradaData] = useState();
    const [retirada_hora, setRetiradaHora] = useState();

    //Termino locação
    const [entrega_cep, setEntregaCep] = useState();
    const [entrega_numero, setEntregaNumero] = useState();
    const [entrega_logradouro, setEntregaLogradouro] = useState();
    //Buscar a Cidade na API
    const [entrega_cidade, setEntregaCidade] = useState();
    const [entrega_bairro, setEntregaBairro] = useState();
    const [entrega_complemento, setEntregaComplemento] = useState();
    const [entrega_data, setEntregaData] = useState();
    const [entrega_hora, setEntregaHora] = useState();

    useFocusEffect(
        useCallback(() => {
            buscarTotasCidades();
            route.params.veiculo_atualizar ? autoConfigParaAtualizar() : atualizar.current = false
            console.log(veiculo_atualizar)
        }, [route.params])
    );

    //Seta todos os valores de veiculo, quando a ação é de atualizar
    autoConfigParaAtualizar = () => {
        atualizar.current = true
        //veiculo
        setModelo(veiculo_atualizar.modelo);
        setPlaca(veiculo_atualizar.placa);
        setLocadora(veiculo_atualizar.locador);
        setValor(`${veiculo_atualizar.valorAluguel}`);
        //inicioLocacao
        setRetiradaCep(veiculo_atualizar.inicioLocacao.endereco?.cep?.cep);
        setRetiradaNumero(`${veiculo_atualizar.inicioLocacao.endereco.numero}`);
        setRetiradaLogradouro(veiculo_atualizar.inicioLocacao.endereco.logradouro);
        setRetiradaCidade(veiculo_atualizar.inicioLocacao.endereco.cidade);
        setRetiradaBairro(veiculo_atualizar.inicioLocacao.endereco.bairro);
        setRetiradaComplemento(veiculo_atualizar.inicioLocacao.endereco?.complemento);
        setRetiradaData(veiculo_atualizar.inicioLocacao.data.split(" ")[1]);
        setRetiradaHora(veiculo_atualizar.inicioLocacao.data.split(" ")[1]);
        //terminoLocacao
        setEntregaCep(veiculo_atualizar.terminoLocacao.endereco?.cep?.cep);
        setEntregaNumero(`${veiculo_atualizar.terminoLocacao.endereco.numero}`);
        setEntregaLogradouro(veiculo_atualizar.terminoLocacao.endereco.logradouro);
        setEntregaCidade(veiculo_atualizar.terminoLocacao.endereco.cidade);
        setEntregaBairro(veiculo_atualizar.terminoLocacao.endereco.bairro);
        setEntregaComplemento(veiculo_atualizar.terminoLocacao.endereco?.complemento);
        setEntregaData(veiculo_atualizar.terminoLocacao.data.split(" ")[0]);
        setEntregaHora(veiculo_atualizar.terminoLocacao.data.split(" ")[1]);
    }

    const buscarTotasCidades = async () => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/cidade/`);
            res = await res.json();
            setCidades(res);
        } catch (error) {
            console.log(error)
        }
    }

    const formatVeiculo = (veiculo_atualizar) => {
        let body = {
            placa: placa,
            modelo: modelo,
            locador: locadora,
            valorAluguel: valor,
            inicioLocacao: {
                data: `${retirada_data} ${retirada_hora}`,
                endereco: {
                    numero: retirada_numero,
                    bairro: retirada_bairro,
                    logradouro: retirada_logradouro,
                    complemento: retirada_complemento,
                    cep: {
                        cep: retirada_cep
                    },
                    cidade: cidades[1]
                }
            },
            terminoLocacao: {
                data: `${entrega_data} ${entrega_hora}`,
                endereco: {
                    numero: entrega_numero,
                    bairro: entrega_bairro,
                    logradouro: entrega_logradouro,
                    complemento: entrega_complemento,
                    cep: {
                        cep: entrega_cep
                    },
                    cidade: cidades[0]
                }
            }
        }

        //TALVEZ CEP BUG AQUI, CASO UM CEP JÁ EXISTENTE SEJÁ REENVIADO SEM O ID
        if(veiculo_atualizar){
            body["idVeiculo"] = veiculo_atualizar.idVeiculo;
            body.inicioLocacao["idInicioLocacao"] = veiculo_atualizar.inicioLocacao.idInicioLocacao;
            body.inicioLocacao.endereco["idEndereco"] = veiculo_atualizar.inicioLocacao.endereco.idEndereco;
            body.terminoLocacao["idTerminoLocacao"] = veiculo_atualizar.terminoLocacao.idTerminoLocacao;
            body.terminoLocacao.endereco["idEndereco"] = veiculo_atualizar.terminoLocacao.endereco.idEndereco;
        }

        return body;
    }

    const saveOrMerge = async () => {
        let body = {
            id_programa: id_programa,
            veiculo: atualizar.current ? formatVeiculo(veiculo_atualizar) : formatVeiculo()
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

                    <BotaoBranco texto={atualizar.current ? 'Atualizar veículo' : 'Adicionar veículo'}
                        onPress={undefined} estilo={undefined} icon={undefined} />

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
                            data={retirada_data}
                            hora={retirada_hora}
                            setHora={setRetiradaHora}
                            setDada={setRetiradaData}
                            icon={require('../../../assets/images/global/icon-retirada.png')} />

                        <DataHora
                            data={entrega_data}
                            hora={entrega_hora}
                            setHora={setEntregaHora}
                            setDada={setEntregaData}
                            texto={'Entrega:'}
                            icon={require('../../../assets/images/global/icon-entrega.png')} />
                    </View>

                    <BotaoBranco texto={atualizar.current ? 'Atualizar veículo' : 'Adicionar veículo'}
                        onPress={saveOrMerge} estilo={undefined} icon={undefined} />

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
