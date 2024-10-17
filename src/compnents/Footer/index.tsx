import { Container, Face, Insta, Logo, Redes, Texto, Title } from "./styles"
import logo from '../../assets/image/logo (1).png'
import insta from '../../assets/image/Instagran.png'
import face from '../../assets/image/Facebook.png'
import twitter from '../../assets/image/twitter.png'

const Footer = () => (
    <Container>
        <div className="container">
            <Logo>
                <img src={logo} alt="logo do Efood" />
            </Logo>
            <Redes>
                <Insta href="#">
                    <img src={insta} alt="logo do instagran" />                    
                </Insta>
                <Face href="#">
                    <img src={face } alt="logo do Facebook" />
                </Face>
                <a href="#">
                    <img src={twitter} alt="logo do twitter" />
                </a>
            </Redes>
            <Texto>
                <h5>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade</h5>
                <Title>dos produtos é toda do estabelecimento contratado.</Title>
            </Texto>
        </div>
    </Container>
)

export default Footer