import styled from "styled-components";
import { cores } from "../../styles";
import { TagContiner } from "../Tag/styles";


export const Card = styled.div`
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    width:472px ;
    height: 430px;
    margin-bottom: 48px;
    margin-right: 8px;
    position: relative;
    border: 1px solid;

    ${TagContiner} {
        margin-left: 20px;
        margin-right: 12px;
        margin-top: 8px;
    }
`
export const Tema = styled.div`
font-weight: bold;
display: flex;
margin-right: 4px;
margin-left: 4px;
gap: 30px;
margin-top: 12px;
margin-bottom: 20px;
justify-content: space-between;
`
export const Titulo = styled.h1`
font-size: 20px;
margin-left: 2px;
margin-bottom: 0px;
position: relative;
`
export const Numero = styled.h2`
    margin-left: 150px;
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-left: 8px;
`

export const Targeta = styled.div`
    font-size: 12px;
    line-height: 12px;
    display: block;
`
export const Imagem = styled.div`
    font-size: 18px;
    line-height: 18px;
    display: block;
    justify-content: space-between;
`

export const Borda = styled.div`
`
export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const Botão = styled.div`
    background-color: ${cores.vermelho};
    color: ${cores.begeClaro};
    width: 82px;
    height: 26px;
    margin-bottom: 2px;
`

export const Saiba = styled.h4`
    color: ${cores.begeClaro};
    margin-left: 5px;
    margin-top: 2px;
`