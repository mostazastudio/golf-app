import React from 'react';

export const Radios = (props) => {

    const onChange = (e) =>{
        props.onChange(e);
    }


    return <div className="row" id="div_radios" onChange={onChange}>
        <h3 className="text-center">¿Cuanto fue la distancia?</h3>
        <div className="col-6">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="25" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">25</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="50" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    50
                </label>
            </div>
        </div>
        <div className="col-6">
            <div className="form-check" >
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="75" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    75
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="100" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    100
                </label>
            </div>
        </div>
    </div>
}
