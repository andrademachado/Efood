import styled from "styled-components";
import fundo from '../../assets/image/fundoHeader.png'
import { cores } from "../../styles";
import { TagContiner } from "../Tag/styles";
import espaguete from  '../../assets/image/Espaguete.png'



export const Card= styled.div`
        background-color: ${cores.vermelho};
        color: ${cores.begeClaro};
        width: 330px;
        height: 440px;
    `
    export const Pizza = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    `
    export const Title  = styled.h2`
        margin-top: 2px;
        margin-left: 10px;
    `
    export const Descricao = styled.p`
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
    `
    export const Botao = styled.div`
        background-color: ${cores.begeClaro};
        color: ${cores.vermelho};
        width: 310px;
        height: 24px;
        margin-left: 10px;
        margin-bottom: 1px;
    `
    export const Adiciona = styled.h4`
        margin-left: 70px;
        color: ${cores.vermelho};
        align-items: center;
        margin-top: 10px;
    `