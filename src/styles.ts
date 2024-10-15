import  { createGlobalStyle } from "styled-components"

//tabela de cores  *(Variaveis pra usar em todo o projeto)
export const cores = {   
    vermelho:'#E66767',
    branco: '#FFFFFF',
    bege: '#FFEBD9',
    begeClaro:' #FFF8F2'
}

//reset do estilo global
export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        text-decoration: none;
        list-style: none;
    }

    body{
        background-color:  ${cores.begeClaro};
        color: ${cores.branco};
        padding-top: -23px;
    }

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

`









