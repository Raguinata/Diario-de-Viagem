import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports das telas
import telaInicial from './src/pages/telaInicial';
import telaLogin from './src/pages/telaLogin';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='telaInicial'>
                <Stack.Screen 
                    name="telaInicial" 
                    component={telaInicial} 
                    options={{ headerShown: false }} // Oculta o cabeçalho da tela inicial
                />
                <Stack.Screen name="Login" component={telaLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
