import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/Authprovider';



const Login = () => {
    const{providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const[error, setError] = useState('');

    const{logIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const  location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const gitSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const googleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
          const user =result.user;
          console.log(user);
        })
        .catch(error => console.error(error))
      }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit}className="card-body w-96">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                        <span className='text-red-600'>{error}</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                        <span className='text-red-600'>{error}</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">New To This Site? Please Register</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                    <Link to="/"><button onClick={googleLogIn} className="btn btn-block mb-4 btn-success">Login With Google</button></Link>
                    <Link to="/"><button onClick={gitSignIn} className="btn btn-block btn-error">Login With GitHub</button></Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;