import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ActivateAccountPageComponent } from './pages/activate-account-page/activate-account-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SimulationComponent } from './pages/dashboard-components/simulation/simulation.component';
import { StatistiqueComponent } from './pages/dashboard-components/statistique/statistique.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        children: [
            {
                path: '',
                component: GaleryPageComponent
                
            },
            
            {
                path: 'sim',
                component: SimulationComponent
                
            },
            {
                path: 'statistique',
                component: StatistiqueComponent
              
            }
           
          
        ]
    },
    {
        path: 'forgot',
        component: ForgotPasswordPageComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'activate-account',
        component: ActivateAccountPageComponent
      },
    {
        path: 'register',
        component: RegisterPageComponent
    }
];


