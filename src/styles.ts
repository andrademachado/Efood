import { createGlobalStyle } from "styled-components"

const cores = {   
    vermelhoRosado:'#E66767',
    branco: '#FFFFFF',
    bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body{
        background-color:  ${cores.bege};
        color: ${cores.branco};
    }
`







