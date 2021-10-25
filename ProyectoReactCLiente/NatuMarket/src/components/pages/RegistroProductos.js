import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const RegistroProductos = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useForm();
	const onSubmit = async (datos) => {
		console.log(datos);
		const setCategoria = (categoria) => {
			if (categoria === 'Granos') {
				return '6164eb706d918f9a7ad24444';
			} else if (categoria === 'Verduras') {
				return '6163c011d7d066c04ac2bb59';
			} else if (categoria === 'Frutas') {
				return '6175fb52a711dcf029fa65bb';
			} else if (categoria === 'Productos lacteos') {
				return '6175fb6ca711dcf029fa65bc';
			} else if (categoria === 'Bebidas') {
				return '6176159ea711dcf029fa65c9';
			} else {
				return '6175fb87a711dcf029fa65bd';
			}
		};

		const setUnidad = (unidad) => {
			if (unidad === '500 gr') {
				return '6175fed0a711dcf029fa65c2';
			} else if (unidad === 'Kg') {
				return '6165cb30255654c1a93c1073';
			} else if (unidad === '500 ml') {
				return '6175fee4a711dcf029fa65c3';
			} else {
				return '6175fef5a711dcf029fa65c4';
			}
		};


		const respuesta = await axios.post(
			'http://localhost:4001/api/productos/crear',
			{
				categoria: setCategoria(datos.categoria),
				codigo: datos.codigo,
				descripcion: datos.descripcion,
				imagen: datos.imagen,
				stock: datos.stock,
				unidad: setUnidad(datos.unidad),
				precio_compra: datos.precio_compra,
				precio_venta: datos.precio_venta,
				estado: datos.estado,
			}
		);

		console.log(respuesta);
	};
	console.log(errors);

	const RegistroProductos = () => {
		return (
			<div className='page_content'>
				<div className='formulario'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div class='form-group'>
							<div class='row'>
								<div class='col-md-6'>
									<select {...register('categoria', {})}>
										<option value='Bebidas'>Bebidas</option>
										<option value='Granos'>Granos</option>
										<option value='Verduras'>Verduras</option>
										<option value='Frutas'>Frutas</option>
										<option value='Productos lacteos'>Productos lacteos</option>
										<option value='Proteinas'>Proteinas</option>
									</select>
								</div>
								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Código'
										{...register('codigo', {})}
									/>
								</div>
							</div>
						</div>
						<div class='form-group'>
							<div class='row'>
								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Descripción'
										{...register('descripcion', {})}
									/>
								</div>

								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Imagen'
										{...register('imagen', {})}
									/>
								</div>
							</div>
						</div>
						<div class='form-group'>
							<div class='row'>
								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Stock'
										{...register('stock', {})}
									/>
								</div>

								<div class='col-md-6'>
									<select {...register('unidad', {})}>
										<option value='500 gr'>500 gr</option>
										<option value='Kg'>Kg</option>
										<option value='500 ml'>500 ml</option>
										<option value='Litro'>Litro</option>
									</select>
								</div>
							</div>
						</div>
						<div class='form-group'>
							<div class='row'>
								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Precio de Compra'
										{...register('precio_compra', {})}
									/>
								</div>

								<div class='col-md-6'>
									<input
										type='text'
										placeholder='Precio de Venta'
										{...register('precio_venta', {})}
									/>
								</div>
							</div>
						</div>

						<div class='form-group'>
							<div class='row'>
								<div class='col-md-6'>
									<select {...register('estado', {})}>
										<option value='Disponible'>Disponible</option>
										<option value='No Disponible'>No Disponible</option>
									</select>
								</div>
							</div>
						</div>
						<input type='submit' className='btn btn-primary' />
						{/* <button class='btn btn-primary'>Registrar</button> */}
					</form>
				</div>
			</div>
		);
	};
};
export default RegistroProductos;
