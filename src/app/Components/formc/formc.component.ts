import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  standalone: false,
  styleUrl: './formc.component.css',
})
export class FormcComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      valorGanar: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      casado: [false],
    });
  }

  get nombresControl(): FormControl {
    return this.registrationForm.get('nombres') as FormControl;
  }

  get apellidosControl(): FormControl {
    return this.registrationForm.get('apellidos') as FormControl;
  }

  get tipoDocumentoControl(): FormControl {
    return this.registrationForm.get('tipoDocumento') as FormControl;
  }

  get fechaNacimientoControl(): FormControl {
    return this.registrationForm.get('fechaNacimiento') as FormControl;
  }

  get valorGanarControl(): FormControl {
    return this.registrationForm.get('valorGanar') as FormControl;
  }

  get casadoControl(): FormControl {
    return this.registrationForm.get('casado') as FormControl;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
