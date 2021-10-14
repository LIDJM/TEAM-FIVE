import React from 'react';
import './Tabla.css';

const Tabla = (props) => {
	return (
		<>
			<div className='table-responsive'>
				<div className='table-wrapper'>
					<tabla className='table table-striped table-hover'>
						<thead>
							<tr>{props.DatosCabecera}</tr>
						</thead>
						<tbody>
							<tr>{props.DatosCuerpo}</tr>
						</tbody>
					</tabla>
				</div>
			</div>
		</>
	);
};

export default Tabla;
