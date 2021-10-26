import React from 'react';

const RegistroVentas = () => {
    return (
        <div className = 'page_content'>
            <div className='formulario'>
                <form action="" class="form-registro">
                    <form action="" class="">
                        <div class="IDV">
                            <h4>Vendedor: Carlos Madrigal </h4>
                            <h5>ID_vendedor: 12345</h5>
                            <h5>FECHA: 18-oct-2021</h5>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="ID_Item/Producto" />
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" placeholder="Descripción Item" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Cantidad" />
                                </div>

                                <div class="col-md-6">
                                    <h5>U.M.: kg</h5>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Valor Unitario" />
                                </div>
                                <div class="col-md-6">
                                    <h5>Valor Total: $1.725.452</h5>
                                </div>

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4">
                                    <select class="form-control" name="" id="">
                                        <option value="Codigo_Cliente_1">Codigo_Cliente_1</option>
                                        <option value="Codigo_Cliente_2">Codigo_Cliente_2</option>
                                        <option value="Codigo_Cliente_3">Codigo_Cliente_3</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control" name="" id="">
                                        <option value="71.779.399-9">71.779.399-9</option>
                                        <option value="898.741.454-1">898.741.454-1</option>
                                        <option value="921.451.985-9">921.451.985-9</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-primary">Registrar</button>
                        <h5>REGISTRO UNICO: 171425_015</h5>
                    </form>
                </form>
            </div>
        </div>
    );
};

export default RegistroVentas;
