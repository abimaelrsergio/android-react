import React from 'react';
import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png'
import { Image, StyleSheet } from 'react-native';

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhes da coleção de livros</Texto>
    </>;
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: valor,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: 'blue',
        fontWeight: 'bold',
        padding: 6,
    }
});
