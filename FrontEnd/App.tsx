import React from 'react';
import Header from './src/components/header';
import Footer from './src/components/footer';
import IconVoltar from './src/components/icon-voltar';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import BotaoBranco from './src/components/botaoBranco';
import Input from './src/components/input';
import DataHora from './src/components/dataHora';

const App = () => {

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll}>
                <View style={styles.conteudo}>
                    <View style={styles.iconVoltar}>
                        <IconVoltar />
                    </View>

                    <BotaoBranco texto={'Adicionar veículo'} onPress={undefined} estilo={undefined} icon={undefined} />

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Modelo:'}
                        placeholder={'Digite o modelo do veículo'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Placa:'}
                        placeholder={'Digite a placa do veículo'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Locadora:'}
                        placeholder={'Digite a locadora do aluguel do veículo'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Valor Total:'}
                        placeholder={'R$00,00'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Text style={styles.texto}>Local de retirada</Text>

                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('./assets/images/global/icon-lapis.png')}
                            texto={'CEP:'}
                            placeholder={'CEP do local de retirada'}
                            onChangeText={undefined}
                            value={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined}
                        />

                        <Input
                            icon={require('./assets/images/global/icon-lapis.png')}
                            texto={'Número:'}
                            placeholder={'Número'}
                            onChangeText={undefined}
                            value={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={108}
                            height={undefined}
                        />
                    </View>

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Logradouro:'}
                        placeholder={'Digite o Logradouro'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Bairro:'}
                        placeholder={'Digite o Bairro'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.viewDoisInputs}>
                        <Input
                            icon={require('./assets/images/global/icon-lapis.png')}
                            texto={'Cidade:'}
                            placeholder={'Digite a cidade'}
                            onChangeText={undefined}
                            value={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={202}
                            height={undefined}
                        />

                        <Input
                            icon={require('./assets/images/global/icon-lapis.png')}
                            texto={'UF:'}
                            placeholder={'Digite a UF'}
                            onChangeText={undefined}
                            value={undefined}
                            fontColor={undefined}
                            inputColor={'white'}
                            width={108}
                            height={undefined}
                        />
                    </View>

                    <Input
                        icon={require('./assets/images/global/icon-lapis.png')}
                        texto={'Complemento:'}
                        placeholder={'Digite o Complemento (Opcional)'}
                        onChangeText={undefined}
                        value={undefined}
                        fontColor={undefined}
                        inputColor={'white'}
                        width={320}
                        height={undefined}
                    />

                    <View style={styles.viewDoisInputs}>
                        <DataHora 
                        texto={'Retirada:'}
                        icon={require('./assets/images/global/icon-lapis.png')}/>

                        <DataHora/>
                    </View>

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
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },

    viewDoisInputs: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
    },
});

export default App;
