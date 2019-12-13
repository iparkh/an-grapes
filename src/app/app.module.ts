import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './shared/employee.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { environment } from '../environments/environment';
import { DepartmentService } from './shared/department.service';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { GrapesComponent } from './grapes/grapes.component';
import { GrapeComponent } from './grapes/grape/grape.component';
import { GrapeListComponent } from './grapes/grape-list/grape-list.component';

import { HttpClientModule } from '@angular/common/http';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { StoreListComponent } from './stores/store-list/store-list.component';
import { BasketComponent } from './basket/basket.component';
import { UploadComponent } from './upload/upload.component';
import { ImageComponent } from './upload/image/image.component';
import { PriceComponent } from './price/price.component';
import { PriceListComponent } from './price/price-list/price-list.component';
import { BacketGoodComponent } from './basket/backet-good/backet-good.component';
import { BacketGoodListComponent } from './basket/backet-good-list/backet-good-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    GrapesComponent,
    GrapeComponent,
    GrapeListComponent,
    StoresComponent,
    StoreComponent,
    StoreListComponent,
    BasketComponent,
    UploadComponent,
    ImageComponent,
    PriceComponent,
    PriceListComponent,
    BacketGoodComponent,
    BacketGoodListComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    DepartmentService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeComponent, GrapeComponent]
})
export class AppModule { }
