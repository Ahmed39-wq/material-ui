import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Login() {
  const paperStyle = {padding: 20, height : '50vh', width :250, margin:'140px auto'}
  const avatarStyle = {backgroundColor: '#1bbd7e'}
  const buttonStyle = {backgroundColor: '#1bbd7e', margin:'8px 0'}
  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter your username' variant="standard" fullWidth required/>
        <TextField label='Password' placeholder='Enter your password' type='password' variant="standard" fullWidth required/>
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember Me"
        />
        <Button type='submit' color='primary' style={buttonStyle} variant='contained' fullWidth required>Sign In</Button>
        <Typography>
          <Link href="#">
              Forgot Password?
          </Link>
        </Typography>
        <Typography>
            Don't have an account?
          <Link href="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}
