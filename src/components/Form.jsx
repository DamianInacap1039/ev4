import React, { Fragment } from "react";
import logo from './imgs/Billetes.jpg'


export const  Form1 =()=> {
    return(
        <Fragment>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold text-body-emphasis">Gestion de pagos</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">En el siguiente formulario se pedira la confirmacion de datos ya sea un presupuesto mensual,detalle de gastos descripcion,etc. </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      </div>
    </div>
    <div className="overflow-hidden" >
      <div className="container px-5">
      <img src={logo}className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
      </div>
    </div>
  </div>
  
        </Fragment>
    )
}


