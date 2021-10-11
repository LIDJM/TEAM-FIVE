import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import LateralDatos from './LateralDatos';
import './BarraNavegacion.css';
import {IconContext} from 'react-icons/lib';

const BarraNavegacion = () => {
	const [lateral, setLateral] = useState(false);

	const showLateral = () => setLateral(!lateral);
	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<div className='barraNavegacion'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={showLateral} />
					</Link>
				</div>
				<nav className={lateral ? 'menu-nav active' : 'menu-nav'}>
					<ul className='menu-nav-items' onClick={showLateral}>
						<li className='barraNavegacion-toggle'>
							<Link to='#' className='menu-bars'>
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{LateralDatos.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
};

export default BarraNavegacion;
