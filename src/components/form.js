import React, { useState } from 'react';
import "./form.css";
import { Switch } from './switch';
import { Radios } from './radios';

export const Form = (props) => {

	const [golpe, setGolpe] = useState("malo");
	const [distancia, setDistancia] = useState(" ");

	const onSubmit = async (e) => {
		await props.addSwing(golpe, distancia);
		console.log(golpe);
		console.log(distancia);
		clearForm();
		e.preventDefault();
	};

	const clearForm = () => {
		document.getElementById("form-swing").reset();
		document.getElementById("flexSwitchCheckDefault").checked = false;
		setGolpe("malo");
		setDistancia(" ");
	}

	const onChange = (e) => {
		setDistancia(e.target.value);
	};

	const checkboxOnChange = (e) => {
		var value = e.target.checked;
		console.log(value);
		if (value === true) {
			setGolpe("bueno");
		} else {
			setGolpe("malo");
		};

	};

	var radios = null;

	if (golpe === "bueno"){
		var radios = <Radios onChange={onChange}/>
	}

	return <form onSubmit={onSubmit} id="form-swing">
		<div className="row justify-content-center" id="div_switch">
			<h3 className="text-center">¿Fue un buen golpe?</h3>
			<Switch checkboxOnChange={checkboxOnChange} />
			{radios}
			<div className="row justify-content-center" id="div_boton">
				<div className="col-10 d-grid gap-2">
					<button type="submit" className="btn btn-success">Registrar Swing</button>
				</div>
			</div>
		</div></form>


}