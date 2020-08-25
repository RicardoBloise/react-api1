import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Datos de Sitios Portuarios</h1>
      </center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <span>ID: {contact.ID_TERMINAL} </span>
              <span>TERMINAL: {contact.SHORT_TERMINAL}</span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              CODIGO: {contact.CODIGO_MUELLE}
            </h6>
            <p class="card-text">DESCRIPCION: {contact.DESCRIPCION_MUELLE}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
