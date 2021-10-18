import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './component/templates/initial-page/initial-page.component';
import { InspectionPageFormComponent } from './component/templates/inspection-page-form/inspection-page-form.component';
import { InspetionPageEquipComponent } from './component/templates/inspetion-page-equip/inspetion-page-equip.component';
import { LoginPageComponent } from './component/templates/login-page/login-page.component';
import { ManutencaoPageEquipComponent } from './component/templates/manutencao-page-equip/manutencao-page-equip.component';
import { ManutencaoPageFormComponent } from './component/templates/manutencao-page-form/manutencao-page-form.component';
import { AdminInitialPageComponent } from './component/templates/admin-initial-page/admin-initial-page.component';
import { RegisterInpectionComponent } from './component/templates/register-inpection/register-inpection.component';
import { MaintenanceRegisterPageComponent } from './component/templates/maintenance-register-page/maintenance-register-page.component';
import { RegisterUserComponent } from './component/templates/register-user/register-user.component';
import { DashboardsPageComponent } from './component/templates/dashboards-page/dashboards-page.component';

const routes: Routes = [
  { path:'' ,component: LoginPageComponent },
  { path:'paginaInicial', component: InitialPageComponent },
  { path:'inspection-page-equip', component: InspetionPageEquipComponent },
  { path:'inspection-page-form', component: InspectionPageFormComponent },
  { path:'manutencao-page-equip', component: ManutencaoPageEquipComponent },
  { path:'manutencao-page-form', component: ManutencaoPageFormComponent },
  { path:'admin-initial-page', component: AdminInitialPageComponent },
  { path:'registerInspection', component:RegisterInpectionComponent },
  { path:'maintenanceRegister', component: MaintenanceRegisterPageComponent },
  { path:'registerUser', component: RegisterUserComponent },
  { path:'dashboardsPage', component: DashboardsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
