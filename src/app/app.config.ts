import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { provideNzIcons } from 'ng-zorro-antd/icon'; // Solo necesitas el provider aquí

import {
  UserOutline,
  LockOutline,
  IdcardOutline,
  KeyOutline,
  EyeOutline,
  EyeInvisibleOutline,
} from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';

// Lista de iconos disponibles en toda la app
const icons = [
  UserOutline,
  LockOutline,
  IdcardOutline,
  KeyOutline,
  EyeOutline,
  EyeInvisibleOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: NZ_I18N, useValue: es_ES },
    provideNzIcons(icons), // Registra los iconos globalmente
  ],
};
