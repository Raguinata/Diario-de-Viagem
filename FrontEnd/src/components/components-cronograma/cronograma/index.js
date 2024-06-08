import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const Cronogramas = ({ roteiro, navigation, programa }) => {

    const [cronogramas, setCronogramas] = useState([]);

    useEffect(() => {
        fetchCronogramaByRoteiro(roteiro);
    }, [roteiro]);

    const deletarCronograma = async (quero_deletar, id_cronograma) => {
        try {
            if(quero_deletar)
                await fetch(`http://10.135.146.42:8080/cronograma/${id_cronograma}`, {method: "DELETE"});
            navigation.goBack();
        } catch (error) {
            console.log(error)
        }
    }

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
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('telaVisualizarEvento', {
                                cronograma: cronograma,
                                navigation: navigation
                            })}>
                                <View >
                                    <View style={styles.containerTituloPrincipal}>
                                        <Text style={styles.titulos}>{cronograma.nome}</Text>

                                        <View style={styles.icons}>
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('telaAddCronograma', {
                                            cronograma_atualizar: cronograma,
                                            roteiro: roteiro,
                                            navigation: navigation,
                                            programa: programa
                                        })}>
                                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-editar.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('telaExcluir', {
                                            funcDeletar: (quero_deletar) => deletarCronograma(quero_deletar, cronograma.idCronograma)
                                        })}>
                                            <Image style={styles.icon} source={require('../../../../assets/images/global/icon-lixo.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                    

                                    <View style={styles.containerTitulo}>
                                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-data.png')} />
                                        <Text style={styles.subTitulos}>Data: <Text>{cronograma.data}</Text></Text>
                                    </View>
                                    <View style={styles.containerTitulo}>
                                        <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-maps.png')} />
                                        <Text style={styles.subTitulos}>Cidade: <Text>{cronograma.cidade.nome}</Text></Text>
                                    </View>

                                    <View style={styles.containerTitulo}>
                                    <Image style={styles.iconCard} source={require('../../../../assets/images/global/icon-descricao.png')} />
                                        <Text style={styles.subTitulos}>
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

    containerTituloPrincipal: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
    },

    icons: {
        flexDirection: 'row',
        
        
    },

    iconCard: {
        width: 15,
        height: 15,
    },

    iconCardDes: {
        marginLeft: 5,
        marginRight: 5,
    },

    card: {
        width: '98%',
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