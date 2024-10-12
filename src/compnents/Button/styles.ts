import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-weight: 700;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 4px;
`

export const ButtonLink = styled(Link)`
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-weight: 700;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 4px;
    text-decoration: none ;
`