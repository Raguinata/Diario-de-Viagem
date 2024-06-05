import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DateInput from "../dataInput";
import TimeInput from "../timeInput";

function DataHora({ texto, icon, data, setDada, hora, setHora }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textoInput]}>{icon && <Image source={icon} style={styles.icon} />}   {texto}</Text>
            <View style={styles.conteudo}>
                <View style={styles.input}>
                    <DateInput
                        texto={'Data'}
                        value={data}
                        onChange={setDada}
                        placeholder="Data"
                        inputStyle={styles.dataInputComponente}
                    />
                </View>
                <View style={styles.input}>
                    <TimeInput
                        texto={'Hora'}
                        value={hora}
                        onChange={setHora}
                        placeholder="Hora"
                        inputStyle={styles.dataInputComponente}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    dataInputComponente: {
        width: 105,
        height: 40,
        marginTop: 10,
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
        width: 155, // Alterei para o tamanho adequado
        height: 200,
        backgroundColor: 'white',
        borderRadius: 35,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        width: 105,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DataHora;
