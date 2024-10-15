class Restaurante {
    category:string
    description: string
    image: string
    infos: string[]
    system: string
    title: string
    id:number
    number:number

    constructor (
        id: number,
        category: string,
        description: string,
        image: string,
        infos: string[],
        system: string,
        title: string,
        number:number        
    ) {
        this.id = id
        this.category = category
        this.description = description
        this.image = image
        this.infos = infos
        this.system = system
        this.title = title
        this.number = number
    }
}

export default Restaurante




