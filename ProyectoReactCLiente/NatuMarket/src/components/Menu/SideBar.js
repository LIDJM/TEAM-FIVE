import React, {useState} from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import LateralDatos from '../Datos/LateralDatos';

const SideBar = () => {
	const [lateral, setLateral] = useState(true);

	const showLateral = () => setLateral(!lateral);

	return (
		<>
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
		</>
	);
};

export default SideBar;
