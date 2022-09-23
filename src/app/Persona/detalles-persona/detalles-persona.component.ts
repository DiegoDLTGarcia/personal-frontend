import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona';
import { ServicePersonalService } from 'src/app/Service/service-personal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css']
})

export class DetallesPersonaComponent implements OnInit {

  id: number;
  persona: Persona;
  constructor(private service: ServicePersonalService,  private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.persona = new Persona();
    this.service.obtenerEmpleadoPorId(this.id).subscribe(data => {
      this.persona = data;
      swal.fire(`Detalles del empleado ${this.persona.nombre}`);
    });
  }

}
