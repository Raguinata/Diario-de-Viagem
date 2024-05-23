import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const thumb = () => {
    return (
        <View style={styles.conteudo}>
            <View style={styles.imagemView}>
                <ImageBackground
                    source={require('../../../../assets/images/estados/SP.png')}
                    style={styles.imagemFundo}
                    imageStyle={styles.imagem}>
                </ImageBackground>
                <View style={styles.overlay}></View>
            </View>
            <View style={styles.legenda}>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>Roteiro: Parques para visitar</Text>
                    <Text style={styles.subTitulo}>Cronograma: Ibirapuera</Text>
                    <Text style={styles.subTitulo}>Localização: São Paulo</Text>
                    <Text style={styles.subTitulo}>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum pretium sapien, a ultrices velit interdum non. </Text>
                    <View style={styles.chegada}>
                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-data-branco.png')} />
                        <Text style={styles.chegadaTexto}>Data: 03/12/2020</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        marginVertical: 20,
        height: 350,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9A9A9',
        borderRadius: 20,
        overflow: 'hidden', // Ensure the borderRadius is applied
    },

    imagemView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },

    imagemFundo: {
        flex: 1,
        justifyContent: 'center',
    },

    imagem: {
        borderRadius: 20,
    },
    
    legenda: {
        height: '30%',
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    
    texto: {
        marginVertical: 10,
        marginHorizontal: 20,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        marginBottom: 30,
        borderRadius: 20,
        textAlign: 'center',
    },

    subTitulo: {
        fontSize: 15,
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 20,
        textAlign: 'left',
        marginVertical: 2,
        paddingHorizontal: 10,
    },

    chegada: {
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 20,
        marginTop: 50,
    },

    icon: {
        width: 17,
        height: 17,
        marginRight: 5,
        color: 'white',
    },

    chegadaTexto: {
        fontSize: 15,
        color: 'white',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        borderRadius: 20,
    },
});

export default thumb;
