import { useState } from 'react';
import PropTypes from 'prop-types';

const Signup = (props) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        
        console.log('Form submitted:', { name, email, password });

        setNameError('');
        setEmailError('');
        setPasswordError('');
        if (name === '') {
            setNameError('Name is required');
        }

        if (email === '') {
            setEmailError('Email is required');
        } else if (!isValidEmail(email)) {
            setEmailError('Email is invalid');
        }

        if (password === '') {
            setPasswordError('Password is required');
        }
    };

    const isValidEmail = (email) => {
        
        return email.includes('@');
    };

    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate
                                    autoComplete="off"
                                >
                                    {/* Name */}
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={`form-control ${nameError && 'is-invalid'}`}
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                        {nameError && (
                                            <div className="invalid-feedback">{nameError}</div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">
                                            E-Mail Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className={`form-control ${emailError && 'is-invalid'}`}
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        {emailError && (
                                            <div className="invalid-feedback">{emailError}</div>
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
                                            className={`form-control ${passwordError && 'is-invalid'}`}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        {passwordError && (
                                            <div className="invalid-feedback">{passwordError}</div>
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
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Already have an account?{' '}
                                    <a href="#" onClick={props.onSigninLinkClick} className="text-dark">
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

Signup.propTypes = {
    onSigninLinkClick: PropTypes.func.isRequired,
};

export default Signup;
