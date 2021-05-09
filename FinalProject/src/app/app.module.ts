import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductwithsubscribeComponent } from './listproductwithsubscribe/listproductwithsubscribe.component';
import { ListproductwithasyncComponent } from './listproductwithasync/listproductwithasync.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {​​​​​​​​MatSelectModule}​​​​​​​​ from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteComponent } from './delete/delete.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { ListwithmaterialtableComponent } from './listwithmaterialtable/listwithmaterialtable.component';
import {​​​​​​​​MatTableModule}​​​​​​​​ from'@angular/material/table';
import {​​​​​​​​MatExpansionModule}​​​​​​​​ from'@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { OperationComponent } from './operation/operation.component';
import { UpdatebyidComponent } from './updatebyid/updatebyid.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    ListproductwithsubscribeComponent,
    ListproductwithasyncComponent,
    UpdateproductComponent,
    DeleteComponent,
    GetbyidComponent,
    ListwithmaterialtableComponent,
    OperationComponent,
    UpdatebyidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,​​​​​​​​
    MatTableModule,
    ​​​​​​​​MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
