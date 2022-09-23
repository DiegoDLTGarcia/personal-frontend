import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import { ServicePersonalService } from 'src/app/Service/service-personal.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona= new Persona();
  constructor(private empleadoService:ServicePersonalService, private router:Router ) { }

  guadarEmpleado(){
      this.empleadoService.registrarEmpleado(this.persona).subscribe(data =>{
        console.log(data);
        this.home();
      },eror => console.log(Error));
  }

  home(){
    this.router.navigate(['/listar']);
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.guadarEmpleado();
  }

}
