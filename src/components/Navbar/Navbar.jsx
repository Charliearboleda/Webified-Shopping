import React from 'react'

import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/online-store.png'

import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()

    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='WebifiedShopping' height='25px' className={classes.image} />
                        WebifiedShopping
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label='show cart times' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>

            </AppBar>
        </div>
    )
}
export default Navbar
