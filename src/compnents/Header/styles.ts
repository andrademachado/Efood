import styled from "styled-components";
import fundo from '../../assets/image/fundoHeader.png'
import { cores } from "../../styles";

export const HeaderBar = styled.header`    
    background-image: url(${fundo});
    height: 186px;
    width: 2031px;
    top: -23px;
    text-decoration: none;
    
    
    `
export const Title = styled.h2`
    color: ${cores.vermelho};
    margin-top: 63px;
    `
export const Item = styled.div`
margin-left: 250px;
display: flex;
margin-right: 0px;
align-items: center;

`
export const Imagem = styled.img`
    margin-left: 290px;
    margin-right: 300px;
    margin-top: 63px;
`



