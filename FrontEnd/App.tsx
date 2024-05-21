import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports das telas
import telaInicial from './src/pages/telaInicial';
import telaLogin from './src/pages/telaLogin';
import telaCadastro from './src/pages/telaCadastro';
import telaAddDestino from './src/pages/telaAddDestino';
import telaPerfil from './src/pages/telaPerfil';
import telaErro from './src/pages/telaErro';
import telaAddViagem from './src/pages/telaAddViagem';
import telaRoteiroViagem from './src/pages/telaRoteiroViagem';
import telaExcluir from './src/pages/telaExcluir';


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
                <Stack.Screen 
                    name="telaLogin" 
                    component={telaLogin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaCadastro" 
                    component={telaCadastro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaAddDestino" 
                    component={telaAddDestino}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaPerfil" 
                    component={telaPerfil}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaErro" 
                    component={telaErro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaAddViagem" 
                    component={telaAddViagem}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaRoteiroViagem" 
                    component={telaRoteiroViagem}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="telaExcluir" 
                    component={telaExcluir}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
