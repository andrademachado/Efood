import Tag from "../Tag"
import estrela from '../../assets/image/Star-1 (2).png'
import Button from "../Button"
import { Card, Title, Titulo } from "./styles"

const Product = () => (
    <Card>
        <img src="//placehold.it/472x217" />
        <Tag size="big">Destaque da semana</Tag>
        <Tag size="small">Japonesa</Tag>
        <Title>
        <Titulo>Hioki Sushi </Titulo>
        <Titulo>4.9</Titulo>
        <img src={estrela} alt="Estrela" />
        </Title>
        <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
        <Button type="link" to="/produto" title="Clique aqui para saber mais">Saiba mais</Button>
    </Card>
)

export default Product