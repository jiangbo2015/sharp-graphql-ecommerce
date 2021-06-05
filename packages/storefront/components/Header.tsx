import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    MenuItem,
    Typography,
    Badge,
    IconButton,
} from '@material-ui/core'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import AccountCircle from '@material-ui/icons/AccountCircle'

export default function MenuAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Share Graphql Ecommerce</Typography>
                <Box
                    flexGrow="1"
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                >
                    <MenuItem>Products</MenuItem>
                    <MenuItem>Collections</MenuItem>
                    <MenuItem>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </MenuItem>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
