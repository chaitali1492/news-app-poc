import { Grid, TextField, Button, Typography, Box } from "@mui/material";

const Register = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh", // Full viewport height
      }}
    >

<Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url('data:image/jpeg;base64,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')`, // Replace with your image path
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
      ></Grid>

      
   
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          backgroundColor: "#f5f5f5", // Light background for contrast
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px", // Ensures proper scaling
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
            Register
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField label="Full Name" variant="outlined" fullWidth required />
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ mt: 2, padding: "12px 0" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Grid>

     
      
    </Grid>
  );
};

export default Register;
