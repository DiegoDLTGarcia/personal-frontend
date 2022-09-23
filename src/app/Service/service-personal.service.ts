import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Model/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonalService {

  //personas: Persona[];
  constructor(private http:HttpClient) { }

  Url ='http://localhost:8080/api/v1/empleados';

  //Para mostrar los empleados
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  
  //Este metodo sirve para registrar un empleado
  registrarEmpleado(persona: Persona): Observable<object>{
    return this.http.post(this.Url, persona);

  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id: number, persona: Persona): Observable<Object> {
    return this.http.put(this.Url + "/" + persona.idempleado, persona);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  eliminarEmpleado(id: number): Observable<Object> {
    return this.http.delete(`${this.Url}/${id}`);
  }

}
