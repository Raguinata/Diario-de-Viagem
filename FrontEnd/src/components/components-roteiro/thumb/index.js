import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const imagePaths = [
    require('../../../../assets/images/estados/AC.png'),
    require('../../../../assets/images/estados/AL.png'),
    require('../../../../assets/images/estados/AP.png'),
    require('../../../../assets/images/estados/AM.png'),
    require('../../../../assets/images/estados/BA.png'),
    require('../../../../assets/images/estados/CE.png'),
    require('../../../../assets/images/estados/DF.png'),
    require('../../../../assets/images/estados/ES.png'),
    require('../../../../assets/images/estados/GO.png'),
    require('../../../../assets/images/estados/MA.png'),
    require('../../../../assets/images/estados/MT.png'),
    require('../../../../assets/images/estados/MS.png'),
    require('../../../../assets/images/estados/MG.png'),
    require('../../../../assets/images/estados/PA.png'),
    require('../../../../assets/images/estados/PB.png'),
    require('../../../../assets/images/estados/PR.png'),
    require('../../../../assets/images/estados/PE.png'),
    require('../../../../assets/images/estados/PI.png'),
    require('../../../../assets/images/estados/RJ.png'),
    require('../../../../assets/images/estados/RN.png'),
    require('../../../../assets/images/estados/RS.png'),
    require('../../../../assets/images/estados/RO.png'),
    require('../../../../assets/images/estados/RR.png'),
    require('../../../../assets/images/estados/SC.png'),
    require('../../../../assets/images/estados/SP.png'),
    require('../../../../assets/images/estados/SE.png'),
    require('../../../../assets/images/estados/TO.png')
    // Adicione mais caminhos de imagens conforme necessário
];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
};

const thumb = ({ programa }) => {
    const randomImage = getRandomImage();
    return (
        <View style={styles.conteudo}>
            <View style={styles.imagemView}>
                <ImageBackground
                    source={randomImage}
                    style={styles.imagemFundo}
                    imageStyle={styles.imagem}>
                </ImageBackground>
                <View style={styles.overlay}></View>
            </View>
            <View style={styles.legenda}>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>{programa?.nome}</Text>
                    <View style={styles.chegada}>
                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-data-branco.png')} />
                        <Text style={styles.chegadaTexto}>Chegada:  {programa?.dataChegada}</Text>
                    </View>
                    <View style={styles.chegada}>
                        <Image style={styles.icon} source={require('../../../../assets/images/global/icon-data-branco.png')} />
                        <Text style={styles.chegadaTexto}>Partida:  {programa?.dataPartida}</Text>
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
        height: 230,
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
        marginVertical: 2,
        borderRadius: 20,
        marginBottom: 70,
        textAlign: 'center',
    },

    chegada: {
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 20,

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
