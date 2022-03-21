import React from 'react';
import { View, Image } from 'react-native';
import Texto from '../../../componentes/Texto'
import logo from '../../../../assets/logo.jpeg';

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Coleção de livros</Texto>
        <View style={estilos.cabecalhoFornecedor}>
            <Image source={logo} style={estilos.imagemFornecedor} />
            <Text style={estilos.fornecedor}>Livraria Santos Dumont</Text>
        </View>
        <Texto style={estilos.descricao}>
            Livros importandos da França, todos escritos por autores
            renomados.
        </Texto>
        <Text style={estilos.preco}>R$ 350,00</Text>
    </>;
}
