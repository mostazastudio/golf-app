import React from 'react';
import "./card.css";

export const Card = (props) => {
		return <div className="row justify-content-center tarjeta">
			<div className="card col-10">
				<div className="card-body">
					<h4 className="text-center">{props.name}</h4>
					<p className="text-center tarjeta-dato">{props.data}</p>
				</div>
			</div>
		</div>
		
	};
