import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    NzIconModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(NonNullableFormBuilder);

  //#region Formulario de login
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  //#endregion

  //#region Formulario de recuperar clave y modal

  isVisible = false;
  isLoading = false;

  recuperarClaveForm = this.fb.group({
    cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });

  showModal(): void {
    this.isVisible = true;
  }

  recuperarClave() {
    if (this.recuperarClaveForm.invalid) return;
    this.isLoading = true;

    const { cedula } = this.recuperarClaveForm.value;

    console.log('Iniciando recuperación para cédula:', cedula);

    // TODO: Implementar llamada al servicio de backend
    // Ejemplo: this.authService.requestPasswordReset(cedula).subscribe(...)

    setTimeout(() => {
      this.isLoading = false;
      this.isVisible = false;
      // Idealmente, mostrar un mensaje de éxito con NzMessageService aquí.
    }, 2000);
  }

  handleOk(): void {
    this.recuperarClave();
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  //#endregion
}
