import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await (import('./domain/pages/inicio/inicio.component'))).InicioComponent
    },
    {
        path: 'imoveis',
        loadComponent: async () => (await (import('./domain/pages/imoveis/imoveis.component'))).ImoveisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
