import styled from "styled-components";
import { cores } from "../../styles";
import { TagContiner } from "../Tag/styles";


export const Card = styled.div`
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    width:472px ;
    height: 452px;
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




{/*
    
    import styled from "styled-components";
import { cores } from "../../styles";
import { TagContiner } from "../Tag/styles";

export const Card = styled.div`
    width: 472px;
    height: 181px;
    top: 657px;
    margin-left: 171px;
    
    .container {
        position: relative;
        margin-top: 80px;
    }
    ${TagContiner} {
        margin-right: 16px;
        display: flex;
        position: absolute;
        top: 16px;
    }
    `

export const Tema = styled.h3`
    font-size: 18px;
    font-weight: 700;
    display: flex;
    margin-bottom: 7px;
    `
export const Conteudo= styled.div`
    width: 472px;
    height: 220px; 
    display: blok;
    background-color: ${cores.branco};
    color: ${cores.vermelho};
`

export const Descricao = styled.div`
    display: flex;
    margin-left: 290px;
`

export const Numero = styled.h3`
    margin-right: 12px;
`
export const Paragrafo = styled.p`
    margin-top: 45px;
    margin-bottom: 20px;
`




    */}