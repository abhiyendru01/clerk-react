import React from 'react';
import { SignIn } from '@clerk/clerk-react';
const Login = () => {
    return (<div>
      <h2>Login</h2>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"/>
    </div>);
};
export default Login;
