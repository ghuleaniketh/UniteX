import { useEffect, useState } from 'react';
import './login.css'
export const Login = () => {
    return (
        <div className="login">
            <form className="login-form">
                <img src='/images/logo2.png' alt='UniteX Logo' className="logo" />
                <h3>Wel-Come</h3>
                <p>Sign in to continue your journey</p>
                
                <div className='google-signin'>
                    <img src="/images/google-img.png" alt="google"  className='google-img' />
                    <p>Sign Up with Google</p>
                    
                </div>
                <hr className="simple-line" />
                <p className='policy'>By signing in, you agree to our Terms of Service and Privacy Policy</p>
            </form>
        </div>
    );
};