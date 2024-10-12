import { Texto, Topo } from "./styles"
import logo from '../../assets/image/logo (1).png'

const Banner = () => (
    <Topo>
        <img src={logo}alt="Efood" />
        <Texto>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
        </Texto>
    </Topo>

)

export default Banner