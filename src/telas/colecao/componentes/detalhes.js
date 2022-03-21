import React from 'react';

export default function Detalhes() {
    return <>
        <Text style={estilos.nome}>Coleção de livros</Text>
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
