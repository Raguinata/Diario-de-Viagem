import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../input";

function dataHora({ texto, icon }) {
    return (

        <View style={styles.conteiner}>
            <Text style={[styles.textoInput]}>{icon && <Image source={icon} style={styles.icon} />}   {texto}</Text>
            <View style={styles.conteudo}>
                <Input
                    icon={undefined}
                    texto={undefined}
                    placeholder={' '}
                    onChangeText={undefined}
                    value={undefined}
                    fontColor={undefined}
                    inputColor={'#D9D9D9'}
                    width={70}
                    height={15}
                />

                <Input
                    icon={undefined}
                    texto={undefined}
                    placeholder={' '}
                    onChangeText={undefined}
                    value={undefined}
                    fontColor={undefined}
                    inputColor={'#D9D9D9'}
                    width={70}
                    height={15}
                />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
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
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default dataHora;