import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const gasto = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleAndIcons}>
                    <Text style={styles.titulo} numberOfLines={1}>
                        Refeição
                    </Text>
                    <View style={styles.icons}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('telaExcluir')}>
                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Descrição: <Text style={styles.subTitulos}>fgdfgdfg</Text></Text>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Custo: <Text style={styles.subTitulos}>fgdfgdfg</Text></Text>
                </View>
            </View>
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

    subTitulos: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'black',
        margin: 10,
    },

    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        width: '90%',
    },

    titleAndIcons: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        marginRight: 10,
        marginBottom: 10,
        flexShrink: 1,
    },

    icons: {
        flexDirection: 'row',
        marginLeft: 10,
    },

    icon: {
        width: 15,
        height: 16,
        marginHorizontal: 5,
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
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        marginVertical: 5,
        width: '90%',
        textAlign: 'left',
    },

    informacoes: { 
        width: '100%',
        alignItems: 'flex-start', 

    },
});

export default gasto;
