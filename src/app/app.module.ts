import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './component/templates/login-page/login-page.component';
import { InitialPageComponent } from './component/templates/initial-page/initial-page.component';
import { InspetionPageEquipComponent } from './component/templates/inspetion-page-equip/inspetion-page-equip.component';
import { InspectionPageFormComponent } from './component/templates/inspection-page-form/inspection-page-form.component';
import { ManutencaoPageEquipComponent } from './component/templates/manutencao-page-equip/manutencao-page-equip.component';
import { ManutencaoPageFormComponent } from './component/templates/manutencao-page-form/manutencao-page-form.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AdminInitialPageComponent } from './component/templates/admin-initial-page/admin-initial-page.component';
import { RegisterInpectionComponent } from './component/templates/register-inpection/register-inpection.component';
import { MaintenanceRegisterPageComponent } from './component/templates/maintenance-register-page/maintenance-register-page.component';
import { RegisterUserComponent } from './component/templates/register-user/register-user.component';
import { DashboardsPageComponent } from './component/templates/dashboards-page/dashboards-page.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InitialPageComponent,
    InspetionPageEquipComponent,
    InspectionPageFormComponent,
    ManutencaoPageEquipComponent,
    ManutencaoPageFormComponent,
    AdminInitialPageComponent,
    RegisterInpectionComponent,
    MaintenanceRegisterPageComponent,
    RegisterUserComponent,
    DashboardsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
