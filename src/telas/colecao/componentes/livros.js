import React from 'react';
import Texto from '../../../componentes/Texto';
import { View, Image } from 'react-native';

export default function Livros({ titulo, lista }) {
    return <>
        <Texto>{ titulo }</Texto>
        { 
            lista.map(({ nome, imagem })=> {
                return <View key={ nome }>
                    <Image source={ imagem } />
                    <Texto>{ nome }</Texto>
                </View>
            })
        }
    </>;
}
