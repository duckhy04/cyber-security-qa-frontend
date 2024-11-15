import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },

    // Router for auth
    {
        path: 'auth',
        loadComponent: () => import('../app/components/auth/auth.component').then((m) => m.AuthComponent)
    },

    // Router for admin
    {
        path: 'admin',
        loadComponent: () => import('../app/components/admin/admin.component').then((m) => m.AdminComponent)
    },

    // Router for user
    {
        path: 'user',
        loadComponent: () => import('../app/components/user/user.component').then((m) => m.UserComponent)
    },
];
