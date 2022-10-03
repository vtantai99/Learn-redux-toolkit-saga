import { Box, Button, createTheme, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useAppDispatch } from 'app/hooks';
import React, { useCallback } from 'react'
import { authAction } from '../authSlice';

interface Props { }

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  box: {
    padding: theme.spacing(3)
  }
});

const LoginPage = (props: Props) => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const handleLogin = useCallback(() => {
    dispatch(authAction.loginRequest({
      username: '',
      password: ''
    }))
  }, [dispatch])

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage