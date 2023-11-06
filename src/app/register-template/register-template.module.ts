import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterTemplateComponent } from "./register-template.component";
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

const rutas: Routes = [
  {
    path: '',
    component: RegisterTemplateComponent,
  }
]

@NgModule({
  declarations: [
    RegisterTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    FormsModule,
    MdbFormsModule,
  ],
  exports:[RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegisterTemplateModule { }
