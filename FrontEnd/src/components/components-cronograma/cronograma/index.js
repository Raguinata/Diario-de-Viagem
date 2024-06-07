import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const Cronogramas = ({ roteiro, navigation }) => {

    const [cronogramas, setCronogramas] = useState([]);

    useEffect(() => {
        fetchCronogramaByRoteiro(roteiro);
    }, [roteiro]);

    const fetchCronogramaByRoteiro = async (roteiro) => {
        try {
            let res = await fetch(`http://10.135.146.42:8080/cronograma/por-roteiro`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(roteiro)
                }
            )
            if (res.status == 200) {
                res = await res.json();
                setCronogramas(res);
            }
            else {
                Alert.alert("Erro ao buscar cronogramas", "tente novamente");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            {
                cronogramas.map((cronograma) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('telaVisualizarEvento',{
                                cronograma: cronograma,
                                navigation: navigation
                            })}>
                                <View >
                                    <Text style={styles.titulos}>{cronograma.nome}</Text>
                                    <View style={styles.containerTitulo}>
                                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-data.png')} />
                                        <Text style={styles.subTitulos}>Data: <Text>{cronograma.data}</Text></Text>
                                    </View>
                                    <View style={styles.containerTitulo}>
                                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-maps.png')} />
                                        <Text style={styles.subTitulos}>Cidade: <Text>{cronograma.cidade.nome}</Text></Text>
                                    </View>
                                    <View style={styles.containerTitulo}>
                                        <Text style={styles.subTitulos}><Image style={styles.iconCardDes} source={require('../../../../assets/images/global/icon-ponto.png')} />
                                            Descrição: <Text>{cronograma.descricao}</Text>
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({

    iconCard: {
        width: 15,
        height: 15,
    },

    iconCardDes: {
        marginLeft: 5,
        marginRight: 5,
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

});

export default Cronogramas;