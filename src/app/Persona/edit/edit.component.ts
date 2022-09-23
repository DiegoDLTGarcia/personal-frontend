import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import { ServicePersonalService } from 'src/app/Service/service-personal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  persona: Persona = new Persona();
  constructor(private empleadoService: ServicePersonalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.persona = dato;
    }, error => console.log(error));
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['/listar']);
   swal.fire('Empleado actualizado', `El empleado ${this.persona.nombre} ha sido actualizado con exito`, `success`);
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleado(this.id, this.persona).subscribe(data => {
      this.irAlaListaDeEmpleados();
      console.log("Esto es lo que mando: "+this.persona)
    }, error => console.log(error));
  }

}
