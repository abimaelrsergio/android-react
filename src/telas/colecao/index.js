import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import logo from '../../../assets/logo.jpeg';
import Texto from '../../componentes/Texto';
import Topo from './componentes/topo';

export default function Colecao(){
    return <>
            <Topo />
            <View style={estilos.colecao}>
                <Text style={estilos.nome}>Coleção de livros</Text>
                <View style={estilos.cabecalhoFornecedor}>
                    <Image source={logo} style={estilos.imagemFornecedor}/>
                    <Text style={estilos.fornecedor}>Livraria Santos Dumont</Text>
                </View>
                <Texto style={estilos.descricao}>
                    Livros importandos da França, todos escritos por autores
                    renomados.
                </Texto>
                <Text style={estilos.preco}>R$ 350,00</Text>
            </View>
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
    colecao: {
        paddingVertical: 10, // padding de cima e de baixo
        paddingHorizontal: 16// padding da esquerda e da direita
    }
});
