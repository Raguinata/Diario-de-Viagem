import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../input";

function dataHora({ texto, icon }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textoInput]}>{icon && <Image source={icon} style={styles.icon} />}   {texto}</Text>
            <View style={styles.conteudo}>
                <View style={styles.input}>
                    <Text style={styles.texto}>
                        <Image source={require('../../../assets/images/global/icon-data.png')} style={styles.icon} /> __/__/__
                    </Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.texto}>
                        <Image source={require('../../../assets/images/global/icon-relogio.png')} style={styles.icon} /> 00:00
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    textoInput: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 14,
        width: 15,
        height: 15,
    },
    conteudo: {
        width: 150,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: 105,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        color: 'black', // Adicione isso para garantir que o texto do campo seja exibido corretamente
    },

    texto: {
        fontSize: 14,
        fontFamily: 'Outfit-VariableFont_wght',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
});

export default dataHora;
