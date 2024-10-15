import ProductsList from "../../compnents/ProductsList"
import Restaurante from "../../models/Restaurante"
import sushi from '../../assets/image/sushimi.png'
import espaguete from '../../assets/image/Espaguete.png'
import comercioAlemao from '../../assets/image/alemao.jpg'
import lojaArabe from '../../assets/image/Arabe.jpg'
import mexicano from '../../assets/image/mexicano.jpg'
import frances from '../../assets/image/Frances.jpg'
import Header from "../../compnents/Header"


const produto: Restaurante[] = [
    {
        id: 1,
        category:'Japoneas',
        description:"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        image: sushi,
        infos:['japonesa'],
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
        id: 3,
        category: 'alema',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: comercioAlemao,
        infos: ['alemã'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 4,
        category: 'arabe',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: lojaArabe,
        infos: ['árabe'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 5,
        category: 'mexicano',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: mexicano,
        infos: ['mexicano'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    },
    {
        id: 6,
        category: 'frances',
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: frances,
        infos: ['frances'],
        title: 'La Dolce Vita Trattoria ',
        system: '',
        number: 4.6,
    }
    

]





const Categories =() => (
    <>
        <Header />
        <ProductsList restaurantes={produto} background='branco' />
        <ProductsList restaurantes={produto} background='branco' />
    </>
)

export default Categories