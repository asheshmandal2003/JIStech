import PropTypes from 'prop-types';
const Signin = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate
                                    autoComplete="off"
                                >
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">
                                            E-Mail Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value=""
                                            required
                                            autoFocus
                                        />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">
                                                Password
                                            </label>
                                            <a href="forgot.html" className="float-end">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
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
                                    Do not have an account?{' '}
                                    <a href="#" onClick={props.onSignupLinkClick} className="text-dark">
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

Signin.propTypes = {
    onSignupLinkClick: PropTypes.func.isRequired,
};

export default Signin;
