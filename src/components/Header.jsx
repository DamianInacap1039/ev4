import React, { Fragment } from "react";

export const Header1 =()=> {
    return(
        <Fragment>
            <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">SGP Deluxe</span>
      </a>

      <ul className="nav nav-pills">
      <button type="button" class="btn btn-outline-warning">Resumen de gastos</button>
      <button type="button" class="btn btn-outline-warning">Soporte</button>
 
      </ul>
    </header>
  </div>
        </Fragment>
    )
}