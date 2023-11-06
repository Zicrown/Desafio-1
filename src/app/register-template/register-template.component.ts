import { Component,OnInit } from '@angular/core';

import { Registro } from '../models/registro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss']
})
export class RegisterTemplateComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor() {
    
  }

  datos: Registro = {
    nombre: '',
    apellido: '',
    username: '',
    contrasena: '',
    correo: '',
    telefono: ''
  }

  onSubmit() {
    console.log(this.datos);
  }
}

