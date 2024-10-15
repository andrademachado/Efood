import Restaurante from "../../models/Restaurante"
import Product from "../Product"
import { Container, List } from  './style'

type Props = {    
    background: 'branco'
    restaurantes: Restaurante[]
}

const ProductsList = ({ background, restaurantes }: Props) => (
    <Container>
        <div className="container">
        <List>
                {restaurantes.map(restaurante => (

                <Product    
                        key={restaurante.id}
                        category={restaurante.category}
                        description={restaurante.description}
                        image={restaurante.image}
                        infos={restaurante.infos}
                        system={restaurante.system}
                        title={restaurante.title}
                        number={restaurante.number}
                                
                />
                ))} 
        </List>
        </div>

    </Container>
)

export default ProductsList