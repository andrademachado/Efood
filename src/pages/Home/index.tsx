import Banner from "../../compnents/Banner"
import ProductsList from "../../compnents/ProductsList"
import Restaurante from "../../models/Restaurante"
import sushi from '../../assets/image/sushimi.png'
import espaguete from '../../assets/image/Espaguete.png'
import Cartaz from "../../compnents/Cartaz"
import Footer from "../../compnents/Footer"

const localComercial: Restaurante[] = [
    {
        id: 1,
        category:'Japoneas',
        description:"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: sushi,
        infos:['Destaque da semana','japonesa'],
        title:'Hioki Sushi ',
        system:'' ,
        number: 4.9,
    },
    {
        id: 2,
        category: 'italiana',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: espaguete,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 2,
        category: 'italiana',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: espaguete,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 2,
        category: 'italiana',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: espaguete,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 2,
        category: 'italiana',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: espaguete,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 2,
        category: 'italiana',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: espaguete,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    }
]

const Home =() => (
    <>
        <Banner />
        <ProductsList restaurantes={localComercial} background='branco' />
    </>
)

export default Home