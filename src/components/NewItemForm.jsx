import { Button, Grid, TextField, Box, Checkbox, Typography } from "@mui/material";

function NewItemForm() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        maxWidth: 600, // largura máxima para centralizar melhor
        margin: '0 auto' // Centraliza o container horizontalmente
      }}
    >
      <Box sx={{ mb: 3,
         backgroundColor: '#681268',
         borderRadius: 10,
         
       }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#1e88e5"
        >
          <path d="M240-160v-400 400-15 15Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v164q-11-2-21-3t-21-1q-10 0-19.5 1t-18.5 3v-164H240v400h324q5 23 14 43t23 37H240Zm520 0q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l74-83 74 83q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Z" />
        </svg>
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name *" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name *" variant="outlined" />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, width: '100%' }}>
        <TextField fullWidth label="Email Address *" variant="outlined" />
      </Box>
      <Box sx={{ mt: 2, width: '100%' }}>
        <TextField fullWidth label="Password *" type="password" variant="outlined" />
      </Box>
      <Box sx={{ mt: 2, width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox />
        <Typography variant="body2" component="span" sx={{ ml: 2 }}>
          I want to receive inspiration, marketing <br /> promotions, and updates via email.
        </Typography>
      </Box>
      <Box sx={{ mt: 3, width: '100%' }}>
        <Button variant="contained" size="large" fullWidth>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default NewItemForm;


