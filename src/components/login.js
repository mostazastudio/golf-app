import React from 'react'
import "./login.css";
import { useAuth0 } from '@auth0/auth0-react';


export const Login = (props) => {

    const { loginWithRedirect } = useAuth0();

    return <div>
        <div className="row" id="login-title">
            <div className="col">
                <h1 className="text-center">Login</h1>
            </div>
        </div>
        <div className="row" id="login-form">
            <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="d-grid gap-2">
                        <button onClick={()=> loginWithRedirect()} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}