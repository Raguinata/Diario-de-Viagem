import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EstadoSelector = () => {
    const [estados, setEstados] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEstados = async () => {
            try {
                let response = await fetch('http://10.135.146.42:8080/estado/');
                let json = await response.json();
                setEstados(json);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEstados();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedEstado}
                        onValueChange={(itemValue, itemIndex) => setSelectedEstado(itemValue)}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        dropdownIconColor="#000" // Cor da setinha
                    >
                        <Picker.Item label="Selecione um estado" value="" />
                        {estados.map((estado) => (
                            <Picker.Item key={estado.idEstado} label={estado.nome} value={estado.idEstado} />
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
        marginVertical: 10,
    },
    picker: {
        flex: 1,
        color: 'black', // Cor do texto
        fontSize: 16, // Tamanho da fonte
    },
});

export default EstadoSelector;
