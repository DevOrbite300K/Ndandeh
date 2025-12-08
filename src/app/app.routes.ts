import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:"auth",
        loadComponent: ()=> import('./pages/auth/auth.component').then(m=>m.AuthComponent),
        children:[
            {
                path:"",
                loadComponent: ()=> import('./pages/auth/login/login.component').then(m=>m.LoginComponent)
            },
            {
                path:"register",
                loadComponent: ()=> import('./pages/auth/register/register.component').then(m=>m.RegisterComponent)
            }
        ]
        
    },


    {
        path:"admin",
        loadComponent: ()=> import("./pages/admin/admin.component").then(m=>m.AdminComponent),
        children:[
            {
                path:"aide",
                loadComponent: ()=> import("./pages/admin/aide/aide.component").then(m=>m.AideComponent)

            },

            {
                path:"fonctionnalite",
                loadComponent: ()=> import("./pages/admin/fonctionnalite/fonctionnalite.component").then(m=>m.FonctionnaliteComponent)
            },
            {
                path:"contact",
                loadComponent: ()=> import("./pages/admin/contact/contact.component").then(m=>m.ContactComponent)
            }
        ]
    },
    {
        path:"",
        loadComponent: ()=> import("./pages/vitrine/vitrine.component").then(m=>m.VitrineComponent),
        children:[
            {
                path:"",
                loadComponent:()=> import("./pages/vitrine/accueil/accueil.component").then(m=>m.AccueilComponent)

            },

            {
                path:"fonctionnalite",
                loadComponent: ()=> import("./pages/vitrine/fonctionnalite/fonctionnalite.component").then(m=>m.FonctionnaliteComponent)
            },
            {
                path:"contact",
                loadComponent:()=> import("./pages/vitrine/contact/contact.component").then(m=>m.ContactComponent)
            },
            {
                path:"savoirplus",
                loadComponent:()=> import("./pages/vitrine/savoir-plus/savoir-plus.component").then(m=>m.SavoirPlusComponent)
            }
        ]
    }

    

    
];
