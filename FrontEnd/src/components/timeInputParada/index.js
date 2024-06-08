import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimeInputCustom = ({ texto, value, onChange, placeholder, inputStyle }) => {
    const [show, setShow] = useState(false);

    const onChangeTime = (event, selectedTime) => {
        setShow(false);
        if (selectedTime) {
            onChange(formatTime(selectedTime));
        }
    };

    const formatTime = (time) => {
        const hour = String(time.getHours()).padStart(2, '0');
        const minute = String(time.getMinutes()).padStart(2, '0');
        return `${hour}:${minute}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
            <Image source={require('../../../assets/images/global/icon-relogio.png')} style={styles.icon} />
            {texto && <Text style={styles.label}>{texto}</Text>}
            </View>
            <TextInput
                value={value}
                placeholder={placeholder}
                onFocus={() => setShow(true)}
                style={[styles.input, inputStyle]}
            />
            
            {show && (
                <DateTimePicker
                    value={value ? new Date(value) : new Date()}
                    mode="time"
                    display="default"
                    onChange={onChangeTime}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginVertical: 15,
    },

    titulo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },

    icon: {
        width: 15,
        height: 15,
        
    },

    label: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
    },
    input: {
        borderRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        fontSize: 12,
        height: 40,
        width: 320,
    },
});

export default TimeInputCustom;
