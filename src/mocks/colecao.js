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
        ] 
    }
};

export default colecao;
