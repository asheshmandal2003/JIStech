import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Card, Input } from "@mui/joy";
import {
  Alert,
  FormControl,
  OutlinedInput,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
  Stack,
  IconButton,
  Typography,
  Modal,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const Signup = ({ setUser }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [verified, setVerified] = useState("notApproved");
  const navigate = useNavigate();
  const validations = yup.object({
    firstName: yup
      .string()
      .min(2, "firstname must contain minimum 2 characters!")
      .max(30, "Your firstname must contain 30 characters or less!")
      .required("Firstname is required!"),
    lastName: yup
      .string()
      .min(2, "Lastname must contain minimum 2 characters!")
      .max(30, "Your lastname must contain 30 characters or less!")
      .required("Lastname is required!"),
    location: yup
      .string()
      .max(50, "Your location must contain 50 characters or less!")
      .required("Location is required!"),
    phoneNo: yup
      .string()
      .min(10, "Invalid phone number")
      .max(10, "Invalid phone number")
      .required("Phone No is required!"),
    password: yup
      .string()
      .min(8, "Your password must contain 8 characters!")
      .required("Password is required!"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      location: "",
      phoneNo: "",
      password: "",
    },
    onSubmit: (values, onSubmitProps) => signup(values, onSubmitProps),
    validationSchema: validations,
  });
  async function signup(values, onSubmitProps) {
    if (verified === "approved") {
      const formdata = new FormData();
      for (let value in values) {
        formdata.append(value, values[value]);
      }
      await axios({
        method: "POST",
        url: "http://localhost:8080/auth/signup",
        data: formdata,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setUser(res.data);
          navigate("/");
        })
        .catch((err) => console.log(err.message));
      onSubmitProps.resetForm();
    } else {
      alert("Please verify your mobile no!");
    }
  }

  async function sendOTP() {
    handleOpen();
    const formdata = new FormData();
    formdata.append("phoneNo", "+91" + formik.values.phoneNo);
    await axios({
      method: "POST",
      url: "http://localhost:8080/send-otp",
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => err.message);
  }
  const [otp, setOtp] = useState(null);
  const [display, setDisplay] = useState(true);
  const handleOTPChange = (event) => {
    setOtp(event.target.value);
  };
  async function verifyOTP() {
    const formdata = new FormData();
    formdata.append("phoneNo", "+91" + formik.values.phoneNo);
    formdata.append("otp", otp);
    await axios({
      method: "POST",
      url: "http://localhost:8080/verify-otp",
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setVerified(res.data);
        setDisplay(!display);
        handleClose();
      })
      .catch((err) => console.log(err.message));
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickBtn = () => setShowBtn(!showBtn);
  const style = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#212121",
    border: "2px solid #000",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          width: 520,
          bgcolor: "#fff",
          p: 5,
        }}
      >
        <Typography variant="h5" mb={5}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} autoComplete="off">
          <Stack spacing={5}>
            {/* Name */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <FormControl>
                <InputLabel htmlFor="firstName">Firstname</InputLabel>
                <OutlinedInput
                  id="firstName"
                  type="text"
                  label="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.touched.firstName) &&
                    Boolean(formik.errors.firstName)
                  }
                  autoFocus
                />
                <Typography
                  color="error"
                  mt={1}
                  variant="caption"
                  align="start"
                >
                  {Boolean(formik.touched.firstName) && formik.errors.firstName}
                </Typography>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="lastName">Lastname</InputLabel>
                <OutlinedInput
                  id="lastName"
                  label="Lastname"
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.lastName) &&
                    Boolean(formik.touched.lastName)
                  }
                />
                <Typography
                  color="error"
                  mt={1}
                  variant="caption"
                  align="start"
                >
                  {Boolean(formik.touched.lastName) && formik.errors.lastName}
                </Typography>
              </FormControl>
            </Box>

            <FormControl fullWidth>
              <InputLabel htmlFor="location">Location</InputLabel>
              <OutlinedInput
                id="location"
                type="text"
                label="Location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.location) &&
                  Boolean(formik.touched.location)
                }
              />
              <Typography color="error" mt={1} variant="caption" align="start">
                {Boolean(formik.touched.location) && formik.errors.location}
              </Typography>
            </FormControl>

            {/* Email */}
            <Box>
              <TextField
                fullWidth
                id="phoneNo"
                type="text"
                label="Phone No"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onClick={handleClickBtn}
                error={
                  Boolean(formik.errors.phoneNo) &&
                  Boolean(formik.touched.phoneNo)
                }
                helperText={
                  Boolean(formik.touched.phoneNo) && formik.errors.phoneNo
                }
                InputProps={{
                  startAdornment: <InputAdornment>+91</InputAdornment>,
                }}
              />
              {showBtn && (
                <Button
                  variant="contained"
                  onClick={sendOTP}
                  sx={{ mt: 3, display: display ? null : "none" }}
                >
                  Verify
                </Button>
              )}
            </Box>

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
                  Boolean(formik.errors.password) &&
                  Boolean(formik.touched.password)
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
              <Typography color="error" mt={1} variant="caption" align="start">
                {Boolean(formik.touched.password) && formik.errors.password}
              </Typography>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              onClick={signup}
              variant="contained"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
        <Typography sx={{ display: "flex", my: 4 }}>
          Already have an account?{" "}
          <Typography
            color="primary"
            onClick={() => navigate("/auth/signin")}
            sx={{ cursor: "pointer" }}
          >
            Sign In
          </Typography>
        </Typography>
      </Card>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h5" mb={2}>
            Verify OTP
          </Typography>
          <Typography variant="subtitle-2" mb={4}>
            Enter your OTP here
          </Typography>
          <Input
            placeholder="Enter your 6 digits OTP"
            name="otp"
            value={otp}
            onChange={handleOTPChange}
            variant="solid"
            fullWidth
          />
          {verified === "approved" && (
            <Alert severity="success">Phone no verified successfully!</Alert>
          )}
          <Button
            color="success"
            variant="contained"
            onClick={verifyOTP}
            fullWidth
            sx={{ mt: 3 }}
          >
            Verify
          </Button>
          <Button
            color="warning"
            variant="contained"
            onClick={sendOTP}
            fullWidth
            sx={{ mt: 3 }}
          >
            Resend OTP
          </Button>
        </Box>
      </Modal>
    </>
  );
};

// Signup.propTypes = {
//   onSigninLinkClick: PropTypes.func.isRequired,
// };

export default Signup;
