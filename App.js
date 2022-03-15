import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import Colecao from './src/telas/Colecao';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });
  // se a font não estiver carregada, retornauma view vazia
  if (!fontCarregada) {
    return <View />
  }
  return <SafeAreaView style={styles.container}>
          <Colecao />
          <StatusBar />
         </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

