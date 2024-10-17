import ProductsList from "../../compnents/ProductsList"
import Restaurante from "../../models/Restaurante"
import sushi from '../../assets/image/sushimi.png'
import pizza from '../../assets/image/pizzapng.png'
import Header from "../../compnents/Header"
import ItaliaList from "../../compnents/ItaliaList"
import Cartaz from "../../compnents/Cartaz"


const japonesa: Restaurante[] = [
    {
        id: 1,
        category:'Japoneas',
        description:"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: sushi,
        infos:['japonesa'],
        title:'Hioki Sushi ',
        system:'' ,
        number: 4.9,
    }
]

const italiana: Restaurante[] = [
    {
        id: 2,
        category: 'italiana',
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: pizza,
        infos: ['italiana'],
        title: 'Hioki Sushi ',
        system: '',
        number: 4.9,
    },
    {
        id: 2,
        category: 'italiana',
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: pizza,
        infos: ['italiana'],
        title: 'Hioki Sushi ',
        system: '',
        number: 4.9,
    }, {
        id: 2,
        category: 'italiana',
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: pizza,
        infos: ['italiana'],
        title: 'Hioki Sushi ',
        system: '',
        number: 4.9,
    }
]




const Estabelecimento =() => (
    <>
        <Header />
        <Cartaz />
        <ItaliaList restaurantes={italiana} background='branco' />
        <ItaliaList restaurantes={italiana} background='branco' />
    </>
)

export default Estabelecimento