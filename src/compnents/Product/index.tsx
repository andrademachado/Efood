import Tag from "../Tag"
import estrela from '../../assets/image/Star-1 (2).png'
import Button from "../Button"
import { Borda, Card, Descricao, Imagem, Infos, Numero,  Tema,  Titulo } from "./styles"

type Props = {
    title:string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
    number: number
}

const Product = ({ 
    title,
    category,
    system,
    description, 
    infos, 
    image,
    number

}: Props) => (
    <Card>
        <div className="container">
            <Imagem>
                <img src={image} width={472} height={217} alt="Hioki Sushi "/>
        
                <Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
                </Infos>            
            </Imagem>
            <Borda>

                <Tema>
                    <Titulo>{title} </Titulo>
                    
                <Numero>
                    {number} 
                    <img src={estrela} width={21}  height={21}  alt="Estrela" />
                </Numero>

                </Tema>
        <Descricao>{description}
            <br />
            <br />
        <Button type="link" to="/produto" title="Clique aqui para saber mais">Saiba mais</Button>
        </Descricao>
            </Borda>
        </div>

    </Card>
)

export default Product