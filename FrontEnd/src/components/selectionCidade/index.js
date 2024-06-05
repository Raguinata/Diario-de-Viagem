import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const selectionCidade = () => {
    const [cidades, setCidades] = useState([]);
    const [selectedCidade, setSelectedCidade] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCidades = async () => {
            try {
                let response = await fetch('http://192.168.15.123:8080/cidade/');
                let json = await response.json();
                setCidades(json);
                setLoading(false);
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
                <Text style={styles.textoLegenda}><Image style={styles.iconLegenda} source={require('../../../assets/images/global/icon-cidade.png')}/>   Cidade:</Text>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedCidade}
                        onValueChange={(itemValue, itemIndex) => setSelectedCidade(itemValue)}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        dropdownIconColor="#000" // Cor da setinha
                    >
                        <Picker.Item label="Selecione uma cidade" value="" />
                        {cidades.map((cidade) => (
                            <Picker.Item key={cidade.idCidade} label={cidade.nome} value={cidade.idCidade} />
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
