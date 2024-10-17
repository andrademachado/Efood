import { HeaderBar, Imagem, Item, Title } from "./styles"
import logo from '../../assets/image/logo (1).png'


const Header = () => 
    <HeaderBar>
        <div className="container">
        </div>
        <Item>
        <a href="#">
            <Title>Restaureantes</Title>
        </a>
            <Imagem src={logo} width="125" height="56" alt="EFOOD" />
        <a href="#">
            <Title>
            0 - produto(s)
            </Title>
        </a>
        </Item>
    </HeaderBar>
export default Header