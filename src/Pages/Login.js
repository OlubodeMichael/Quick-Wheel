import React, { useState } from 'react';
import { SignIn } from '../Components/SignIn';
import { SignUp } from '../Components/SignUp';

export function Login() {
    const [account, setAccount] = useState(true);

    return (
        <div>
            {account ? <SignIn onClick={() => setAccount(false)} /> : <SignUp onClick={() => setAccount(true)} />}
        </div>
    );
}
