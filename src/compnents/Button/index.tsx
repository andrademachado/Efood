import { Children } from "react";
import { ButtonContainer, ButtonLink,  } from "./styles";


type Props = {
    type: 'button'|'link'
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
}

const Button = ({ type,title, to , onClick, children }: Props) => {
    if (type === 'button'){
        return (
        <ButtonContainer type="button" title={title} onClick={onClick}>
            {children}
        </ButtonContainer>
        )
    }
    {/*
        ATENÇÃO : mundança de código por conta própria ....
            O to deixando ser como no mod.35/4 (23:49)....

            <ButtonLink to={to as string} title={title}>
                {children}
            </ButtonLink>

/////////////Caso der erro voltar ao código acima////////////////

        */}
    return ( 
        <ButtonLink to={to || '#'} title={title}>
            {children}
        </ButtonLink>

    )
}
    

export default Button;