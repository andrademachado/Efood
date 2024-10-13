import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from '.'

export const  TagContiner = styled.div<Props>`
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-size: ${(props) => (props.size === 'big' ? '12px' : '10px')};
    font-weight: 700;
    padding: ${(props) => (props.size === 'big' ? '4px 6px' : '4px 6px')};
    display: inline-block;
    `