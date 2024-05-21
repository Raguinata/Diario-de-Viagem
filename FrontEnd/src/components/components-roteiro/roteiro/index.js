import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BotaoBranco from '../../botaoBranco';

const roteiro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.text}>
                    <Text style={styles.titulo}>Nome 1</Text>
                </View>
                <View style={styles.icons}>

                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('telaExcluir')}>
                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.card}>
                <Text style={styles.titulos}>Nome</Text>

                <View style={styles.containerTitulo}>
                    <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-data.png')} />
                    <Text style={styles.subTitulos}>Data: <Text>27/10/2029</Text></Text>
                </View>
                <View style={styles.containerTitulo}>
                    <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-maps.png')} />
                    <Text style={styles.subTitulos}>Localização: <Text>São Paulo</Text></Text>
                </View>
                <View style={styles.containerTitulo}>
                
                    <Text style={styles.subTitulos}><Image style={styles.iconCardDes} source={require('../../../../assets/images/global/icon-ponto.png')} />   Descrição: <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum pretium sapien, a ultrices velit interdum non. </Text></Text>
                </View>
                
            </View>

            <BotaoBranco
                            texto={'Adicionar Cronograma'}
                            onPress={() => navigation.navigate('telaAddCronograma')}
                            estilo={styles.roteiroBotao}
                            icon={require('../../../../assets/images/telaAddDestino/icon-add.png')}
                            navigation={navigation}
                        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        width: '90%',
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
    },

    icons: {
        flexDirection: 'row',
    },

    icon: {
        width: 15,
        height: 16,
        marginHorizontal: 5,
    },

    iconCard: {
        width: 15,
        height: 15,
    },

    iconCardDes: {
        marginLeft: 5,
        marginRight: 5,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },

    titulos: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        width: '90%',
    },

    subTitulos: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        width: '90%',
    },

    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },

    roteiroBotao: {
        width: '90%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

});

export default roteiro;