import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  standalone: false,
  styleUrl: './formc.component.css',
})
export class FormcComponent {
  registrationForm: FormGroup;
  @Output() userCreated = new EventEmitter<void>();
  @Output() error = new EventEmitter<string>();

  constructor(private api: ServiceService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numDocumento: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
          Validators.max(2147483647),
        ],
      ],
      fechaNacimiento: ['', Validators.required],
      valorGanar: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
          Validators.max(2147483647),
        ],
      ],
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

  get numDocumentoControl(): FormControl {
    return this.registrationForm.get('numDocumento') as FormControl;
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
      const user = {
        documentNumber: this.registrationForm.value.numDocumento,
        firstName: this.registrationForm.value.nombres,
        lastName: this.registrationForm.value.apellidos,
        documentTypeId: this.registrationForm.value.tipoDocumento,
        birthDate: this.registrationForm.value.fechaNacimiento,
        maritalStatus: this.registrationForm.value.casado,
        total: this.registrationForm.value.valorGanar,
      };

      this.api.createUser(user).subscribe({
        next: (response: any) => {
          console.log('User created:', response);
          this.userCreated.emit();
        },
        error: (error: any) => {
          this.error.emit('Error creating user: ' + error);
        },
        complete: () => {
          console.log('Request completed');
          this.registrationForm.reset({ casado: false });
        },
      });
    } else {
      this.markAllAsTouched(this.registrationForm);
      this.error.emit('Fields cannot be invalid');
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
