import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import {ServicePersonalService} from '../../Service/service-personal.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  constructor(private service: ServicePersonalService,private router:Router) { }

  ngOnInit(): void {
      this.obneterEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['edit', id]);
  }

  private obneterEmpleados(){
  this.service.getPersonas().subscribe(data => {
    this.personas = data;
    console.log(this.personas);
  })
}

  eliminarEmpleado(id: number) {
    swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      //confirmButtonClass: 'btn btn-success',
      //cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.service.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obneterEmpleados();
          swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
     })
  }

  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['detalles-persona', id]);
  }


}
