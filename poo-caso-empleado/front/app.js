import { CasoUsoEmpleado } from '../casos-usos/caso-uso-empleado.js'
import { RepositorioEmpleado } from '../repositorio/repositorio-empleado.js'

const repositorioEmpleado = new RepositorioEmpleado()
const casoUsoEmpleado = new CasoUsoEmpleado(repositorioEmpleado)


const calcularEdad = document.querySelector('#id-calcular-edad');

calcularEdad.addEventListener('click', (event) => {
  casoUsoEmpleado.addEmpleado(
    { codigo: "0001", nombre: "Ernesto", apellido: "Guaman" }
  )

  console.log(repositorioEmpleado.empleados)

});
