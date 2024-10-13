import Product from "../Product"
import { Container, List } from  './style'

type Props = {
    
    background: 'branco'
}

const ProductsList = ({ background }: Props) => (
    <Container>
        <div className="container">
        <List>
            <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

        </List>
        </div>

    </Container>
)

export default ProductsList