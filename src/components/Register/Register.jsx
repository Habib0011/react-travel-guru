import React, { useContext } from 'react';
import Navbar from '../Home/Navbar';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { register } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        register(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className='contaainer'>
            <Navbar></Navbar>
            <div className="hero min-h-screen">

                <div className="hero-content
             flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"
                                    name='email'
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;