import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto'
import logo from '../../../../assets/logo.jpeg';

export default function Detalhes({ nome, fornecedor, descricao, preco }) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.cabecalhoFornecedor}>
            <Image source={logo} style={estilos.imagemFornecedor} />
            <Texto style={estilos.fornecedor}>{ fornecedor }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
    </>;
}
const estilos = StyleSheet.create({
    fornecedor: {
        fontSize: 16,
        lineHeight: 36,
        marginLeft: 12,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    imagemFornecedor: {
        width: 31,
        height: 31
    },
    cabecalhoFornecedor: {
        flexDirection: 'row',// tudo em uma linha
        paddingVertical: 12
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    },
});

