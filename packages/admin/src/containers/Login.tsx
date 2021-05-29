import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import Snackbar from '@material-ui/core/Snackbar'

import { useLogin } from '../graphql/User'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    wrapper: {
        maxWidth: '600px',
        marginTop: '5%',
        padding: '20px',
    },
}))

export default function InputWithIcon() {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, data, loading, error } = useLogin()

    if (error) {
        return <div>Eoor</div>
    }

    const handleLogin = () => {
        try {
            mutate({
                variables: {
                    data: {
                        email,
                        password,
                    },
                },
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Grid container justify="center">
            <Card className={classes.wrapper}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2" align="center">
                        Login
                    </Typography>
                </CardContent>
                <TextField
                    className={classes.margin}
                    label="Email"
                    type="email"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    className={classes.margin}
                    label="Password"
                    type="password"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box display="flex" justifyContent="center" mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </Box>
            </Card>
        </Grid>
    )
}