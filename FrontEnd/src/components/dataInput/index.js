import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ texto, value, onChange, placeholder, containerStyle, labelStyle, inputStyle }) => {
    const [show, setShow] = useState(false);

    const [dateValue, setDateValue] = useState(value);

    const onChangeDate = (event, selectedDate) => {
        setShow(false);
        if (event.type === 'set' && selectedDate) {
            const formattedDate = formatDate(selectedDate);
            setDateValue(formattedDate);
            onChange(formattedDate);
        }
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };


    const handleTextChange = (text) => {
        setDateValue(text);
        onChange(text);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {texto && <Text style={[styles.label, labelStyle]}>{texto}</Text>}
            <TextInput
                value={dateValue}
                placeholder={placeholder}
                onFocus={() => setShow(true)}
                onChangeText={handleTextChange}
                style={[styles.input, inputStyle]}
            />
            {show && (
                <DateTimePicker
                    value={dateValue ? new Date(dateValue.split('/').reverse().join('-')) : new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
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
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 10,
        fontSize: 12,
        height: 40,
        width: 280,
    },
});

export default DateInput;
