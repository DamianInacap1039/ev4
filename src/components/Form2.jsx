import React, { Fragment } from "react";



export const Form2 = () => {
    return (
        <Fragment>
         <div className="text-center">
      <div className="form-floating mb-3 ">
        <input type="Number" center className="form-control " style={{ width: '400px', height: '30px'}} id="floatingInputDisabled" placeholder="200.000"/>
        <label htmlFor="floatingInputDisabled">Monto</label>
      </div>

      <div className="form-floating mb-3">
        <input type="date" className="form-control" style={{ width: '200px', height: '30px'}} id="floatingInputDisabled" placeholder="20/06/2002"/>
        <label htmlFor="floatingInputDisabled">Fecha</label>
      </div>


      <div className="form-floating mb-3">
        <input type="text" className="form-control" style={{ width: '400px', height: '30px'}} id="floatingInputDisabled" placeholder="Breve informacion"/>
        <label htmlFor="floatingInputDisabled">Descripcion</label>
      </div>


      <div className="form-floating">
        <select className="form-select" style={{width: '200px', height: '30px'}} id="floatingSelectDisabled" aria-label="Floating label disabled select example" >
          <option selected>Categoria</option>
          <option value="1">Emergencia</option>
          <option value="2">Salud</option>
          <option value="3">Higiene</option>
          <option value="4">Comida</option>
          <option value="5">Entretencion</option>
          <option value="6">Otro</option>
        </select>
        <label htmlFor="floatingSelectDisabled">Works with selects</label>
      </div>
      <br />
      <button type="button" class="btn btn-outline-success">Guardar</button>
    </div>

        </Fragment>
    )
}