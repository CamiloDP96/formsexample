import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formexam';
  formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      usuario: ['', [Validators.email, Validators.required]],
      contrasena: ['', Validators.required]
    })
  }

  onSubmit(formulario: any) {
    alert(`
      Usuario: ${formulario.usuario}
      Contrasena: ${formulario.contrasena}
    `);
  }
}
