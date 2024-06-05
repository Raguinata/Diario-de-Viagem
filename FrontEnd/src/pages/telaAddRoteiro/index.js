import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BotaoBranco from '../../components/botaoBranco';
import IconVoltar from '../../components/icon-voltar';
import Input from '../../components/input';
import SelectionEstado from '../../components/selectionEstado';
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
                    <BotaoBranco texto={'Adicionar Roteiro'} onPress={undefined} estilo={undefined} icon={undefined}  />
                    <Input
                        placeholder={'Digite o nome do roteiro'}
                        onChangeText={undefined}
                        value={undefined} 
                        texto={'Nome do roteiro:'}
                        icon={require('../../../assets/images/global/icon-lapis.png')} 
                        fontColor={undefined} 
                        inputColor={'white'} 
                        width={320}
                        height={undefined}                                            
                        />

                        <SelectionEstado/>

                    <BotaoBranco texto={'Salvar Roteiro'} onPress={undefined} estilo={undefined} icon={undefined}  />

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

export default App;
