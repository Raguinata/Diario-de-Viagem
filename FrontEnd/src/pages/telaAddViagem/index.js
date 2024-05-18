import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const telaAddViagem = () => {
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
                        onChangeText={undefined}
                        value={undefined}
                        texto={'Nome da viagem:'}
                        icon={require('../../../assets/images/global/icon-maps.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Input
                        placeholder={'Digite uma cidade ou estado do Brasil'}
                        onChangeText={undefined}
                        value={undefined}
                        texto={'Pesquisar por evento:'}
                        icon={require('../../../assets/images/global/icon-cep.png')}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.inputData}>
                        <Input
                            placeholder={'Chegada - DD/MM/AAAA'}
                            onChangeText={undefined}
                            value={undefined}
                            texto={'Datas (Opicional):'}
                            icon={require('../../../assets/images/global/icon-data.png')}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={150}
                            height={undefined}
                        />

                        <Input
                            placeholder={'Partida - DD/MM/AAAA'}
                            onChangeText={undefined}
                            value={undefined}
                            texto={'ㅤ'}
                            icon={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={150}
                            height={undefined}
                        />
                    </View>

                    <BotaoBranco texto={'Adicionar Destino'} onPress={undefined} estilo={undefined} icon={undefined} />

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
