import { Link } from 'react-router-dom'
import pizza from '../../assets/image/pizzapng.png'
import Cartaz from '../Cartaz'
import { Adiciona, Botao, Card, Descricao, Pizza, Title } from './styles'

type Props = {
    title:string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
    number: number
}

const Italia = ( { 
    title,
    category,
    system,
    description, 
    infos, 
    image,
    number
    
}: Props) => (
    <Card>
        <div className='container'>
            <Pizza>
                    <img src={pizza} width={310}  height={260} alt="" />
            </Pizza>
            <Title>Pizza Marguerita</Title>
            <Descricao>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Descricao>            
            <Botao>
                <a href="#">
                    <Adiciona>Adicionar ao carrinho</Adiciona>
                </a>
            </Botao>
        </div>        
    </Card>
)

export default Italia