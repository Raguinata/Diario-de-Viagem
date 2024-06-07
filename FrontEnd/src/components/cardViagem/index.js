import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardViagem = ({ navigation, programa_infos, usuario_infos }) => {

    const deletarPrograma = async (quero_deletar) => {
        try {
            if (quero_deletar) {
                await fetch(`http://10.135.146.42:8080/programa/`,
                    {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(programa_infos)
                    })
            }
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TouchableOpacity style={styles.conteudo}
            onPress={() => navigation.navigate('telaRoteiroViagem', {
                programa: programa_infos,
                usuario: usuario_infos
            })}>
            <View style={styles.imagemView}>
                <Image style={styles.imagem} source={require('../../../assets/images/estados/SP.png')} />
                <View style={styles.overlay}></View>
            </View>
            <View style={styles.legenda}>

                <View style={styles.conteudoEsquerdo}>

                    <View style={styles.texto}>
                        <Text style={styles.titulo}>{programa_infos?.nome}</Text>
                        <Text style={styles.subTitulo}>{programa_infos?.estado?.nome}</Text>
                        <View style={styles.chegada}>
                            <Image style={styles.icon} source={require('../../../assets//images/global/icon-data.png')} />
                            <Text style={styles.chegadaTexto}>Chegada: {programa_infos?.dataChegada}</Text>
                        </View>
                        <View style={styles.chegada}>
                            <Image style={styles.icon} source={require('../../../assets//images/global/icon-data.png')} />
                            <Text style={styles.chegadaTexto}>Partida: {programa_infos?.dataPartida}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.conteudoDireito}>

                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate('telaAddViagem', {
                        programa_atualizar: programa_infos
                    })}>
                        <Image style={styles.icon} source={require('../../../assets/images/global/icon-editar.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('telaExcluir', {
                        funcDeletar: deletarPrograma
                    })}>
                        <Image style={styles.icon} source={require('../../../assets/images/global/icon-lixo.png')} />
                    </TouchableOpacity>
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
        flexDirection: 'column',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    conteudoEsquerdo: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    conteudoDireito: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 20,
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
