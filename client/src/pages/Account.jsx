import { useState } from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Account = () => {
    const [isSigningIn, setIsSigningIn] = useState(true);

    const handleSignupLinkClick = () => {
        setIsSigningIn(false);
    };

    const handleSigninLinkClick = () => {
        setIsSigningIn(true);
    };

    return (
        <div className='mt-5'>
            {isSigningIn ? <Signin onSignupLinkClick={handleSignupLinkClick} /> : <Signup onSigninLinkClick={handleSigninLinkClick} />}
        </div>
    );
};

export default Account;