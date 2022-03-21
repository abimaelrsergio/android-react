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
    
});
