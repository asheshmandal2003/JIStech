import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = ({ setUser }) => {
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
      if (value == "phoneNo") {
        formdata.append(value, "+91" + values[value]);
      } else {
        formdata.append(value, values[value]);
      }
    }
    await axios({
      method: "POST",
      url: "http://localhost:8080/auth/signin",
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
        <div className="row justify-content-sm-center h-100 mt-5">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-4 mt-3">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form
                  onSubmit={formik.handleSubmit}
                  className="needs-validation"
                  noValidate
                  autoComplete="off"
                >
                  {/* Email */}
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="phoneNo">
                      Phone No
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        +91
                      </span>
                      <input
                        id="phoneNo"
                        type="text"
                        className={`form-control ${
                          formik.touched.phoneNo &&
                          formik.errors.phoneNo &&
                          "is-invalid"
                        }`}
                        name="phoneNo"
                        value={formik.values.phoneNo}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                    {formik.touched.phoneNo && formik.errors.phoneNo && (
                      <div className="invalid-feedback">
                        {formik.errors.phoneNo}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className={`form-control ${
                        formik.touched.password &&
                        formik.errors.password &&
                        "is-invalid"
                      }`}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  {/* Remember Me and Login Button */}
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="form-check-input"
                      />
                      <label htmlFor="remember" className="form-check-label">
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Do not have an account?{" "}
                  <a
                    onClick={() => navigate("/auth/signup")}
                    className="text-dark"
                  >
                    Create One
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

export default Signin;
