"use client"
import {
  Container,
  Grid,
  Card,
  Avatar,
  Icon,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import React from "react";
import useStyles from "../themes/useStyles";

const RegisterUser = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justifyContent="center">
        <Grid item lg={6} md={8} className="justify-items-center items-center content-center justify-center text-center">
          <Card className={` ${classes.card}`}>
            <div className="grid place-content-center">
              <Avatar className={`${classes.avatar}`}>
                <Icon className={classes.icon}>person_add</Icon>
              </Avatar>
            </div>
            <Typography variant="h5" color="primary">
              Registro de Usuario
            </Typography>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12} className={classes.gridmb}>
                  <TextField label="Nombre" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={6} xs={12} className={classes.gridmb}>
                  <TextField label="Apellido" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item md={12} xs={12} className={classes.gridmb}>
                <Button variant="contained" fullWidth color="primary">
                  Registar
                </Button>
              </Grid>
              <Link href="/" variant="body1" className={classes.link}>
                ¿Ya tienes una cuenta?, Logueate
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterUser;
