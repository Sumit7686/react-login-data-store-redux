import React from "react";

// @mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// styles
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";

// formik
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
    "&:hover": {
      color: "#2e7d32",
    },
  },
});

function SignIn() {
  let navigate = useNavigate();

  const reduxData = useSelector((state) => state.userData);

  const classes = useStyles();

  const signInvalidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const checkCrediantials = (values) => {
    if (reduxData.length > 0) {
      for (let i = 0; i < reduxData.length; i++) {
        if (reduxData[i].email === values.email) {
          if (reduxData[i].password === values.password) {
            navigate("/");
            return console.log("login.");
          } else {
            return console.log("password wrong.");
          }
        } else {
          console.log("email wrong.");
        }
      }
    } else {
      console.log("Not register your email id.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 3 }}>
      <Grid
        sx={{
          borderRadius: "25px",
          p: 2,
          boxShadow: 5,
        }}
      >
        <Typography variant="h4" align="center" sx={{ m: 1 }}>
          Sign-In
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInvalidation}
          onSubmit={(values) => {
            // console.log("values :::", values);
            checkCrediantials(values);
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="E-mail"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                  />
                  {errors.email && touched.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="password"
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                  />
                  {errors.password && touched.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} align="center">
                  <Button
                    type="submit"
                    sx={{ width: 200, m: 3 }}
                    variant="contained"
                    color="success"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Typography
          align="center"
          sx={{ m: 1 }}
          onClick={() => navigate("/sign-up")}
          className={classes.link}
        >
          Create New Account
        </Typography>
      </Grid>
    </Container>
  );
}

export default SignIn;
