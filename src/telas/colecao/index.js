import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Topo from './componentes/topo';
import Detalhe from './componentes/detalhes';
import Livro from './componentes/livro';
import Texto from '../../componentes/Texto';

export default function Colecao({ topo, detalhes, livros }) {
    return <>
        <FlatList
            data={livros.lista}
            renderItem={Livro}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.colecao}>
                        <Detalhe {...detalhes} />
                        <Texto style={estilos.titulo}>{ livros.titulo }</Texto>
                    </View>
                </>
            }} />

    </>;
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    colecao: {
        paddingVertical: 10, // padding de cima e de baixo
        paddingHorizontal: 16// padding da esquerda e da direita
    }
});
