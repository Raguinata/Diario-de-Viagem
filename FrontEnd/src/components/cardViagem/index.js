import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardViagem = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.conteudo} onPress={() => navigation.navigate('telaAddViagem')}>
            <View style={styles.imagemView}>
                <Image style={styles.imagem} source={require('../../../assets/images/estados/SP.png')} />
                <View style={styles.overlay}></View>
            </View>
            <View style={styles.legenda}>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>Viagem Da Bacia</Text>
                    <Text style={styles.subTitulo}>São Paulo</Text>
                    <View style={styles.chegada}>
                        <Image style={styles.icon} source={require('../../../assets/images/global/icon-data.png')} />
                        <Text style={styles.chegadaTexto}>Chegada: 03/12/2020</Text>
                    </View>
                    <View style={styles.chegada}>
                        <Image style={styles.icon} source={require('../../../assets/images/global/icon-data.png')} />
                        <Text style={styles.chegadaTexto}>Chegada: 03/12/2020</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        marginVertical: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9A9A9',
        borderRadius: 20,
    },
    imagemView: {
        height: '70%',
        width: '100%',
        overflow: 'hidden', // Para garantir que a borda arredondada seja exibida corretamente
    },
    imagem: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    legenda: {
        height: '30%',
        width: '100%',
    },
    texto: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    subTitulo: {
        fontSize: 15,
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        fontWeight: 'bold',
    },
    chegada: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    chegadaTexto: {
        fontSize: 15,
        color: 'black',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default CardViagem;
