import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import InputDescricao from '../../components/inputDescricao';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'}/>
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <View style={styles.iconVoltar}>
                        <IconVoltar/>
                    </View>
                    <BotaoBranco texto={'Adicionar Cronograma'} onPress={undefined} estilo={undefined} icon={undefined}  />
                    <Input
                        placeholder={'Digite o nome do evento'}
                        onChangeText={undefined}
                        value={undefined} 
                        texto={'Nome do Cronograma:'}
                        icon={require('../../../assets/images/global/icon-lapis.png')} 
                        fontColor={undefined} 
                        inputColor={'white'} 
                        width={320}
                        height={undefined}                                            
                        />

                    <Input
                        placeholder={'Digite a cidadde que o evento está localizado'}
                        onChangeText={undefined}
                        value={undefined} 
                        texto={'Cidade:'}
                        icon={require('../../../assets/images/global/icon-maps.png')} 
                        fontColor={undefined} 
                        inputColor={'white'} 
                        width={320}
                        height={undefined}                                           
                        />

                    <Input
                        placeholder={'_/_/____'}
                        onChangeText={undefined}
                        value={undefined} 
                        texto={'Data:'}
                        icon={require('../../../assets/images/global/icon-data.png')} 
                        fontColor={undefined} 
                        inputColor={'white'} 
                        width={320}
                        height={undefined}                                           
                        />

                    <InputDescricao 
                        value={undefined} 
                        onChangeText={undefined} 
                        placeholder={'Digite uma descrição do evento'} />

                    <BotaoBranco texto={'Salvar Evento'} onPress={undefined} estilo={undefined} icon={undefined}  />

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

export default App;
