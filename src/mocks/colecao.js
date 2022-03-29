import logo from '../../assets/logo.jpeg';
import ddd from '../../assets/ddd.jpeg';
import codigolimpo from '../../assets/codigolimpo.jpeg';
import arquiteturalimpa from '../../assets/arquiteturalimpa.jpeg';


const colecao = {
    topo: {
        titulo: 'Detalhes da coleção de livros'
    },
    detalhes: {
        nome: 'Coleção de livros',
        fornecedor: 'Livraria Santos Dumont',
        descricao: 'Livros importandos da França, todos escritos por autores renomados.',
        preco: 'R$ 350,00',
        logo: logo,
        botao: "Comprar"
    },
    livro: {
        titulo: 'Livros da coleção',
        lista: [
            {
                nome: 'Arquitetura limpa',
                imagem: arquiteturalimpa
            },
            {
                nome: 'Domain Driven Desing',
                imagem: ddd
            },
            {
                nome: 'Codigo limpo',
                imagem: codigolimpo
            },
            {
                nome: '1 Arquitetura limpa',
                imagem: arquiteturalimpa
            },
            {
                nome: '2 Domain Driven Desing',
                imagem: ddd
            },
            {
                nome: '3 Codigo limpo',
                imagem: codigolimpo
            },
            {
                nome: '4 Arquitetura limpa',
                imagem: arquiteturalimpa
            },
            {
                nome: '5 Domain Driven Desing',
                imagem: ddd
            },
            {
                nome: '6 Codigo limpo',
                imagem: codigolimpo
            },
            {
                nome: '7 Arquitetura limpa',
                imagem: arquiteturalimpa
            },
            {
                nome: '8 Domain Driven Desing',
                imagem: ddd
            },
            {
                nome: '9 Codigo limpo',
                imagem: codigolimpo
            },                                    
        ] 
    }
};

export default colecao;
