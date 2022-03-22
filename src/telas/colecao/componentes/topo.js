import React from 'react';
import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.jpeg'
import { Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 300;
const valor = altura / largura * width;

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
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
