import {
  Button,
  CircularProgress,
  Fade,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import useStyles from "../styles";
import google from "../../../images/google.svg";
import { useSelector } from "react-redux";

export default function LoginComponent() {
  var classes = useStyles();
  const { isLoading, error } = useSelector((state) => state.user);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      identifier: "rampritsahani@gmail.com",
      password: "Ramprit@1234",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <Typography variant="h1" className={classes.greeting}>
        Good Morning, User
      </Typography>
      <Button size="large" className={classes.googleButton}>
        <img src={google} alt="google" className={classes.googleIcon} />
        &nbsp;Sign in with Google
      </Button>
      <div className={classes.formDividerContainer}>
        <div className={classes.formDivider} />
        <Typography className={classes.formDividerWord}>or</Typography>
        <div className={classes.formDivider} />
      </div>
      <Fade in={!!error}>
        <Typography color="secondary" className={classes.errorMessage}>
          Something is wrong with your login or password :(
        </Typography>
      </Fade>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="identifier"
          error={!!errors.identifier}
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          inputRef={register({ required: true })}
          margin="normal"
          placeholder="Email Adress"
          type="email"
          fullWidth
        />
        <TextField
          name="password"
          error={!!errors.password}
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          inputRef={register({ required: true })}
          margin="normal"
          placeholder="Password"
          type="password"
          fullWidth
        />
        <div className={classes.formButtons}>
          {isLoading ? (
            <CircularProgress size={26} className={classes.loginLoader} />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          )}
          <Button color="primary" size="large" className={classes.forgetButton}>
            Forget Password
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
