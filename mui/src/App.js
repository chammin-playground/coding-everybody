import React from "react";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function App() {
  return (
    <Container compononent="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          name="email"
          label="Email Address"
          autoComplete="email"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          required
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign UP</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
