import Tag from "../Tag"
import estrela from '../../assets/image/Star-1 (2).png'
import Button from "../Button"
import { Borda, Card, Descricao, Imagem, Numero, Targeta, Titulo } from "./styles"

const Product = () => (
    <Card>
        <div className="container">
            <Imagem>
        <img src="//placehold.it/472x217" />
            <Targeta>
        <Tag size="big">Destaque da semana</Tag>
        <Tag size="small">Japonesa</Tag>
            </Targeta>
            </Imagem>
            <Borda>

        <Titulo>
        <h2>Hioki Sushi </h2>
                <Numero>4.9 </Numero>
        <img src={estrela} width={21}  height={21}  alt="Estrela" />

        </Titulo>
        <Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
            <br />
            <br />
        <Button type="link" to="/produto" title="Clique aqui para saber mais">Saiba mais</Button>
        </Descricao>
            </Borda>

        </div>
    </Card>
)

export default Product