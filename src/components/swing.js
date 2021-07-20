import React from 'react';

export const Swing = (props) => {

	return (
		props.swing.map(e => 
		<tr key={e.id}>
			<td>{e.id + 1}</td>
			<td>{e.golpe}</td>
			<td>{e.distancia}</td>
		</tr>
		)
		)
}
