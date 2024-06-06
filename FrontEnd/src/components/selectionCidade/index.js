import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const selectionCidade = ({ estado, selectedCidade, setSelectedCidade }) => {

    const [cidades, setCidades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCidades = async () => {
            try {
                let response = await fetch('http://10.135.146.42:8080/cidade/por-estado',
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(estado)
                    }
                );
                if (response.status == 200) {
                    let json = await response.json();
                    setCidades(json);
                    setLoading(false);
                }
                else {
                    console.log(response);
                    Alert.alert("Erro ao buscar cidades", "Verifique as informações")
                }

            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchCidades();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.legenda}>
                <Text style={styles.textoLegenda}><Image style={styles.iconLegenda} source={require('../../../assets/images/global/icon-cidade.png')} />   Cidade:</Text>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedCidade}
                        onValueChange={(itemValue, itemIndex) => {setSelectedCidade(itemValue)}}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        dropdownIconColor="#000" // Cor da setinha
                    >
                        <Picker.Item label="Selecione uma cidade" value="" />
                        {cidades.map((cidade) => (
                            <Picker.Item key={cidade.idCidade} label={cidade.nome} value={cidade} />
                        ))}
                    </Picker>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    legenda: {
        width: 320,
    },

    textoLegenda: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 500,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        height: 40,
        width: 320,
        marginBottom: 10,
    },
    picker: {
        flex: 1,
        color: 'black', // Cor do texto
        fontSize: 16, // Tamanho da fonte
    },
});

export default selectionCidade;
