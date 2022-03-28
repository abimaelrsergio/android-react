import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './componentes/topo';
import Detalhe from './componentes/detalhes';

export default function Colecao({ topo, detalhes }){
    return <>
            <Topo {...topo} />
            <View style={estilos.colecao}>
                <Detalhe {...detalhes}/>                
            </View>
        </>;
}

const estilos = StyleSheet.create({
    colecao: {
        paddingVertical: 10, // padding de cima e de baixo
        paddingHorizontal: 16// padding da esquerda e da direita
    }
});
