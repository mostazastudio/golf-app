import React, { useState } from 'react';



export const Switch = (props) => {

const onChange = (e) =>{
    props.checkboxOnChange(e);
}

    return <div className = "col-sm-10 col-md-6" >
        <div className="form-check form-switch form-switch-lg text-center">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.checkboxOnChange} />
        </div>
</div >
}