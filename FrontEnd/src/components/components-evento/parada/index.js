import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Parada = ({ navigation, parada }) => {
    const [evento, setEvento] = useState({});

    const deletarParada = async (quero_deletar) => {
        try {
            if (quero_deletar) {
                await fetch(`http://192.168.15.123:8080/parada/${parada.idParada}`, { method: "DELETE" });
            }
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (parada.evento && parada.evento.infos) {
            setEvento(JSON.parse(parada.evento.infos));
        }
    }, [parada]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleAndIcons}>
                    <Text style={styles.titulo} numberOfLines={1}>
                        Parada: <Text>{evento?.name}</Text>
                    </Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => navigation.navigate('telaAddParada', {
                            cronograma: parada.cronograma,
                            navigation: navigation,
                            parada_atualizar: parada
                        })}>
                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('telaExcluir', {
                            funcDeletar: deletarParada
                        })}>
                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Endereço: <Text style={styles.subTitulos}>{evento?.formatted_address}</Text></Text>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Latitude: <Text style={styles.subTitulos}>{evento?.geometry?.location?.lat}</Text></Text>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Longitude: <Text style={styles.subTitulos}>{evento?.geometry?.location?.lng}</Text></Text>
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.titulos}>Horário: <Text style={styles.subTitulos}>{parada.hora}</Text></Text>
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
        alignItems: 'center',
        flex: 1,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        marginRight: 10,
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

export default Parada;
