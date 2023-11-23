import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
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
    phoneNo: yup.string().max(10, "Invalid phone number").required(),
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
  }

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-md-6 col-sm-8">
            <div className="card shadow" style={{ margin: '2rem 0', padding: '3rem' }}>
              <div className="card-body" style={{ height: '60vh' }}>
                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                <form onSubmit={formik.handleSubmit}
                  className="needs-validation"
                  noValidate
                  autoComplete="off"
                >
                  {/* Name */}
                  <div className="row">
                    <div className="mb-4 col-md-6">
                      <input
                        id="firstName"
                        type="text"
                        className={`form-control ${formik.touched.firstName &&
                          formik.errors.firstName &&
                          "is-invalid"
                          }`}
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        required
                        autoFocus
                        placeholder="First Name"
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="invalid-feedback">
                          {formik.errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        id="lastName"
                        type="text"
                        className={`form-control ${formik.touched.lastName &&
                          formik.errors.lastName &&
                          "is-invalid"
                          }`}
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        required
                        placeholder="Last Name"
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="invalid-feedback">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      id="location"
                      type="text"
                      className={`form-control ${formik.touched.location &&
                        formik.errors.location &&
                        "is-invalid"
                        }`}
                      name="location"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      required
                      placeholder="Location"

                    />
                    {formik.touched.location && formik.errors.location && (
                      <div className="invalid-feedback">
                        {formik.errors.location}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        +91
                      </span>
                      <input
                        id="phoneNo"
                        type="text"
                        className={`form-control ${formik.touched.phoneNo &&
                          formik.errors.phoneNo &&
                          "is-invalid"
                          }`}
                        name="phoneNo"
                        value={formik.values.phoneNo}
                        onChange={formik.handleChange}
                        required
                        placeholder="Phone Number"

                      />
                    </div>
                    {formik.touched.phoneNo && formik.errors.phoneNo && (
                      <div className="invalid-feedback">
                        {formik.errors.phoneNo}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      id="password"
                      type="password"
                      className={`form-control ${formik.touched.password &&
                        formik.errors.password &&
                        "is-invalid"
                        }`}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                      placeholder="Password"

                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <p className="form-text text-muted mb-3">
                    By registering you agree with our terms and condition.
                  </p>

                  <div className="align-items-center d-flex">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-4 border-0">
                <div className="text-center">
                  Already have an account?{" "}
                  <a
                    onClick={() => navigate("/auth/signin")}
                    className="text-dark"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Signup.propTypes = {
//   onSigninLinkClick: PropTypes.func.isRequired,
// };

export default Signup;
