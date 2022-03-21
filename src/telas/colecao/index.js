import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';
import topo from '../../../assets/topo.jpeg';
import logo from '../../../assets/logo.jpeg';
import Texto from '../../componentes/Texto';

const width = Dimensions.get('screen').width;
const altura = 168;
const largura = 300;
const valor = altura / largura * width;

export default function Colecao(){
    return <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>DETALHES DA COLEÇÃO DE LIVROS</Text>
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
    },
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
