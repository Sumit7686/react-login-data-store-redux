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

import addUser from "../Actions/SignUpAction";

import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
    "&:hover": {
      color: "#2e7d32",
    },
  },
});

function SignUp(props) {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const classes = useStyles();

  const signInvalidation = Yup.object().shape({
    userName: Yup.string().min(5, "Min 5 allow").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const storeDataInRedux = (values) => {
    dispatch(addUser(values));
    navigate('/sign-in');
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
          Sign-Up
        </Typography>

        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
          }}
          validationSchema={signInvalidation}
          onSubmit={(values) => {
            // console.log("values :::", values);
            storeDataInRedux(values);
          }}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="userName"
                    name="userName"
                    label="User Name"
                    value={values.userName}
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                  />
                  {errors.userName && touched.userName && (
                    <div style={{ color: "red" }}>{errors.userName}</div>
                  )}
                </Grid>
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
          onClick={() => navigate("/sign-in")}
          className={classes.link}
        >
          Sign In
        </Typography>
      </Grid>
    </Container>
  );
}

export default SignUp;
