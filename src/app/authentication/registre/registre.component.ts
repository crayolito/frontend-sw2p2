import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export default class RegistreComponent {
  inputColaborador = signal<boolean>(false);
  public formBuilder = inject(FormBuilder);
  public router = inject(Router);

  // NOTE: FORMULARIO DE INICIO SESION
  public myFormRegistro: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]],
    estatus: ['', [Validators.required]],
    codigo: ['', [Validators.required, Validators.minLength(10)]]
  });

  updateInputColaborador(value: boolean): void {
    this.inputColaborador.set(value);
  }

  updateEstatus(value: string): void {
    this.myFormRegistro.get('estatus')!.setValue(value);
    if (value.includes("Viajero")) {
      this.inputColaborador.set(false);
    } else {
      this.inputColaborador.set(true);
    }
  }

  estatus: string[] = [
    "Viajero",
    "Encargado Aerolinea",
    "Encargado Hotel",
    "Encargado Turismo"
  ]

  procesarFormulario() {
    if (this.myFormRegistro.invalid) return;
    const formValues = this.myFormRegistro.value;
    console.log(formValues);
  }
}
