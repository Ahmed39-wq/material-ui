import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  Stack,
  Box,
  Divider,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { MuiAccordion } from './MuiAccordion';

export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 250,
    margin: "140px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const buttonStyle = { backgroundColor: "#1bbd7e", margin: "8px 0" };
  return (
    <>
    <Paper sx={{ padding: '100px'}} elevation={5}>
      <Typography variant="h4" align="center">Paper is mostly used when designing input forms</Typography>
      <Grid>
        <Paper elevation={3} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter your username"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <Stack spacing={4} direction="row">
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember Me"
            />
          </Stack>
          <Button
            type="submit"
            color="primary"
            style={buttonStyle}
            variant="contained"
            fullWidth
            required
          >
            Sign In
          </Button>
          <Typography>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography>
            Don't have an account?
            <Link href="#">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>

      <Typography variant="h4" align="center" padding={4}>
        STACK is use for one dimensional layout
      </Typography>
      <Stack
        sx={{ border: "2px solid blue" }}
        // direction="column"
        display='flex'
        flexDirection='column'
        spacing={.5}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "error.main",
            width: "150px",
            height: "300px",
            padding: "20px",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          Let's practice Stack component
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "100px",
            width: "150px",
            backgroundColor: "success.main",
            padding: "20px",
            color: "#FFFFFF",
          }}
        >
          It's gonna be fun
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "300px",
            width: "150px",
            backgroundColor: "secondary.main",
            padding: "20px",
            color: "#FFFFFF",
          }}
        >
          This is really cool
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "100px",
            width: "150px",
            backgroundColor: "warning.main",
            padding: "20px",
            color: "#FFFFFF",
          }}
        >
          It ain't gonna easy
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "300px",
            width: "150px",
            backgroundColor: "primary.main",
            padding: "20px",
            color: "#FFFFFF",
          }}
        >
          Material UI is awesome
        </Box>
      </Stack>

      <Typography variant="h4" align="center" marginTop={8}>
        GRID is use for creating two dimensional layout like a CSS flexbox
      </Typography>
      <Grid container my={8} spacing={3}>
        <Grid item xs={12} sm={12} md={9} >
          <Box bgcolor="primary.light" p={2} textAlign='center'>
            Item A
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Box bgcolor="secondary.light" p={2} textAlign='center'>
            Item B
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}> 
          <Box bgcolor="warning.light" p={2} textAlign='center'>
            Item C
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Box bgcolor="error.light" p={2} textAlign='center'>
            Item D
          </Box>
        </Grid>
      </Grid>
      
      <Typography variant='h4' align="center">Cards contain content and actions about a single subject.</Typography>
      <Grid
      display='flex'
      justifyContent='center'
      alignItems='center'
      >
        <Box width='300px' my={5} display='flex' justifyContent='center' alignItems='center'>
          <Card align='center'>
            <CardMedia 
            component='img' 
            height='140' 
            image='https://source.unsplash.com/random'
            alt="unsplash"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" component='div' gutterBottom>Random Photo</Typography>
              <Typography variant="body2" color='text.secondary'>There are a lot of wonderful pictures on unsplash.com. You can check them out.</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <Button size='small'> Share</Button>
              <Button size='small'> Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>

      <Typography variant='h4' align="center">Accordions contain creation flows and allow lightweight editing of an element.</Typography>
    </Paper>
    {/* <MuiAccordion /> */}
    </>
  );
}
