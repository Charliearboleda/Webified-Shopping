import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product.jsx'

import useStyles from './styles'

const products = [
    {id:1, name: 'Air Jordan 10', description:'Sneakers', price:'$250.00', image: 'https://i.imgur.com/1E257vD.jpg'},
    {id:2, name:'MacBook', description:'Apple Computer MacBook', price:'$1250.00', image:'https://i.imgur.com/J8nlWW7.jpg'}, {
        id: 3, name:'LogiTech X Pro', description:'Best Wired Headset for Ultra Surround sound', price:'$250.00', image:'https://i.imgur.com/PgHET2C.jpg'
    }, {
        id: 4, name:'RTX 3080', description:'The latest high powered graphics card', price:'$800.00', image:'https://i.imgur.com/jVht7jp.jpg'
    }
]

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))}
            </Grid>
        </main>
    )
}

export default Products
