class Persona {
  constructor(codigo, nombre, apellido, genero, fechaNacimiento) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.fechaNacimiento = fechaNacimiento;
  }
}

class Empleado extends Persona {

  constructor(codigo, nombre, apellido, genero, fechaNacimiento, fechaIngreso, salarioBasico) {
    super(codigo, nombre, apellido, genero, fechaNacimiento);
    this.fechaIngreso = fechaIngreso;
    this.salarioBasico = salarioBasico;
  }

  toString() {
    return JSON.stringify(this)
  }

  toJson() {
    return JSON.parse(this)
  }

}

export {
  Empleado
}
