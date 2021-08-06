import React from 'react'
import "./registro.css";


export const Registro = (props) => {
    return <div>
        <div className="row" id="registro-title">
            <div className="col">
                <h1 className="text-center">Registro</h1>
            </div>
        </div>
        <div className="row" id="registro-form">
            <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Cellphone</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="cellphoneHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}