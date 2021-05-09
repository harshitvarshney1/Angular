import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteComponent } from './delete/delete.component';
import { GetbyidComponent } from './getbyid/getbyid.component';

import { HomeComponent } from './home/home.component';
import { ListproductwithasyncComponent } from './listproductwithasync/listproductwithasync.component';
import { ListproductwithsubscribeComponent } from './listproductwithsubscribe/listproductwithsubscribe.component';
import { ListwithmaterialtableComponent } from './listwithmaterialtable/listwithmaterialtable.component';
import { OperationComponent } from './operation/operation.component';
import { UpdatebyidComponent } from './updatebyid/updatebyid.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'product/:id',component : OperationComponent
  // ,children: [
  //   {path:'updateproducts', component : UpdateproductComponent},
  //   {path: 'deleteproduct', component: DeleteComponent}, 
  // ]
},
  {path:'addproduct',component : AddproductComponent},
  {path:'listwithasync', component : ListproductwithasyncComponent},
  {path:'listwithsubscribe', component :ListproductwithsubscribeComponent},
  {path:'materialtable',component: ListwithmaterialtableComponent},
  {path:'updateproduct', component : UpdateproductComponent},
  {path:'getbyid', component :GetbyidComponent},
 {path: 'delete', component: DeleteComponent}, 
 {path: 'update/:id',component :UpdatebyidComponent},
  {path:'',redirectTo: 'home',pathMatch :'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
