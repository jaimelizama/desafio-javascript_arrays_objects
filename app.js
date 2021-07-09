"use strict";

const PacientesRadiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const PacientesTraumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const PacientesDental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// Parte 2

document.write(
  `<u>Radiología</u></br>Primera atención: ${
    PacientesRadiologia[0].paciente
  } - ${PacientesRadiologia[0].prevision} | Última atención: ${
    PacientesRadiologia[PacientesRadiologia.length - 1].paciente
  } - ${
    PacientesRadiologia[PacientesRadiologia.length - 1].prevision
  }</br></br>`
);

document.write(
  `<u>Traumatología</u></br>Primera atención: ${
    PacientesTraumatologia[0].paciente
  } - ${PacientesTraumatologia[0].prevision} | Última atención: ${
    PacientesTraumatologia[PacientesTraumatologia.length - 1].paciente
  } - ${
    PacientesTraumatologia[PacientesTraumatologia.length - 1].prevision
  }</br></br>`
);

document.write(
  `<u>Dental</u></br>Primera atención: ${PacientesDental[0].paciente} - ${
    PacientesDental[0].prevision
  } | Última atención: ${
    PacientesDental[PacientesDental.length - 1].paciente
  } - ${PacientesDental[PacientesDental.length - 1].prevision}</br></br>`
);

// ejemplo con forOf
// for (const forOf of PacientesRadiologia) {
//   console.log(forOf);
//   console.log(forOf.hora);
// }

// Parte 3

// imprimiendo el forEach
// PacientesRadiologia.forEach((paciente) => {
//   document.write(paciente.hora);
//   document.write(paciente.paciente);
//   document.write(paciente.rut);
//   document.write(paciente.especialista);
//   document.write(paciente.prevision);
// });

// Creando Tabla de forma inicial

/*
function printTable() {
  let table = `
    <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Especialista</th>
          <th>Paciente</th>
          <th>RUT</th>
          <th>Previsión</th>
        <tr>
      </thead>
      <tbody>
  `;

  PacientesRadiologia.forEach((radiologia) => {
    table += `
      <tr>
        <td>${radiologia.hora}</td>
        <td>${radiologia.especialista}</td>
        <td>${radiologia.paciente}</td>
        <td>${radiologia.rut}</td>
        <td>${radiologia.prevision}</td>
      </tr>`;
  });
  PacientesTraumatologia.forEach((traumatologia) => {
    table += `
      <tr>
        <td>${traumatologia.hora}</td>
        <td>${traumatologia.especialista}</td>
        <td>${traumatologia.paciente}</td>
        <td>${traumatologia.rut}</td>
        <td>${traumatologia.prevision}</td>
      </tr>`;
  });
  PacientesDental.forEach((dental) => {
    table += `
      <tr>
        <td>${dental.hora}</td>
        <td>${dental.especialista}</td>
        <td>${dental.paciente}</td>
        <td>${dental.rut}</td>
        <td>${dental.prevision}</td>
      </tr>`;
  });
  table += `
  </tbody>
</table>
`;

  document.write(table);
}

printTable();

*/

// Creando variable para revisar el listado de cada atención
const Pacientes = [
  PacientesRadiologia,
  PacientesTraumatologia,
  PacientesDental,
];

// Ejemplo de visualización de Pacientes y todos sus objetos y propiedades
Pacientes.forEach((element) => {
  console.log(JSON.stringify(element));
});

console.log(Pacientes); // devuelve los array en cada posición

const keys = Object.keys(Pacientes);
console.log(keys);

const values = Object.values(Pacientes);
console.log(values);

// Aplanando el arreglo de Pacientes
const ListadoPacientes = Pacientes.flat();
console.log(ListadoPacientes);

// Creando la tabla con ListadoPacientes

function printTable2() {
  let table = `
    <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Especialista</th>
          <th>Paciente</th>
          <th>RUT</th>
          <th>Previsión</th>
        <tr>
      </thead>
      <tbody>
  `;

  ListadoPacientes.forEach((listado) => {
    table += `
      <tr>
        <td>${listado.hora}</td>
        <td>${listado.especialista}</td>
        <td>${listado.paciente}</td>
        <td>${listado.rut}</td>
        <td>${listado.prevision}</td>
      </tr>`;
  });
  table += `
  </tbody>
</table>
`;

  document.write(table);
}

printTable2();
