import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input';
import TimeInputParada from '../../components/timeInputParada';
import BotaoBranco from '../../components/botaoBranco';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IconVoltar from '../../components/icon-voltar';

const App = () => {
    const [location, setLocation] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const requestLocationPermission = async () => {
            let response;
            if (Platform.OS === 'android') {
                response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            } else {
                response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            }
            if (response === 'granted') {
                Geolocation.getCurrentPosition(
                    position => {
                        setLocation(position.coords);
                        console.log('Localização atual:', position.coords);
                    },
                    error => {
                        console.log(error);
                    },
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
            }
        };
        requestLocationPermission();
    }, []);

    const onPlaceSelected = (data, details) => {
        setSelectedPlace(details);
        setEventName(details?.name || data.description);
    };

    const handleSave = () => {
        const data = {
            eventName,
            eventDescription,
            eventTime,
            placeDetails: selectedPlace
        };
        setFormData(data);
        console.log('Dados salvos:', data);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header titulo={'Minhas Viagens'} />
            <ScrollView style={styles.conteudoScroll} contentContainerStyle={styles.contentContainer}>
                <View style={styles.conteudo}>
                <View style={styles.iconVoltar}>
                    <IconVoltar />
                </View>
    
                <BotaoBranco texto={'Adicionar Parada'} onPress={undefined} estilo={undefined} icon={undefined} />
    
                <Input
                    icon={require('../../../assets/images/global/icon-emoji.png')}
                    texto={'Nome do Evento:'}
                    placeholder={'Digite o nome do evento'}
                    onChangeText={setEventName}
                    value={eventName}
                    fontColor={undefined}
                    inputColor={'white'}
                    width={320}
                    height={undefined}
                    marginBottom={undefined}
                />
    
                <View style={styles.containerTitulo}>
                    <Image style={styles.iconCard} source={require('../../../assets/images/global/icon-maps.png')} />
                    <Text style={styles.subTitulos}>Lugar:</Text>
                </View>
    
                <TouchableOpacity style={styles.lugar} onPress={() => setModalVisible(true)}>
                    <Text style={styles.selectPlaceText}>Selecionar Lugar</Text>
                </TouchableOpacity>
    
                <TimeInputParada
                    texto={'Hora do Evento:'}
                    value={eventTime}
                    onChange={setEventTime}
                    placeholder={'00:00'}
                />
    
                <BotaoBranco texto={'Salvar Evento'} onPress={handleSave} estilo={undefined} icon={undefined} />

                {selectedPlace && (
                    <View style={styles.placeDetails}>
                        <Text style={styles.detailTitle}>Detalhes do Local Selecionado</Text>
                        <Text>Nome: {selectedPlace.name}</Text>
                        <Text>Endereço: {selectedPlace.formatted_address}</Text>
                        <Text>Latitude: {selectedPlace.geometry.location.lat}</Text>
                        <Text>Longitude: {selectedPlace.geometry.location.lng}</Text>
                    </View>
                )}
                </View>
            </ScrollView>
            <Footer />
    
            {modalVisible && (
                <View style={styles.modal}>
                    <GooglePlacesAutocomplete
                        placeholder="Pesquisar local"
                        onPress={(data, details = null) => {
                            onPlaceSelected(data, details);
                            setModalVisible(false);
                        }}
                        query={{
                            key: 'AIzaSyDRdO3SHS-Oiq570P30cA4e5CvQ3AgEJwA',
                            language: 'pt-br',
                            location: location ? `${location.latitude},${location.longitude}` : null,
                            radius: 500,
                        }}
                        currentLocation={true}
                        currentLocationLabel="Localização atual"
                        fetchDetails={true}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                width: '90%',
                            },
                            textInput: {
                                backgroundColor: '#FFFFFF',
                                borderRadius: 100,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                fontSize: 12,
                                borderWidth: 1,
                                borderColor: '#DDDDDD',
                            },
                            listView: {
                                backgroundColor: '#FFFFFF',
                                borderRadius: 5,
                                elevation: 2,
                            },
                        }}
                        debounce={200}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        enablePoweredByContainer={false}
                        suppressDefaultStyles={false}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({

    lugar: {
        width: 320,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectPlaceText: {
        color: 'black',
        textDecorationLine: 'underline',
    },

    iconVoltar: {
        width: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4c4c4c',
    },

    conteudoScroll: {
        flex: 1,
        width: '90%',
        maxHeight: '75%',
        minHeight: 270,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },

    conteudo: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    },

    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    autocompleteContainer: {
        width: 320,
        borderRadius: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    placeDetails: {
        backgroundColor: '#f8f8f8',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    iconCard: {
        width: 15,
        height: 15,
    },
    subTitulos: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Outfit-VariableFont_wght',
        color: 'black',
        margin: 10,
        width: '90%',
    },
});

export default App;
