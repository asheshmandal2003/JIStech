import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  FormControl,
  OutlinedInput,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const Signin = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validations = yup.object({
    phoneNo: yup.string().max(10, "Invalid phone number").required(),
    password: yup
      .string()
      .min(8, "Your password must contain 8 characters!")
      .required("Password is required!"),
  });

  const formik = useFormik({
    initialValues: {
      phoneNo: "",
      password: "",
    },
    onSubmit: (values, onSubmitProps) => signin(values, onSubmitProps),
    validationSchema: validations,
  });

  async function signin(values, onSubmitProps) {
    const formdata = new FormData();
    for (let value in values) {
      if (value === "phoneNo") {
        formdata.append(value, "+91" + values[value]);
      } else {
        formdata.append(value, values[value]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signin",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(response.data);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }

    onSubmitProps.resetForm();
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 520,
        bgcolor: "#fff",
        p: 5,
        mx: "auto",
        mt: 5,
      }}
    >
      <Typography variant="h5" mb={3}>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="needs-validation"
        noValidate
        autoComplete="off"
        width="100%"
      >
        <Stack spacing={3} width="100%">
          {/* Phone Number */}
          <FormControl fullWidth>
            <InputLabel htmlFor="phoneNo">Phone No</InputLabel>
            <OutlinedInput
              id="phoneNo"
              type="text"
              label="Phone No"
              name="phoneNo"
              value={formik.values.phoneNo}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.phoneNo) &&
                Boolean(formik.errors.phoneNo)
              }
              helperText={
                Boolean(formik.touched.phoneNo) && formik.errors.phoneNo
              }
              InputProps={{
                startAdornment: <InputAdornment>+91</InputAdornment>,
              }}
            />
          </FormControl>

          {/* Password */}
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.password) &&
                Boolean(formik.errors.password)
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </Stack>
      </Box>
      <Typography mt={3}>
        Don't have an account?{" "}
        <Typography
          color="primary"
          onClick={() => navigate("/auth/signup")}
          sx={{ cursor: "pointer" }}
        >
          Sign Up
        </Typography>
      </Typography>
    </Card>
  );
};

export default Signin;
