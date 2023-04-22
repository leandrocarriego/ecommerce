const products = [
    {
        id: '1',
        name: 'guitarra',
        price: 1000,
        stock: 25,
        descripcion: 'una gran guitarra'
    },
    {
        id: '2',
        name: 'piano',
        price: 2000,
        stock: 10,
        descripcion: 'un gran piano'
    },
    {
        id: '3',
        name: 'saxofon',
        price: 3000,
        stock: 5,
        descripcion: 'un gran saxo'
    }
]

export const getProducts = () => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve(products)
            },1500)
        }
    )
}

export const getProductsById = (id) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                products.map(product => {
                    product.id == id && resolve(product)
                })
                
            },1500)
        }
    )
}