import styled from "styled-components";
import { cores } from "../../styles";
import fundo from '../../assets/image/fundoHeader.png' 

export const Topo = styled.div`
    background-color: ${cores.bege};
    background-image: url(${fundo});
    width: 100%;
    height: 384px;
    padding: 40px;
    text-align: center;    
`
export const Texto = styled.p`
    color: ${cores.vermelho};
    font-size: 46px;
    font-weight: bold;
    margin-top: 138px;
`
