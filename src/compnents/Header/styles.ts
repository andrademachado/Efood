import styled from "styled-components";
import fundo from '../../assets/image/fundoHeader.png'
import { cores } from "../../styles";

export const HeaderBar = styled.header`    
    background-image: url(${fundo});
    height: 186px;
    width: 2031px;
    justify-content: space-between;
    top: -23px;
    text-decoration: none;
    margin-bottom: 0px; 
    `

export const Title = styled.h2`
    color: ${cores.vermelho};
    margin-top: 63px;
    margin-left: 150px;
    `
export const Item = styled.div`
display: flex;
`

export const Imagem = styled.img`
    margin-left: 350px;
    margin-right: 200px;
    margin-top: 63px;
`



