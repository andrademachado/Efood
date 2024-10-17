import Restaurante from "../../models/Restaurante"
import Italia from "../Italia"
import { Container, List } from  './style'

type Props = {    
    background: 'branco'
    restaurantes: Restaurante[]
}

const ItaliaList = ({ background, restaurantes }: Props) => (
    <Container>
        <div className="container">
        <List>
                {restaurantes.map(restaurante => (

                <Italia   
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

export default ItaliaList