import { Empleado } from "../entidad/empleado.js";

export class CasoUsoEmpleado {
  constructor(repositorioEmpleado) {
    this.repositorioEmpleado = repositorioEmpleado;
  }

  addEmpleado(data) {
    const empleado = new Empleado(
      data.codigo,
      data.nombre,
      data.apellido
    );
    this.repositorioEmpleado.addEmpleado(empleado)
  }

}
